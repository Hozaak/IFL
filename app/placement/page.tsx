import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FileText, MessageSquare, Map, BookOpen, CheckCircle, ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/constants/site'
import { AdmissionCTABanner } from '@/components/home/AdmissionCTABanner'

export const metadata = buildMetadata({
  title: 'Placement Guidance & Career Support',
  description: 'IFL Institute offers free career counseling, resume support, interview preparation, and career roadmap assistance to all students in Delhi.',
  path: '/placement',
})

const services = [
  {
    icon: BookOpen, title: 'Free Career Counseling',
    color: 'bg-blue-50 border-blue-100',
    iconColor: 'bg-blue-100 text-blue-600',
    points: [
      'One-on-one sessions before you enroll',
      'Honest guidance — no sales pressure',
      'Help choosing the right course for your goals',
      'Realistic career path discussion',
    ],
  },
  {
    icon: FileText, title: 'Resume Building Support',
    color: 'bg-green-50 border-green-100',
    iconColor: 'bg-green-100 text-green-600',
    points: [
      'Basic resume structure guidance',
      'How to highlight your new certificate',
      'Common mistakes to avoid',
      'Tips for ATS-friendly formatting',
    ],
  },
  {
    icon: MessageSquare, title: 'Interview Preparation',
    color: 'bg-purple-50 border-purple-100',
    iconColor: 'bg-purple-100 text-purple-600',
    points: [
      'Common interview questions for your field',
      'Practice mock interview sessions',
      'Body language and confidence tips',
      'How to explain your course certificate',
    ],
  },
  {
    icon: Map, title: 'Career Roadmap Assistance',
    color: 'bg-orange-50 border-orange-100',
    iconColor: 'bg-orange-100 text-orange-600',
    points: [
      'Plan your next step after the course',
      'Job roles to target based on your skills',
      'Further certification recommendations',
      'Freelancing vs employment guidance',
    ],
  },
]

const waMessage = encodeURIComponent('Hi IFL Institute! I want to book a free career counseling session.')

export default function PlacementPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-32 pb-16 relative overflow-hidden">
        <div aria-hidden className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 container text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              Career Guidance &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Placement Support
              </span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">We help every student navigate their career path with honest, practical guidance — not empty promises.</p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 leading-none" aria-hidden>
          <svg viewBox="0 0 1440 40" className="w-full fill-white"><path d="M0,20 C480,40 960,0 1440,20 L1440,40 L0,40 Z" /></svg>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <AnimatedSection>
            <SectionHeader eyebrow="Our Support" title="4 Ways We Help" titleHighlight="Your Career" description="Every service below is included free of charge for all enrolled students." />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <div className={`rounded-2xl p-6 border ${s.color} h-full`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.iconColor}`}>
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{s.title}</h3>
                  <ul className="space-y-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Honest commitment */}
          <AnimatedSection>
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-200 rounded-3xl p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Honest Commitment</h2>
              <p className="text-slate-600 leading-relaxed mb-2">
                At IFL Institute, we believe in setting <strong>realistic expectations</strong>. We work hard to equip every student with the best skills and guidance possible.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We do not offer paid &quot;100% job guarantee&quot; schemes — because we believe in helping you genuinely rather than making false promises. Our track record of <strong>5,000+ successful students</strong> speaks for itself.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admission" id="placement-apply-btn" className="btn-primary">
                  Join & Get Guidance <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${waMessage}`} target="_blank" rel="noopener noreferrer" id="placement-whatsapp-btn" className="btn-secondary">
                  Book Free Counseling
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AdmissionCTABanner />
    </>
  )
}
