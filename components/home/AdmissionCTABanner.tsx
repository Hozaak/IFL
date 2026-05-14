import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SITE_CONFIG } from '@/constants/site'

const waMessage = encodeURIComponent('Hi IFL Institute! I want to start the admission process.')

export function AdmissionCTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800">
      {/* Decorations */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-900/30 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 container py-16 lg:py-20">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-blue-100 text-sm font-semibold mb-5">
              🎓 Admissions Open — Join Today!
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              Your Future Starts With a{' '}
              <span className="text-blue-200">Single Step</span>
            </h2>

            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Join {SITE_CONFIG.studentsEnrolled.toLocaleString()}+ students who have built their careers at IFL Institute. Morning, afternoon & evening batches available. Affordable fees. E-Max certified.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admission"
                id="cta-banner-book-btn"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl hover:bg-blue-50 shadow-2xl shadow-blue-900/30 hover:shadow-blue-900/50 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
              >
                Book Your Seat Now <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-banner-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <Phone className="h-5 w-5" />
                Talk to an Advisor
              </Link>
            </div>

            <p className="text-blue-200 text-sm mt-6">
              ✅ No registration fee to enquire &nbsp;·&nbsp; ✅ Visit us anytime &nbsp;·&nbsp; ✅ We speak Hindi & English
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
