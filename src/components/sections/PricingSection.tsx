'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function PricingSection() {
  const { t } = useLanguage()
  const { pricing, cta } = t

  return (
    <section id={pricing.id} className="bg-white px-4 py-12 md:py-24">
      <div className="mx-auto max-w-6xl">

        <AnimateIn className="text-center mb-8 md:mb-16">
          <span
            className="mb-4 inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{
              fontFamily: 'Archivo',
              fontWeight: 500,
              background: 'linear-gradient(135deg, rgba(186,224,245,0.45) 0%, rgba(210,235,250,0.3) 100%)',
              backdropFilter: 'blur(8px)',
              borderColor: 'rgba(80,140,200,0.4)',
              color: '#2a6090',
            }}
          >
            <span style={{ fontSize: '0.65rem' }}>✦</span> {pricing.badge}
          </span>
          <h2 className="text-2xl font-black md:text-5xl leading-[0.9]" style={{ color: '#3b1f05' }}>
            {pricing.title}
            <br />
            {pricing.titleAccent}
          </h2>
          <p
            className="mt-5 mx-auto max-w-xl text-base leading-relaxed"
            style={{ fontFamily: 'Archivo', color: '#3b1f05', opacity: 0.7 }}
          >
            {pricing.subtitle}
          </p>
        </AnimateIn>

        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {pricing.plans.map((plan, i) => (
            <AnimateIn key={plan.name} delay={i * 80} className="flex">
              <div
                className="relative flex w-full flex-col rounded-2xl px-7 py-8 card-hover"
                style={{
                  background: plan.highlight ? '#fff' : '#f5f5f5',
                  border: plan.highlight ? '2px solid #3b1f05' : '1px solid rgba(59,31,5,0.08)',
                  boxShadow: plan.highlight
                    ? '0 8px 40px rgba(59,31,5,0.16), 0 2px 6px rgba(59,31,5,0.08)'
                    : '0 2px 16px rgba(59,31,5,0.09), 0 1px 3px rgba(59,31,5,0.06)',
                }}
              >
                {plan.badge && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold text-white"
                    style={{ fontFamily: 'Archivo', background: '#3b1f05' }}
                  >
                    {plan.badge}
                  </span>
                )}

                <h3
                  className="text-lg font-black"
                  style={{ fontFamily: "'Archivo', sans-serif", color: '#3b1f05' }}
                >
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-2">
                  <span
                    className="text-4xl md:text-5xl font-black tracking-tight"
                    style={{ fontFamily: "'Neue Machina', sans-serif", color: '#3b1f05' }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm font-medium" style={{ fontFamily: 'Archivo', color: '#9a7060' }}>
                    {plan.period}
                  </span>
                </div>

                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ fontFamily: 'Archivo', fontWeight: 500, color: '#3b1f05', opacity: 0.75 }}
                >
                  {plan.note}
                </p>

                <div className="my-6 h-px w-full" style={{ background: 'rgba(59,31,5,0.10)' }} />

                <p
                  className="mb-3 text-xs font-bold uppercase tracking-wide"
                  style={{ fontFamily: 'Archivo', color: '#9a7060' }}
                >
                  {pricing.includesTitle}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {pricing.includes.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3b1f05"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-sm leading-snug" style={{ fontFamily: 'Archivo', color: '#3b1f05' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/demo"
                  className="btn-cta mt-8 flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-white"
                  style={{ fontFamily: 'Archivo', background: '#3b1f05' }}
                >
                  <span className="btn-content">
                    <span className="btn-label">{cta.nav}</span>
                    <span className="btn-label-clone" aria-hidden="true">{cta.nav}</span>
                  </span>
                </Link>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
