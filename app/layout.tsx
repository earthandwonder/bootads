import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Boot Ads - Get Sponsored',
  description: 'Get sponsored with Boot Ads',
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

