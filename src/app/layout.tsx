import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Moka — Duplica tu alcance en Instagram',
  description:
    'Duplica tu alcance y DMs en Instagram en solo 2hs/sem. Tracking avanzado, espionaje de competidores y producción de contenido con IA.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
