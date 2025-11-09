import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'श्रीमद् भगवद्गीता - Bhagavad Gita',
  description: 'The sacred scripture of Hinduism',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  )
}
