import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Moka',
  description:
    'Duplica tu alcance y DMs en Instagram en solo 2hs/sem. Tracking avanzado, espionaje de competidores y producción de contenido con IA.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
