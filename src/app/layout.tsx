import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.usemoka.io'),
  title: 'Moka',
  description:
    'Duplica tu alcance y DMs en Instagram en solo 2hs/sem. Tracking avanzado, espionaje de competidores y producción de contenido con IA.',
  openGraph: {
    title: 'Moka — Duplica tu alcance en Instagram',
    description:
      'Duplica tu alcance y DMs en Instagram en solo 2hs/sem. Tracking avanzado, espionaje de competidores y producción de contenido con IA.',
    images: [{ url: '/og-image.png', width: 2172, height: 724 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moka — Duplica tu alcance en Instagram',
    description:
      'Duplica tu alcance y DMs en Instagram en solo 2hs/sem.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
