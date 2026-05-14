import { COURSES } from '@/constants/courses'
import { CourseCard } from '@/components/courses/CourseCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AdmissionCTABanner } from '@/components/home/AdmissionCTABanner'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'All Courses',
  description:
    'Browse all E-Max certified computer courses at IFL Institute, Rohini, Delhi. Basic Computer, Advanced Computing, MS Office, Graphic Design, English Communication, and Academic Tuition.',
  path: '/courses',
})

export default function CoursesPage() {
  const categories = [
    { key: 'computer', label: '💻 Computer Courses' },
    { key: 'design', label: '🎨 Design Courses' },
    { key: 'communication', label: '🗣️ Communication' },
    { key: 'academic', label: '📚 Academic Tuition' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-32 pb-20 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/25 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium mb-5">
              🎓 All Programs &amp; Courses
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              Choose Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Perfect Course
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Every course is E-Max certified, practically focused, and available in flexible batch timings. Transparent fees — no surprises.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 leading-none" aria-hidden>
          <svg viewBox="0 0 1440 40" className="w-full fill-slate-50">
            <path d="M0,20 C480,40 960,0 1440,20 L1440,40 L0,40 Z" />
          </svg>
        </div>
      </section>

      {/* Courses by category */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="container">
          {categories.map((cat) => {
            const catCourses = COURSES.filter((c) => c.category === cat.key)
            if (catCourses.length === 0) return null
            return (
              <div key={cat.key} className="mb-16 last:mb-0">
                <AnimatedSection>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    {cat.label}
                    <span className="text-sm font-normal text-slate-500 bg-slate-200 rounded-full px-2.5 py-0.5 ml-1">
                      {catCourses.length} course{catCourses.length > 1 ? 's' : ''}
                    </span>
                  </h2>
                </AnimatedSection>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {catCourses.map((course) => (
                    <StaggerItem key={course.id}>
                      <CourseCard course={course} />
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            )
          })}
        </div>
      </section>

      <AdmissionCTABanner />
    </>
  )
}
