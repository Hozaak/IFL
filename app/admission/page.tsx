import { Suspense } from 'react'
import { AdmissionForm } from '@/components/admission/AdmissionForm'
import { buildMetadata } from '@/lib/seo'
import { CheckCircle, Phone, MessageCircle, Shield } from 'lucide-react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/constants/site'

export const metadata = buildMetadata({
  title: 'Admission Form — Book Your Seat',
  description: 'Apply online for admission at IFL Institute, Delhi. Choose your course, preferred batch timing, and we will confirm your seat within 2 hours.',
  path: '/admission',
})

const guarantees = [
  'Seat confirmed within 2 hours',
  'No registration fee to apply',
  'Free counseling session included',
  'Flexible batch change available',
]

const waMessage = encodeURIComponent('Hi IFL Institute! I want to start the admission process.')

export default function AdmissionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-32 pb-16 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container text-center">
          <div className="inline-block bg-blue-500/15 border border-blue-500/25 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium mb-5">
            🎓 Admissions Open — Limited Seats per Batch
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
            Book Your Seat at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              IFL Institute
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Fill in your details below. Our team will call you within 2 hours to confirm your batch and answer any questions.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 leading-none" aria-hidden>
          <svg viewBox="0 0 1440 40" className="w-full fill-slate-50">
            <path d="M0,20 C480,40 960,0 1440,20 L1440,40 L0,40 Z" />
          </svg>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-slate-50 py-14 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-1">Admission Application</h2>
                <p className="text-slate-500 text-sm mb-6">All fields marked * are required.</p>
                <Suspense fallback={<div className="animate-pulse h-64 bg-slate-100 rounded-xl" />}>
                  <AdmissionForm />
                </Suspense>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              {/* Guarantees */}
              <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <h3 className="font-bold text-slate-900">Our Promise to You</h3>
                </div>
                <ul className="space-y-3">
                  {guarantees.map((g) => (
                    <li key={g} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct contact */}
              <div className="bg-blue-600 rounded-2xl p-5 text-white">
                <h3 className="font-bold mb-3">Prefer to Call?</h3>
                <p className="text-blue-100 text-sm mb-4">Our counselors are available Mon–Sat, 8 AM – 8 PM to answer your questions.</p>
                <Link href={`tel:${SITE_CONFIG.phoneRaw}`} id="admission-call-btn" className="flex items-center gap-2 bg-white text-blue-700 font-semibold py-2.5 px-4 rounded-xl hover:bg-blue-50 transition-colors text-sm mb-2">
                  <Phone className="h-4 w-4" />{SITE_CONFIG.phone}
                </Link>
                <Link href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${waMessage}`} target="_blank" rel="noopener noreferrer" id="admission-whatsapp-btn" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm">
                  <MessageCircle className="h-4 w-4" />WhatsApp Us
                </Link>
              </div>

              {/* Address */}
              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5">
                <h3 className="font-bold text-slate-900 mb-2">Walk In Directly</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{SITE_CONFIG.address.full}</p>
                <p className="text-xs text-blue-600 font-medium mt-2">Open Mon–Sat, 8 AM – 8 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
