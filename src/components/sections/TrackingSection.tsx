import { AppMockup } from '@/components/ui/AppMockup'
import { SITE_CONFIG } from '@/constants/SITE_CONFIG'

export function TrackingSection() {
  const { tracking } = SITE_CONFIG.sections

  return (
    <section id={tracking.id} className="bg-white px-4 py-20">
      <div className="mx-auto max-w-5xl space-y-5">
        <div className="text-center mb-14">
          <span
            className="mb-4 inline-block rounded-full border px-5 py-1.5 text-sm font-semibold"
            style={{
              background: 'rgba(255,255,255,0.4)',
              backdropFilter: 'blur(12px)',
              borderColor: 'rgba(45,21,7,0.15)',
              color: '#8a4a18',
            }}
          >
            {tracking.badge}
          </span>
          <h2 className="text-4xl font-black text-[#1a0a00] md:text-5xl leading-tight">
            {tracking.title}
            <br />
            {tracking.titleAccent}
          </h2>
        </div>

        {tracking.features.map((feature, i) => (
          <div
            key={i}
            className="grid md:grid-cols-2 gap-8 items-center rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm"
          >
            {i % 2 === 0 ? (
              <>
                <div>
                  <h3 className="text-xl font-extrabold text-[#1a0a00] mb-3 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-semibold leading-relaxed" style={{ color: '#b05a18' }}>
                    {feature.body}
                  </p>
                </div>
                <AppMockup />
              </>
            ) : (
              <>
                <AppMockup />
                <div>
                  <h3 className="text-xl font-extrabold text-[#1a0a00] mb-3 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-semibold leading-relaxed" style={{ color: '#b05a18' }}>
                    {feature.body}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
