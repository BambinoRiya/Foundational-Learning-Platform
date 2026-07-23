import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Foundational Learning Data & Evidence Platform — Cameroon',
  description:
    'Coordinating evidence, data and collective action to improve foundational literacy and numeracy across Cameroon — anchored with MINEDUB, active in two regions.',
  keywords: ['education', 'Cameroon', 'MINEDUB', 'foundational learning', 'data platform', 'literacy', 'numeracy', 'eBASE Africa'],
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
