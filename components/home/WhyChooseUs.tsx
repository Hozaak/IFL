import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import {
  Award, Users, IndianRupee, Clock, BookOpen,
  ShieldCheck, Headphones, MapPin,
} from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'E-Max Certified',
    description: 'Every course carries an E-Max Certification — recognized by employers across Delhi and NCR.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: IndianRupee,
    title: 'Transparent Fees',
    description: 'No hidden charges. What you see is what you pay. EMI options available on request.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Users,
    title: 'Small Batch Sizes',
    description: 'Maximum 15 students per batch ensures personalized attention and better learning.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Clock,
    title: 'Flexible Timings',
    description: 'Morning, afternoon, and evening batches to fit students, working professionals, and homemakers.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: BookOpen,
    title: 'Practical Training',
    description: 'Every concept is paired with hands-on lab practice. You learn by doing, not just listening.',
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: ShieldCheck,
    title: 'Government-Aligned Curriculum',
    description: 'Courses are aligned with industry requirements and national skill development standards.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: Headphones,
    title: 'Free Career Guidance',
    description: 'Personal career counseling sessions to help every student choose the right path.',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: MapPin,
    title: 'Delhi-Based & Trusted',
    description: 'Physically located in Rohini, Delhi. Parents can visit anytime. Full transparency always.',
    color: 'bg-teal-50 text-teal-600',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-white section-padding">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Why Choose IFL"
            title="8 Reasons Thousands of"
            titleHighlight="Students Trust Us"
            description="We are not just a coaching center. We are a career partner committed to your success from Day 1."
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${reason.color} group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-base">{reason.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{reason.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
