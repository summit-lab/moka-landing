'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { TRANSLATIONS, type Lang, type Translations } from '@/constants/TRANSLATIONS'

type LanguageCtx = {
  lang: Lang
  t: Translations
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageCtx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  useEffect(() => {
    const saved = localStorage.getItem('moka-lang') as Lang | null
    if (saved === 'en' || saved === 'es') setLang(saved)
  }, [])

  function toggleLang() {
    setLang((prev) => {
      const next: Lang = prev === 'es' ? 'en' : 'es'
      localStorage.setItem('moka-lang', next)
      return next
    })
  }

  return (
    <LanguageContext.Provider value={{ lang, t: TRANSLATIONS[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
