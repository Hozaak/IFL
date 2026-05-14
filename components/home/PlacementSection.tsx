import Link from 'next/link'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FileText, MessageSquare, Map, BookOpen, ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/constants/site'

const services = [
  {
    icon: BookOpen,
    title: 'Free Career Counseling',
    description: 'One-on-one sessions to help students understand which course fits their goals and background. We give honest, unbiased advice.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: FileText,
    title: 'Resume Support',
    description: 'We help students create a professional resume that highlights their new skills and certificates. Basic guidance included with every course.',
    color: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: MessageSquare,
    title: 'Interview Preparation',
    description: 'Practice sessions covering common interview questions, body language tips, and how to present your skills confidently to employers.',
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Map,
    title: 'Career Roadmap Assistance',
    description: 'We help you plan your next steps after completing the course — whether it is further education, freelancing, or a full-time job.',
    color: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
]

const waMessage = encodeURIComponent('Hi! I want free career counseling from IFL Institute.')

export function PlacementSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Career Guidance"
            title="We Do Not Just Teach —"
            titleHighlight="We Guide Your Career"
            description="Our placement guidance is realistic, honest, and genuinely helpful. We support every student, every step of the way."
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <div className={`${s.color} rounded-2xl p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
                <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm ${s.iconColor}`}>
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Honest disclaimer */}
        <AnimatedSection>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center max-w-3xl mx-auto">
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong className="text-blue-800">Our Promise:</strong> We provide career guidance and placement support as part of every course. While we work hard to connect students with opportunities, we do not make false job guarantee claims. Our commitment is to give you the skills, confidence, and direction you need to succeed.
            </p>
            <Link
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              id="placement-guidance-btn"
              className="inline-flex items-center gap-2 mt-4 text-blue-600 font-semibold hover:text-blue-700 group"
            >
              Book a Free Counseling Session
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
