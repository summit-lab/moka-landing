'use client'

import { createContext, useContext, useSyncExternalStore, type ReactNode } from 'react'
import { TRANSLATIONS, type Lang, type Translations } from '@/constants/TRANSLATIONS'

type LanguageCtx = {
  lang: Lang
  t: Translations
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageCtx | null>(null)

const STORAGE_KEY = 'moka-lang'
const LANG_EVENT = 'moka-lang-change'

function subscribe(callback: () => void) {
  window.addEventListener(LANG_EVENT, callback)
  window.addEventListener('storage', callback)
  return () => {
    window.removeEventListener(LANG_EVENT, callback)
    window.removeEventListener('storage', callback)
  }
}

function getSnapshot(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved === 'en' || saved === 'es' ? saved : 'es'
}

// During SSR and the first hydration pass we always assume Spanish so the
// server and client render the same markup; useSyncExternalStore switches to
// the real stored value right after hydration.
function getServerSnapshot(): Lang {
  return 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  function toggleLang() {
    const next: Lang = lang === 'es' ? 'en' : 'es'
    localStorage.setItem(STORAGE_KEY, next)
    window.dispatchEvent(new Event(LANG_EVENT))
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
