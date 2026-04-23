import { SITE_CONFIG } from '@/constants/SITE_CONFIG'
import { SocialProofNumber } from '@/components/ui/SocialProofNumber'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-16 text-center overflow-hidden"
      style={{
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      <div className="absolute inset-0 bg-white/30 pointer-events-none" />
      <div
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, white)' }}
      />

      <div className="relative z-10 mx-auto max-w-3xl pt-28">
        <AnimateIn>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight"
            style={{ color: '#3b1f05' }}
          >
            {SITE_CONFIG.tagline}
          </h1>
        </AnimateIn>

        <AnimateIn delay={150} className="mt-10 flex flex-col items-center gap-4">
          <a
            href="/demo"
            className="btn-cta rounded-xl px-8 py-4 text-base font-bold text-white"
            style={{ fontFamily: 'Archivo', background: '#3b1f05' }}
          >
            <span className="btn-content">
              <span className="btn-label">{SITE_CONFIG.cta.primary}</span>
              <span className="btn-label-clone" aria-hidden="true">{SITE_CONFIG.cta.primary}</span>
            </span>
          </a>
          <p
            className="flex items-center text-sm font-light"
            style={{ fontFamily: 'Archivo', color: '#3b1f05' }}
          >
            <span className="dot-blink" />
            <SocialProofNumber /> negocios agendaron una llamada esta semana
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
