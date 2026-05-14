import { notFound } from 'next/navigation'
import Link from 'next/link'
import { COURSES, getCourseBySlug } from '@/constants/courses'
import { CourseFAQ } from '@/components/courses/CourseFAQ'
import { AdmissionCTABanner } from '@/components/home/AdmissionCTABanner'
import { Badge } from '@/components/ui/Badge'
import { buildMetadata } from '@/lib/seo'
import { Clock, IndianRupee, Award, Users, CheckCircle, BookOpen, ChevronRight, MessageSquare, ArrowRight, Shield } from 'lucide-react'
import { SITE_CONFIG } from '@/constants/site'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const course = getCourseBySlug(slug)
  if (!course) return {}
  return buildMetadata({
    title: course.name,
    description: `${course.shortDescription} E-Max certified. Duration: ${course.duration}. Fee: ₹${course.fee.toLocaleString('en-IN')}. IFL Institute, Rohini, Delhi.`,
    path: `/courses/${slug}`,
  })
}

const colorBadgeMap: Record<string, 'blue' | 'indigo' | 'green' | 'purple' | 'orange' | 'teal'> = {
  blue: 'blue', indigo: 'indigo', green: 'green', purple: 'purple', orange: 'orange', teal: 'teal',
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params
  const course = getCourseBySlug(slug)
  if (!course) notFound()

  const waMessage = encodeURIComponent(`Hi IFL Institute! I am interested in the ${course.name}. Please share details.`)

  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200 pt-20">
        <div className="container py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/courses" className="hover:text-blue-600 transition-colors">Courses</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-slate-800 font-medium">{course.name}</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 py-14">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant={colorBadgeMap[course.colorClass] || 'blue'}>{course.level}</Badge>
              <Badge variant="green">E-Max Certified</Badge>
              {course.placementGuidance && <Badge variant="indigo">Placement Support</Badge>}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              {course.name}
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">{course.shortDescription}</p>
            <div className="flex flex-wrap gap-5 text-white text-sm">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-blue-400" /><strong>{course.duration}</strong></div>
              <div className="flex items-center gap-2"><IndianRupee className="h-4 w-4 text-blue-400" /><strong>₹{course.fee.toLocaleString('en-IN')}</strong></div>
              <div className="flex items-center gap-2"><Award className="h-4 w-4 text-blue-400" /><span>{course.certificationBody}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Course Overview</h2>
                <p className="text-slate-600 leading-relaxed">{course.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-blue-600" /> What You Will Learn
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.learningOutcomes.map((o) => (
                    <div key={o} className="flex items-start gap-2.5 p-3 bg-blue-50 rounded-xl border border-blue-100">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{o}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Course Syllabus</h2>
                <div className="space-y-3">
                  {course.syllabus.map((mod, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                      <div className="flex items-center gap-3 bg-slate-50 px-4 py-3 border-b border-slate-200">
                        <span className="w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0">{i + 1}</span>
                        <span className="font-semibold text-slate-800 text-sm">{mod.module}</span>
                      </div>
                      <div className="px-4 py-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {mod.topics.map((topic) => (
                          <div key={topic} className="flex items-center gap-2 text-xs text-slate-600">
                            <span className="w-1 h-1 bg-blue-400 rounded-full flex-shrink-0" />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Users className="h-6 w-6 text-blue-600" /> Who Should Join
                </h2>
                <ul className="space-y-2">
                  {course.whoShouldJoin.map((w) => (
                    <li key={w} className="flex items-start gap-2.5 text-slate-600 text-sm">
                      <ArrowRight className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Career Benefits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.careerBenefits.map((b) => (
                    <div key={b} className="flex items-start gap-2.5 p-3 bg-green-50 rounded-xl border border-green-100">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <CourseFAQ faqs={course.faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-lg">
                  <div className="text-center mb-5">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Course Fee</div>
                    <div className="text-4xl font-extrabold text-blue-700">₹{course.fee.toLocaleString('en-IN')}</div>
                    {course.feeNote && <div className="text-xs text-green-600 mt-1 font-medium">{course.feeNote}</div>}
                  </div>
                  <div className="space-y-2 text-sm mb-5 divide-y divide-slate-100">
                    <div className="flex justify-between py-2"><span className="text-slate-600">Duration</span><span className="font-semibold">{course.duration}</span></div>
                    <div className="flex justify-between py-2"><span className="text-slate-600">Level</span><span className="font-semibold">{course.level}</span></div>
                    <div className="flex justify-between py-2"><span className="text-slate-600">Certification</span><span className="font-semibold text-xs text-right ml-4">{course.certificationBody}</span></div>
                    <div className="flex justify-between py-2"><span className="text-slate-600">Placement</span><span className={`font-semibold text-xs ${course.placementGuidance ? 'text-green-600' : 'text-slate-500'}`}>{course.placementGuidance ? '✅ Included' : 'N/A'}</span></div>
                  </div>
                  <div className="mb-5">
                    <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Batch Timings</div>
                    <div className="space-y-1">
                      {course.batchTimings.map((t) => (
                        <div key={t} className="text-xs text-slate-600 bg-slate-50 rounded-lg px-3 py-1.5">{t}</div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Link href={`/admission?course=${course.slug}`} id={`course-detail-book-${course.slug}`} className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors duration-200">
                      Book Your Seat <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${waMessage}`} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 py-3 border-2 border-green-500 text-green-600 hover:bg-green-50 font-semibold rounded-xl transition-colors duration-200">
                      <MessageSquare className="h-4 w-4" />Free Counseling
                    </Link>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2"><Shield className="h-4 w-4 text-blue-600" /><span className="text-sm font-semibold text-slate-700">IFL Guarantee</span></div>
                  <ul className="space-y-1.5">
                    {['E-Max Certificate included', 'Small batch — max 15 students', 'Flexible batch timings', 'No hidden charges'].map((g) => (
                      <li key={g} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />{g}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdmissionCTABanner />
    </>
  )
}
