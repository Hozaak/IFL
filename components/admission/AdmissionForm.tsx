'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, Send } from 'lucide-react'
import { COURSES } from '@/constants/courses'
import { SITE_CONFIG } from '@/constants/site'

const batchOptions = ['Morning (8–10 AM)', 'Afternoon (12–2 PM)', 'Evening (6–8 PM)']

export function AdmissionForm() {
  const searchParams = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [selectedCourse, setSelectedCourse] = useState('')

  useEffect(() => {
    const courseParam = searchParams.get('course')
    if (courseParam) setSelectedCourse(courseParam)
  }, [searchParams])

  const validate = (form: FormData) => {
    const errs: Record<string, string> = {}
    if (!form.get('name')?.toString().trim()) errs.name = 'Name is required'
    const phone = form.get('phone')?.toString().trim() || ''
    if (!phone) errs.phone = 'Phone number is required'
    else if (!/^[6-9]\d{9}$/.test(phone)) errs.phone = 'Enter a valid 10-digit Indian mobile number'
    if (!form.get('course')) errs.course = 'Please select a course'
    return errs
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const errs = validate(form)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    const payload = {
      name: form.get('name'),
      phone: form.get('phone'),
      email: form.get('email'),
      course: form.get('course'),
      batch: form.get('batch'),
      message: form.get('message'),
      source: 'website-admission-form',
      timestamp: new Date().toISOString(),
    }
    // Structured for future backend: POST /api/admissions
    console.log('Admission form submission:', payload)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Application Received!</h2>
        <p className="text-slate-600 mb-2">Thank you for applying to IFL Institute.</p>
        <p className="text-slate-600 mb-6">Our team will call you within <strong>2 hours</strong> to confirm your seat and batch details.</p>
        <p className="text-sm text-slate-500">For immediate assistance, call us at <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-blue-600 font-semibold hover:underline">{SITE_CONFIG.phone}</a></p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="adm-name" className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
          <input id="adm-name" name="name" type="text" placeholder="Your full name" className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-400 bg-red-50' : 'border-slate-200'} focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm`} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="adm-phone" className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number *</label>
          <input id="adm-phone" name="phone" type="tel" placeholder="10-digit mobile number" maxLength={10} className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-400 bg-red-50' : 'border-slate-200'} focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm`} />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="adm-email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address <span className="text-slate-400 font-normal">(optional)</span></label>
        <input id="adm-email" name="email" type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm" />
      </div>

      <div>
        <label htmlFor="adm-course" className="block text-sm font-semibold text-slate-700 mb-1.5">Course Interested In *</label>
        <select
          id="adm-course"
          name="course"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className={`w-full px-4 py-3 rounded-xl border ${errors.course ? 'border-red-400 bg-red-50' : 'border-slate-200'} focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm bg-white`}
        >
          <option value="">-- Select a Course --</option>
          {COURSES.map((c) => <option key={c.id} value={c.slug}>{c.name} — ₹{c.fee.toLocaleString('en-IN')} ({c.duration})</option>)}
        </select>
        {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
      </div>

      <div>
        <label htmlFor="adm-batch" className="block text-sm font-semibold text-slate-700 mb-1.5">Preferred Batch Timing</label>
        <select id="adm-batch" name="batch" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm bg-white">
          <option value="">-- Select preferred timing --</option>
          {batchOptions.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="adm-message" className="block text-sm font-semibold text-slate-700 mb-1.5">Any Questions? <span className="text-slate-400 font-normal">(optional)</span></label>
        <textarea id="adm-message" name="message" rows={3} placeholder="Any questions, requirements, or special requests..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm resize-none" />
      </div>

      <button type="submit" disabled={loading} id="admission-submit-btn" className="w-full inline-flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-lg font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-colors duration-200">
        {loading ? <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" /> : <Send className="h-5 w-5" />}
        {loading ? 'Submitting Application...' : 'Submit Application'}
      </button>

      <p className="text-xs text-center text-slate-400">By submitting, you agree to be contacted by IFL Institute. We respect your privacy and will not spam you.</p>
    </form>
  )
}
