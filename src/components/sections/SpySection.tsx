import { AppMockup } from '@/components/ui/AppMockup'
import { MountainSeparator } from '@/components/ui/MountainSeparator'
import { SITE_CONFIG } from '@/constants/SITE_CONFIG'

export function SpySection() {
  const { spy } = SITE_CONFIG.sections

  return (
    <>
      <MountainSeparator image="/separator-1.jpg" />

      <section id={spy.id} className="bg-white px-4 py-12 md:py-24">
        <div className="mx-auto max-w-6xl space-y-4 md:space-y-6">
          <div className="text-center mb-8 md:mb-16">
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
              <span style={{ fontSize: '0.65rem' }}>✦</span> {spy.badge}
            </span>
            <h2 className="text-4xl font-black md:text-5xl leading-tight" style={{ color: '#3b1f05' }}>
              {spy.title} {spy.titleAccent}
            </h2>
          </div>

          {spy.features.map((feature, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[2fr_3fr] gap-6 md:gap-10 items-stretch rounded-2xl border border-zinc-100 bg-white px-5 py-6 md:px-10 md:py-10 shadow-sm"
              style={i % 2 !== 0 ? { direction: 'rtl' } : {}}
            >
              <div className="flex flex-col justify-center" style={{ direction: 'ltr' }}>
                <h3
                  className="text-2xl font-black mb-4 leading-snug"
                  style={{ fontFamily: "'Archivo', sans-serif", color: '#3b1f05' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: 'Archivo', fontWeight: 400, color: '#3b1f05' }}
                >
                  {feature.body}
                </p>
              </div>
              <div className="flex flex-col justify-center" style={{ direction: 'ltr' }}>
                <FeatureImage image={feature.image} alt={feature.title} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function FeatureImage({ image, alt }: { image: string | null; alt: string }) {
  return (
    <div className="w-full h-[220px] md:h-[300px] rounded-xl border border-zinc-100 shadow-md bg-white flex items-center justify-center overflow-hidden">
      {image
        ? <img src={image} alt={alt} className="w-full h-full object-cover object-top" />
        : <AppMockup />
      }
    </div>
  )
}
