import { SITE_CONFIG } from '@/constants/SITE_CONFIG'

export function HeroSection() {
  return (
    <section id="hero" className="bg-white flex min-h-screen flex-col items-center justify-center px-4 pb-16 text-center">
      <div className="mx-auto max-w-3xl">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight"
          style={{ color: '#1a0a00' }}
        >
          {SITE_CONFIG.tagline}
        </h1>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href="#"
            className="rounded-xl px-8 py-4 text-base font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: '#3b1f05' }}
          >
            {SITE_CONFIG.cta.primary}
          </a>
          <p className="text-sm font-semibold" style={{ color: '#8a4a18' }}>
            • {SITE_CONFIG.socialProof}
          </p>
        </div>
      </div>
    </section>
  )
}
