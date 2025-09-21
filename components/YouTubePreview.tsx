"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"

interface YouTubePreviewProps {
  videoId: string
  title: string
  posterSrc: string
  className?: string
}

export default function YouTubePreview({ videoId, title, posterSrc, className }: YouTubePreviewProps) {
  // Whether the iframe has been created at least once
  const [hasStarted, setHasStarted] = useState(false)
  // Whether we currently show the poster overlay (paused or not yet started)
  const [showOverlay, setShowOverlay] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  const origin = useMemo(() => {
    if (typeof window !== "undefined") {
      return window.location.origin
    }
    return ""
  }, [])

  const embedSrc = useMemo(() => {
    const base = `https://www.youtube.com/embed/${videoId}`
    const params = new URLSearchParams({
      autoplay: "1",
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
      enablejsapi: "1",
    })
    if (origin) params.set("origin", origin)
    return `${base}?${params.toString()}`
  }, [videoId, origin])

  // Listen for player state changes from YouTube to toggle overlay on pause/play
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data
        if (!data) return
        // Filter to our player if id is provided
        if (data.id && data.id !== `yt-${videoId}`) return
        const state = data?.info?.playerState
        if (typeof state === "number") {
          if (state === 1) {
            // playing
            setShowOverlay(false)
          } else if (state === 2 || state === 0) {
            // paused or ended
            setShowOverlay(true)
          }
        }
      } catch (_) {
        // ignore non-JSON messages
      }
    }
    window.addEventListener("message", onMessage)
    return () => window.removeEventListener("message", onMessage)
  }, [videoId])

  const sendCommand = (func: "playVideo" | "pauseVideo") => {
    const win = iframeRef.current?.contentWindow
    if (!win) return
    try {
      win.postMessage(
        JSON.stringify({ event: "command", func, args: [] }),
        "*"
      )
    } catch (_) {
      // no-op
    }
  }

  const handlePlay = () => {
    if (!hasStarted) {
      // First time: mount iframe and let it autoplay
      setHasStarted(true)
      setShowOverlay(false)
    } else {
      // Resume existing player
      sendCommand("playVideo")
      setShowOverlay(false)
    }
  }

  const handlePause = () => {
    // Pause but keep iframe mounted so playback position is preserved
    sendCommand("pauseVideo")
    setShowOverlay(true)
  }

  return (
    <div className={["relative aspect-video rounded-lg overflow-hidden", className].filter(Boolean).join(" ")}>      
      {/* Iframe is rendered only after first play and remains mounted */}
      {hasStarted && (
        <iframe
          ref={iframeRef}
          id={`yt-${videoId}`}
          className="absolute inset-0 w-full h-full z-0"
          src={embedSrc}
          title={title}
          referrerPolicy="strict-origin-when-cross-origin"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}

      {/* Click-to-pause transparent overlay while playing */}
      {hasStarted && !showOverlay && (
        <button
          type="button"
          aria-label="Pause video"
          title="Pause"
          className="absolute left-0 right-0 top-0 bottom-16 w-full z-10 bg-transparent [touch-action:auto]"
          onClick={handlePause}
        />
      )}

      {/* Overlay (poster + play) shown before start and whenever paused) */}
      {showOverlay && (
        <div
          className="absolute inset-0 z-10 [touch-action:auto]"
          role="button"
          aria-label="Play video"
          title="Play"
          onClick={handlePlay}
        >
          {/* Poster Image (non-interactive to allow scrolling) */}
          <img
            src={posterSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            loading="lazy"
            decoding="async"
          />
          {/* Dark overlay tint (also non-interactive) */}
          <div className="absolute inset-0 bg-black/30 transition-colors pointer-events-none" />
          {/* Play button is the only interactive element */}
          <button
            type="button"
            aria-label="Play video"
            title="Play"
            onClick={(e) => { e.stopPropagation(); handlePlay(); }}
            className="absolute bottom-3 right-3 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/90 text-black shadow-lg hover:scale-105 transition-transform [touch-action:manipulation]"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ml-0.5">
              <path d="M8 5v14l11-7z"></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
