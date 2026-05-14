import { HeroSection } from '@/components/home/HeroSection'
import { AboutSection } from '@/components/home/AboutSection'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { CoursesPreview } from '@/components/home/CoursesPreview'
import { CertificationSection } from '@/components/home/CertificationSection'
import { PlacementSection } from '@/components/home/PlacementSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { LocationSection } from '@/components/home/LocationSection'
import { ContactSection } from '@/components/home/ContactSection'
import { AdmissionCTABanner } from '@/components/home/AdmissionCTABanner'
import { buildMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/constants/site'

export const metadata = buildMetadata({
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <CoursesPreview />
      <CertificationSection />
      <PlacementSection />
      <TestimonialsSection />
      <LocationSection />
      <ContactSection />
      <AdmissionCTABanner />
    </>
  )
}
