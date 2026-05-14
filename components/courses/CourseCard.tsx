import Link from 'next/link'
import { Clock, IndianRupee, Award, Users, ArrowRight, CheckCircle } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import type { Course } from '@/constants/courses'

const colorBadgeMap: Record<string, 'blue' | 'indigo' | 'green' | 'purple' | 'orange' | 'teal'> = {
  blue: 'blue',
  indigo: 'indigo',
  green: 'green',
  purple: 'purple',
  orange: 'orange',
  teal: 'teal',
}

const topAccentMap: Record<string, string> = {
  blue: 'from-blue-500 to-blue-700',
  indigo: 'from-indigo-500 to-indigo-700',
  green: 'from-green-500 to-green-700',
  purple: 'from-purple-500 to-purple-700',
  orange: 'from-orange-500 to-orange-700',
  teal: 'from-teal-500 to-teal-700',
}

const iconBgMap: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-600',
  indigo: 'bg-indigo-50 text-indigo-600',
  green: 'bg-green-50 text-green-600',
  purple: 'bg-purple-50 text-purple-600',
  orange: 'bg-orange-50 text-orange-600',
  teal: 'bg-teal-50 text-teal-600',
}

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  const accent = topAccentMap[course.colorClass] || topAccentMap.blue
  const iconBg = iconBgMap[course.colorClass] || iconBgMap.blue
  const badgeVariant = colorBadgeMap[course.colorClass] || 'blue'

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden group">
      {/* Accent bar */}
      <div className={`h-1.5 bg-gradient-to-r ${accent}`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg} group-hover:scale-110 transition-transform duration-300`}>
            <Award className="h-6 w-6" />
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <Badge variant={badgeVariant}>{course.level}</Badge>
            {course.placementGuidance && (
              <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                <Users className="h-3 w-3" /> Placement Support
              </span>
            )}
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
          {course.name}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
          {course.shortDescription}
        </p>

        {/* Quick outcomes */}
        <ul className="space-y-1.5 mb-5">
          {course.learningOutcomes.slice(0, 3).map((o) => (
            <li key={o} className="flex items-start gap-2 text-xs text-slate-600">
              <CheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0 mt-0.5" />
              {o}
            </li>
          ))}
        </ul>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm border-t border-slate-100 pt-4 mb-4">
          <span className="flex items-center gap-1.5 text-slate-600">
            <Clock className="h-4 w-4 text-blue-400" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1 font-bold text-slate-900">
            <IndianRupee className="h-3.5 w-3.5 text-blue-600" />
            <span className="text-blue-700">{course.fee.toLocaleString('en-IN')}</span>
            {course.durationMonths === 0 && <span className="text-xs text-slate-400 font-normal">/mo</span>}
          </span>
        </div>

        {/* Certification */}
        <div className="flex items-center gap-1.5 text-xs text-green-700 bg-green-50 rounded-lg px-3 py-2 mb-5 border border-green-100">
          <Award className="h-3.5 w-3.5 flex-shrink-0" />
          <span className="font-medium truncate">{course.certification}</span>
        </div>

        {/* CTAs */}
        <div className="flex gap-2 mt-auto">
          <Link
            href={`/courses/${course.slug}`}
            id={`course-card-${course.slug}`}
            className="flex-1 text-center py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center gap-1"
          >
            Full Details <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href={`/admission?course=${course.slug}`}
            className="flex-1 text-center py-2.5 px-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-semibold rounded-xl transition-colors duration-200"
          >
            Book Seat
          </Link>
        </div>
      </div>
    </div>
  )
}
