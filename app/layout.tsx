import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GETUP BR - Eleve sua marca',
  description: 'Conquiste o reconhecimento da sua marca conosco',
  generator: 'caio',
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
