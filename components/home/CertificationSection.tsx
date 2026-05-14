import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Award, CheckCircle, Shield, Star } from 'lucide-react'

const features = [
  'Recognized by employers across Delhi NCR',
  'Printed, signed certificate with unique ID',
  'Verifiable certificate validity',
  'Listed on E-Max official registry',
  'Accepted for government job applications',
  'Counts toward skill development records',
]

export function CertificationSection() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Certificate visual */}
          <AnimatedSection direction="left">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Certificate card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-blue-100 relative">
                {/* Watermark pattern */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-5">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="text-blue-600 text-xs font-bold absolute" style={{ top: `${(i % 5) * 22}%`, left: `${Math.floor(i / 5) * 28}%`, transform: 'rotate(-30deg)' }}>
                      IFL INSTITUTE
                    </div>
                  ))}
                </div>

                <div className="text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Certificate of Completion</div>
                  <div className="text-xl font-extrabold text-slate-900 mb-1" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
                    E-Max Certification
                  </div>
                  <div className="text-sm text-slate-500 mb-4">Advanced Computer Course</div>
                  <div className="border-t border-slate-100 pt-4 mb-4">
                    <div className="text-sm text-slate-600">This certifies that</div>
                    <div className="text-xl font-bold text-slate-900 mt-1">Student Name</div>
                    <div className="text-xs text-slate-400 mt-0.5">has successfully completed the course</div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                    <div className="text-xs text-slate-400">
                      <div className="font-semibold text-slate-600">IFL Institute</div>
                      <div>Rohini, Delhi</div>
                    </div>
                    <div className="text-right text-xs text-slate-400">
                      <div className="font-semibold text-slate-600">E-Max Board</div>
                      <div>Certification Authority</div>
                    </div>
                  </div>
                </div>

                {/* Seal */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <Star className="h-7 w-7 text-white fill-white" />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -left-3 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                <Shield className="h-3 w-3" />
                Verified & Authentic
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Content */}
          <AnimatedSection direction="right">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 text-blue-300 font-semibold text-sm uppercase tracking-wider mb-4">
                <span className="w-6 h-0.5 bg-blue-400 rounded-full" />
                E-Max Certification
                <span className="w-6 h-0.5 bg-blue-400 rounded-full" />
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
                A Certificate That Actually{' '}
                <span className="text-blue-300">Matters</span>
              </h2>

              <p className="text-blue-100 leading-relaxed mb-6 text-lg">
                Every student who completes a course at IFL Institute receives an <strong className="text-white">E-Max Certification</strong> — a widely recognized credential that adds real credibility to your resume and career profile.
              </p>

              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-blue-100">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
