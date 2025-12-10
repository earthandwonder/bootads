import type { Metadata } from 'next'
import { Lilita_One, Rubik, Righteous } from 'next/font/google'
import './globals.css'

const lilitaOne = Lilita_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lilita-one',
  display: 'swap',
})

const rubik = Rubik({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
})

const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-righteous',
  display: 'swap',
})

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
    <html lang="en" className={`${lilitaOne.variable} ${rubik.variable} ${righteous.variable}`}>
      <body>{children}</body>
    </html>
  )
}

