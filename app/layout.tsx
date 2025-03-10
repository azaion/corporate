import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Azaion',
  description: 'Transforming UAV Operations with AI',
  generator: 'NextJS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
