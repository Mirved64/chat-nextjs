import { Jost } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const jost = Jost({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  subsets: ['cyrillic', 'latin'],
})

export const metadata: Metadata = {
  title: 'Chat Next.js',
  description: 'Simple Chat with Bot',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={jost.className}>{children}</body>
    </html>
  )
}
