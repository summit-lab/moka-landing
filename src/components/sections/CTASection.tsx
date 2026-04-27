'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function CTASection() {
  const { t } = useLanguage()
  const { ctaSection, cta } = t

  return (
    <section className="bg-white px-4 py-12 md:py-16">
      <AnimateIn>
        <div
          className="mx-auto relative overflow-hidden rounded-3xl min-h-[560px] md:min-h-[520px] flex items-center justify-center"
          style={{
            maxWidth: '80rem',
            border: '1px solid rgba(59,31,5,0.10)',
            boxShadow: '0 2px 16px rgba(59,31,5,0.09), 0 1px 3px rgba(59,31,5,0.06)',
          }}
        >
          <img
            src="/imagen-cta.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center bottom' }}
          />

          <div className="relative z-10 flex flex-col items-center text-center max-w-xs md:max-w-sm px-8 py-16">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight"
              style={{ color: '#3b1f05', fontFamily: "'Neue Machina', sans-serif", whiteSpace: 'pre-line' }}
            >
              {ctaSection.title}
            </h2>
            <p
              className="mt-4 text-sm md:text-base leading-relaxed text-pulse"
              style={{ color: '#3b1f05', fontFamily: 'Archivo', fontWeight: 500 }}
            >
              {ctaSection.body}
            </p>
            <a
              href="/demo"
              className="btn-cta mt-6 inline-flex items-center rounded-2xl px-7 py-3.5 text-sm font-bold text-white"
              style={{ fontFamily: 'Archivo', background: '#3b1f05' }}
            >
              <span className="btn-content">
                <span className="btn-label">{cta.primary} →</span>
                <span className="btn-label-clone" aria-hidden="true">{cta.primary} →</span>
              </span>
            </a>
          </div>
        </div>
      </AnimateIn>
    </section>
  )
}
