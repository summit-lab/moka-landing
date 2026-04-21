import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrackingSection } from '@/components/sections/TrackingSection'
import { SpySection } from '@/components/sections/SpySection'
import { ProductionSection } from '@/components/sections/ProductionSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrackingSection />
        <SpySection />
        <ProductionSection />
      </main>
      <Footer />
    </>
  )
}
