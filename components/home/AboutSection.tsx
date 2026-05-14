import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SITE_CONFIG } from '@/constants/site'
import { BookOpen, Users, Award, Clock } from 'lucide-react'

const milestones = [
  { icon: BookOpen, label: 'Courses Offered', value: `${SITE_CONFIG.coursesOffered}+` },
  { icon: Users, label: 'Students Trained', value: `${SITE_CONFIG.studentsEnrolled.toLocaleString()}+` },
  { icon: Award, label: 'Years of Excellence', value: `${new Date().getFullYear() - SITE_CONFIG.established}+` },
  { icon: Clock, label: 'Batches Completed', value: `${SITE_CONFIG.batchesCompleted}+` },
]

export function AboutSection() {
  return (
    <section className="bg-slate-50 section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <AnimatedSection direction="left">
              <SectionHeader
                eyebrow="About IFL Institute"
                title="Building"
                titleHighlight="Digital Careers"
                description=""
                align="left"
                className="mb-6"
              />
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.1}>
              <p className="text-slate-600 leading-relaxed mb-4">
                IFL Institute was established in <strong>{SITE_CONFIG.established}</strong> with a clear mission: to make quality computer education accessible and affordable for every student in Delhi. Located in Rohini, we have grown to become one of the most trusted training institutes in the area.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We are proud to be an <strong>E-Max Certified Institute</strong>, ensuring that every certificate our students earn carries genuine value with employers. Our faculty brings years of industry experience and a deep commitment to student success.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                From students who have never touched a computer to professionals seeking to advance their careers — IFL Institute has helped over <strong>5,000 students</strong> gain confidence and build skills that last a lifetime.
              </p>
            </AnimatedSection>

            {/* Trust badges */}
            <AnimatedSection direction="left" delay={0.2}>
              <div className="flex flex-wrap gap-3">
                {['E-Max Certified', 'Delhi Registered', 'Expert Faculty', 'Small Batches'].map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium px-3 py-1.5 rounded-lg">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {badge}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Stats cards */}
          <StaggerContainer className="grid grid-cols-2 gap-4">
            {milestones.map((m, i) => (
              <StaggerItem key={m.label}>
                <div className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${i === 0 ? 'lg:translate-y-4' : i === 3 ? 'lg:-translate-y-4' : ''}`}>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <m.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900 mb-1" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
                    {m.value}
                  </div>
                  <div className="text-sm text-slate-500 font-medium">{m.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
