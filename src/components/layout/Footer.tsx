import Link from 'next/link'
import { SITE_CONFIG } from '@/constants/SITE_CONFIG'

export function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <Link href="/" className="text-lg font-bold tracking-tight text-zinc-900">
          moka
        </Link>

        <nav className="flex gap-8">
          {SITE_CONFIG.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-zinc-400">© 2026 Moka. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
