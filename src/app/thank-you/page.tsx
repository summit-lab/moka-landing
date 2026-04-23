import { Navbar } from '@/components/layout/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '¡Llamada agendada! — Moka',
  description: 'Gracias por agendar tu demo con Moka. Nos vemos pronto.',
}

const steps = [
  {
    number: '01',
    title: 'Revisá tu email',
    body: 'Te llegó una confirmación con todos los detalles de la llamada.',
  },
  {
    number: '02',
    title: 'Confirmá por WhatsApp',
    body: 'Es obligatorio confirmar tu asistencia por WhatsApp para reservar el slot.',
  },
  {
    number: '03',
    title: 'Conectate desde una computadora',
    body: 'En un lugar tranquilo, sin distracciones. La puntualidad suma.',
  },
]

export default function ThankYouPage() {
  return (
    <>
      <Navbar />

      <main
        className="min-h-screen flex flex-col items-center justify-center px-4 pb-16"
        style={{
          background: 'linear-gradient(160deg, #e8f4fd 0%, #f5f0eb 50%, #fff 100%)',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(255,255,255,0.50)' }} />

        <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center pt-24">

          {/* Logo wave */}
          <span className="moka-wave mb-6" style={{ display: 'inline-block' }}>
            <img src="/moka-logo.svg" alt="Moka" width={72} height={72} />
          </span>

          <h1
            className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tight"
            style={{ color: '#3b1f05', fontFamily: "'Neue Machina', sans-serif" }}
          >
            ¡Tu llamada<br />está agendada!
          </h1>

          <p
            className="mt-4 text-base md:text-lg leading-relaxed max-w-md"
            style={{ fontFamily: 'Archivo', color: '#3b1f05', opacity: 0.72 }}
          >
            Nos vemos pronto. Mientras tanto, acá están los próximos pasos para que la llamada sea un éxito.
          </p>

          {/* Steps */}
          <div className="mt-10 w-full flex flex-col gap-3">
            {steps.map((s) => (
              <div
                key={s.number}
                className="flex items-start gap-5 rounded-2xl px-6 py-5 text-left"
                style={{
                  background: 'rgba(255,255,255,0.80)',
                  border: '1px solid rgba(59,31,5,0.09)',
                  boxShadow: '0 2px 16px rgba(59,31,5,0.07)',
                }}
              >
                <span
                  className="font-black text-2xl flex-shrink-0 leading-none mt-0.5"
                  style={{ fontFamily: "'Neue Machina', sans-serif", color: 'rgba(59,31,5,0.18)' }}
                >
                  {s.number}
                </span>
                <div>
                  <p className="font-bold text-base" style={{ fontFamily: 'Archivo', color: '#3b1f05' }}>{s.title}</p>
                  <p className="text-sm mt-0.5 leading-relaxed" style={{ fontFamily: 'Archivo', color: '#3b1f05', opacity: 0.65 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/"
            className="mt-10 inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ fontFamily: 'Archivo', background: '#3b1f05' }}
          >
            ← Volver al inicio
          </a>
        </div>
      </main>
    </>
  )
}
