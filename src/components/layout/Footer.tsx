import Link from 'next/link'
import { SITE_CONFIG } from '@/constants/SITE_CONFIG'

export function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 overflow-hidden">
      {/* Main content */}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 md:flex-row">
        <Link href="/" className="flex items-center gap-3">
          <span className="moka-wave">
            <img src="/moka-logo.svg" alt="Moka" width={52} height={52} />
          </span>
          <span
            className="text-3xl font-black tracking-tight"
            style={{ fontFamily: "'Neue Machina', sans-serif", color: '#3b1f05' }}
          >
            moka
          </span>
        </Link>

        <nav className="flex gap-8">
          {SITE_CONFIG.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm transition-colors hover:opacity-70"
              style={{ fontFamily: 'Archivo', color: '#3b1f05' }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <p className="text-sm" style={{ fontFamily: 'Archivo', color: '#9a7060' }}>
          © 2026 Moka. Todos los derechos reservados.
        </p>
      </div>

      {/* Footer image — full width, shows completely */}
      <div className="w-full">
        <img
          src="/moka-footer.png"
          alt=""
          className="w-full block"
        />
      </div>
    </footer>
  )
}
