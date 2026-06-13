import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeatureSection } from '@/components/sections/FeatureSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection section="tracking" />
        <FeatureSection section="spy" separator={{ image: '/separator-1.jpg', position: '50% 72%' }} inlineTitle />
        <FeatureSection section="production" separator={{ image: '/separator-2.jpg', position: '50% 55%' }} />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
