import Link from 'next/link'
import { ArrowRight, Clock, IndianRupee, Award } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { getFeaturedCourses } from '@/constants/courses'
import { formatCurrency } from '@/lib/utils'

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-600',
  indigo: 'bg-indigo-50 text-indigo-600',
  green: 'bg-green-50 text-green-600',
  purple: 'bg-purple-50 text-purple-600',
  orange: 'bg-orange-50 text-orange-600',
  teal: 'bg-teal-50 text-teal-600',
}

export function CoursesPreview() {
  const featured = getFeaturedCourses()

  return (
    <section className="bg-slate-50 section-padding">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Our Courses"
            title="Programs Designed for"
            titleHighlight="Real Careers"
            description="Every course is E-Max certified, practically focused, and designed to get you job-ready fast."
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((course) => (
            <StaggerItem key={course.id}>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full overflow-hidden group">
                {/* Top accent bar */}
                <div className="h-1.5 bg-gradient-to-r from-blue-500 to-blue-700" />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon + Level */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorMap[course.colorClass] || colorMap.blue}`}>
                      <Award className="h-6 w-6" />
                    </div>
                    <Badge variant={course.colorClass as 'blue' | 'green' | 'indigo'}>
                      {course.level}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
                    {course.shortDescription}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-slate-600 mb-5 pt-4 border-t border-slate-100">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-blue-500" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-blue-700">
                      <IndianRupee className="h-3.5 w-3.5" />
                      {course.fee.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Certification */}
                  <div className="flex items-center gap-1.5 text-xs text-green-700 bg-green-50 rounded-lg px-3 py-2 mb-5">
                    <Award className="h-3.5 w-3.5 flex-shrink-0" />
                    <span className="font-medium">{course.certification}</span>
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-2">
                    <Link
                      href={`/courses/${course.slug}`}
                      id={`course-preview-${course.slug}`}
                      className="flex-1 text-center py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors duration-200"
                    >
                      View Details
                    </Link>
                    <Link
                      href="/admission"
                      className="flex-1 text-center py-2.5 px-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-semibold rounded-xl transition-colors duration-200"
                    >
                      Book Seat
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection>
          <div className="text-center">
            <Link
              href="/courses"
              id="view-all-courses-btn"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group"
            >
              View All {'{'}12{'}'}+ Courses
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
