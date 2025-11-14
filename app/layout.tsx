import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lanssie',
  description: 'Personal website of Lanssie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

