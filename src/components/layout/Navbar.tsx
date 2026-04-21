'use client'

import Link from 'next/link'
import { SITE_CONFIG } from '@/constants/SITE_CONFIG'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className="flex w-full max-w-5xl items-center justify-between rounded-2xl border border-white/50 px-6 py-3"
        style={{
          background: 'linear-gradient(to bottom, rgba(186,224,245,0.55) 0%, rgba(255,255,255,0.50) 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          boxShadow: '0 2px 24px rgba(59,31,5,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
        }}
      >
        <Link href="/" className="flex items-center gap-2 font-black text-lg tracking-tight" style={{ color: '#1a0a00' }}>
          <span>🐕</span>
          <span>moka</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {SITE_CONFIG.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold transition-colors hover:opacity-70"
              style={{ color: '#8a4a18' }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden md:block rounded-xl border px-4 py-2 text-sm font-semibold transition-colors hover:bg-white/90"
            style={{ borderColor: 'rgba(59,31,5,0.2)', color: '#1a0a00', background: 'rgba(255,255,255,0.6)' }}
          >
            {SITE_CONFIG.cta.secondary}
          </a>
          <a
            href="#hero"
            className="rounded-xl px-5 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: '#3b1f05' }}
          >
            {SITE_CONFIG.cta.nav}
          </a>
        </div>
      </nav>
    </header>
  )
}
