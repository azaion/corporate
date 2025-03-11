import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Azaion',
  description: 'Transforming UAV Operations with AI',
  generator: 'NextJS',
  icons: {
    icon: [
      {
        url: '/logos/logo.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: ['/logos/logo.svg'],
    apple: [
      {
        url: '/logos/logo.svg',
        type: 'image/svg+xml',
      }
    ],
  }
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
