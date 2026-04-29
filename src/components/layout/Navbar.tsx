'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, t, toggleLang } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      if (y > 80) setScrolled(true)
      else if (y < 40) setScrolled(false)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="mx-auto transition-all duration-500"
        style={{
          maxWidth: scrolled ? '100vw' : '64rem',
          padding: scrolled ? '0' : '1rem 1rem 0',
        }}
      >
        <nav
          className="flex w-full items-center justify-between transition-all duration-500"
          style={{
            borderRadius: scrolled ? '0' : '1rem',
            padding: scrolled ? '0.75rem 2.5rem' : '0.75rem 1.5rem',
            background: scrolled
              ? 'rgba(255,255,255,0.97)'
              : 'linear-gradient(to bottom, rgba(186,224,245,0.55) 0%, rgba(255,255,255,0.50) 100%)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            boxShadow: scrolled
              ? '0 1px 0 rgba(59,31,5,0.07), 0 4px 24px rgba(59,31,5,0.07)'
              : '0 2px 24px rgba(59,31,5,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
            border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.5)',
          }}
        >
          <Link href="/" className="flex items-center gap-2" style={{ color: '#1a0a00' }}>
            <span className="moka-wave">
              <img src="/moka-logo.svg" alt="Moka" width={44} height={44} />
            </span>
            <span
              className="text-2xl tracking-tight"
              style={{ fontFamily: "'Neue Machina', sans-serif", fontWeight: 800, color: '#1a0a00' }}
            >
              moka
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold rounded-lg px-3 py-1.5 transition-all hover:bg-black/10"
                style={{ fontFamily: 'Archivo', color: '#1a0a00' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="hidden md:flex items-center overflow-hidden rounded-lg text-xs font-bold transition-all"
              style={{
                fontFamily: 'Archivo',
                border: '1px solid rgba(59,31,5,0.18)',
              }}
              aria-label="Toggle language"
            >
              <span
                style={{
                  padding: '4px 9px',
                  background: lang === 'es' ? '#3b1f05' : 'transparent',
                  color: lang === 'es' ? '#fff' : '#3b1f05',
                  transition: 'background 0.2s, color 0.2s',
                }}
              >
                ES
              </span>
              <span
                style={{
                  padding: '4px 9px',
                  background: lang === 'en' ? '#3b1f05' : 'transparent',
                  color: lang === 'en' ? '#fff' : '#3b1f05',
                  transition: 'background 0.2s, color 0.2s',
                }}
              >
                EN
              </span>
            </button>

            <a
              href="https://app.usemoka.io"
              className="hidden md:block rounded-xl border px-4 py-2 text-sm font-bold transition-colors hover:bg-white/90"
              style={{
                fontFamily: 'Archivo',
                borderColor: 'rgba(59,31,5,0.2)',
                color: '#1a0a00',
                background: 'rgba(255,255,255,0.6)',
              }}
            >
              {t.cta.secondary}
            </a>
            <a
              href="/demo"
              className="btn-cta rounded-xl px-5 py-2 text-sm font-bold text-white"
              style={{ fontFamily: 'Archivo', background: '#3b1f05' }}
            >
              <span className="btn-content">
                <span className="btn-label">{t.cta.nav}</span>
                <span className="btn-label-clone" aria-hidden="true">{t.cta.nav}</span>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
