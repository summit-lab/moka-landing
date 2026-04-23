import Script from 'next/script'
import { Navbar } from '@/components/layout/Navbar'
import { IClosedWatcher } from '@/components/ui/IClosedWatcher'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agendá tu Demo — Moka',
  description: 'Hablamos 30 minutos, analizamos tu cuenta y te mostramos exactamente cómo Moka puede escalar tu marca personal.',
}

const benefits = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    text: 'Analizamos tu cuenta en vivo y te mostramos tus métricas reales',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    text: 'Te decimos exactamente qué cambiar para duplicar tu alcance',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
    text: 'Ves Moka funcionando con tu contenido, no con ejemplos genéricos',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    text: 'Solo 30 minutos. Sin compromiso. Sin presión.',
  },
]

export default function DemoPage() {
  return (
    <>
      <Navbar />

      <main
        className="min-h-screen"
        style={{
          backgroundImage: 'url(/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="min-h-screen" style={{ background: 'rgba(255,255,255,0.55)' }}>
          <div className="mx-auto max-w-6xl px-4 pt-28 pb-28">
            <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 items-start">

              {/* Left column */}
              <div className="flex flex-col gap-7 md:sticky md:top-28">
                <div className="flex items-center gap-2">
                  <img src="/moka-logo.svg" alt="Moka" width={34} height={34} />
                  <span style={{ fontFamily: "'Neue Machina', sans-serif", fontWeight: 800, color: '#1a0a00', fontSize: '1.15rem' }}>
                    moka
                  </span>
                </div>

                <div>
                  <h1
                    className="text-3xl md:text-4xl font-black leading-[1.05] tracking-tight"
                    style={{ color: '#3b1f05', fontFamily: "'Neue Machina', sans-serif" }}
                  >
                    Agendá tu<br />Demo Gratuita
                  </h1>
                  <p className="mt-3 text-base leading-relaxed" style={{ fontFamily: 'Archivo', color: '#3b1f05', opacity: 0.7 }}>
                    En 30 minutos te mostramos exactamente cómo Moka puede transformar tu estrategia de contenido.
                  </p>
                </div>

                <ul className="flex flex-col gap-3">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span
                        className="flex-shrink-0 flex items-center justify-center rounded-xl"
                        style={{ background: '#3b1f05', color: '#fff', width: 38, height: 38 }}
                      >
                        {b.icon}
                      </span>
                      <span className="text-sm leading-snug" style={{ fontFamily: 'Archivo', color: '#3b1f05', fontWeight: 500 }}>
                        {b.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right column — widget, no extra border/bg to avoid fake white borders */}
              <div
                className="overflow-hidden rounded-2xl"
                style={{ boxShadow: '0 4px 40px rgba(59,31,5,0.12)' }}
              >
                <div
                  className="iclosed-widget"
                  data-url="https://app.iclosed.io/e/arcadia/demo-moka"
                  title="Demo de Moka"
                  style={{ width: '100%', height: '860px' }}
                />
              </div>

            </div>
          </div>
        </div>
      </main>

      <IClosedWatcher />
      <Script src="https://app.iclosed.io/assets/widget.js" strategy="afterInteractive" />
    </>
  )
}
