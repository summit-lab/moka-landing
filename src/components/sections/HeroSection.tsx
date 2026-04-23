import { SITE_CONFIG } from '@/constants/SITE_CONFIG'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-16 text-center overflow-hidden"
      style={{
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="absolute inset-0 bg-white/30 pointer-events-none" />
      <div
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, white)' }}
      />

      <div className="relative z-10 mx-auto max-w-3xl pt-28">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight"
          style={{ color: '#3b1f05' }}
        >
          {SITE_CONFIG.tagline}
        </h1>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="#"
            className="rounded-xl px-8 py-4 text-base font-bold text-white transition-opacity hover:opacity-90"
            style={{ fontFamily: 'Archivo', background: '#3b1f05' }}
          >
            {SITE_CONFIG.cta.primary}
          </a>
          <p
            className="flex items-center text-sm font-light"
            style={{ fontFamily: 'Archivo', color: '#3b1f05' }}
          >
            <span className="dot-blink" />
            {SITE_CONFIG.socialProof}
          </p>
        </div>
      </div>
    </section>
  )
}
