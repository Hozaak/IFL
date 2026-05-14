import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { LocationSection } from '@/components/home/LocationSection'
import { ContactSection } from '@/components/home/ContactSection'
import { AdmissionCTABanner } from '@/components/home/AdmissionCTABanner'
import { Clock, ChevronRight } from 'lucide-react'

export const metadata = buildMetadata({
  title: 'Contact Us',
  description: 'Contact IFL Institute, Rohini, Delhi. Call, WhatsApp, or visit us Mon–Sat 8 AM – 8 PM. Get your questions answered and book a free counseling session.',
  path: '/contact',
})

const faqItems = [
  { q: 'Can I visit without an appointment?', a: 'Yes! Walk in anytime Monday–Saturday between 8 AM and 8 PM. No appointment needed.' },
  { q: 'How quickly do you respond to messages?', a: 'We typically respond to WhatsApp messages within 30 minutes during working hours.' },
  { q: 'Do you offer a free demo class?', a: 'Yes, we offer a free demo session for most courses. Contact us to schedule one.' },
  { q: 'Is the institute registered?', a: 'Yes, IFL Institute is registered in Delhi and is an E-Max certified training center.' },
]

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-32 pb-16 relative overflow-hidden">
        <div aria-hidden className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 container text-center">
          <AnimatedSection>
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white">Contact Us</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              We Are{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Here to Help
              </span>
            </h1>
            <p className="text-slate-300 text-lg max-w-xl mx-auto">
              Have questions about courses, fees, or admission? Reach out — we respond quickly and are always happy to help.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-slate-400 text-sm">
              <Clock className="h-4 w-4" />
              Open Monday – Saturday, 8:00 AM – 8:00 PM
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 leading-none" aria-hidden>
          <svg viewBox="0 0 1440 40" className="w-full fill-slate-50"><path d="M0,20 C480,40 960,0 1440,20 L1440,40 L0,40 Z" /></svg>
        </div>
      </section>

      <LocationSection />
      <ContactSection />

      {/* FAQ */}
      <section className="bg-white py-14">
        <div className="container max-w-3xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Quick FAQs</h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <div key={item.q} className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                  <h3 className="font-semibold text-slate-900 mb-1.5">{item.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AdmissionCTABanner />
    </>
  )
}
