import { AppMockup } from '@/components/ui/AppMockup'
import { MountainSeparator } from '@/components/ui/MountainSeparator'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { SITE_CONFIG } from '@/constants/SITE_CONFIG'

export function ProductionSection() {
  const { production } = SITE_CONFIG.sections

  return (
    <>
      <MountainSeparator image="/separator-2.jpg" position="50% 55%" />

      <section id={production.id} className="bg-white px-4 py-12 md:py-24">
        <div className="mx-auto max-w-6xl space-y-4 md:space-y-6">

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
              <span style={{ fontSize: '0.65rem' }}>✦</span> {production.badge}
            </span>
            <h2 className="text-2xl font-black md:text-5xl leading-[0.9]" style={{ color: '#3b1f05' }}>
              {production.title}
              <br />
              {production.titleAccent}
            </h2>
          </AnimateIn>

          {production.features.map((feature, i) => (
            <AnimateIn key={i} delay={i * 80}>
              <div
                className="grid md:grid-cols-[2fr_3fr] gap-6 md:gap-10 items-stretch rounded-2xl px-5 py-6 md:px-10 md:py-10 card-hover"
                style={{
                  background: '#f5f5f5',
                  border: '1px solid rgba(59,31,5,0.08)',
                  boxShadow: '0 2px 16px rgba(59,31,5,0.09), 0 1px 3px rgba(59,31,5,0.06)',
                  ...(i % 2 !== 0 ? { direction: 'rtl' } : {}),
                }}
              >
                <div className="flex flex-col justify-center" style={{ direction: 'ltr' }}>
                  <h3
                    className="text-xl font-black mb-4 leading-tight md:text-2xl"
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
            </AnimateIn>
          ))}
        </div>
      </section>
    </>
  )
}

function FeatureImage({ image, alt }: { image: string | null; alt: string }) {
  return (
    <div
      className="w-full h-[220px] md:h-[300px] rounded-xl flex items-center justify-center overflow-hidden"
      style={{
        background: '#fff',
        border: '1px solid rgba(59,31,5,0.07)',
        boxShadow: '0 2px 12px rgba(59,31,5,0.08)',
      }}
    >
      {image
        ? <img src={image} alt={alt} className="w-full h-full object-contain object-center" />
        : <AppMockup />
      }
    </div>
  )
}
