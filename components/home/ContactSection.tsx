'use client'

import { useState } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Send, Phone, MessageCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/constants/site'
import { COURSES } from '@/constants/courses'

const waMessage = encodeURIComponent('Hi IFL Institute! I have a question.')

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // Structured for future backend integration
    const data = new FormData(e.currentTarget)
    const payload = {
      name: data.get('name'),
      phone: data.get('phone'),
      course: data.get('course'),
      message: data.get('message'),
      timestamp: new Date().toISOString(),
    }
    console.log('Contact form submission:', payload)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="bg-slate-50 section-padding">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Get in Touch"
            title="Have Questions?"
            titleHighlight="We Are Here"
            description="Send us a message and we will respond within a few hours. Or reach us directly by phone or WhatsApp."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Quick contact */}
          <AnimatedSection direction="left">
            <div className="space-y-4">
              <Link
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                id="contact-call-btn"
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <Phone className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Call Us Directly</div>
                  <div className="text-blue-600 font-semibold">{SITE_CONFIG.phone}</div>
                  <div className="text-xs text-slate-500">Mon–Sat, 8 AM – 8 PM</div>
                </div>
              </Link>

              <Link
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors duration-300">
                  <MessageCircle className="h-6 w-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Chat on WhatsApp</div>
                  <div className="text-green-600 font-semibold">Quick Response</div>
                  <div className="text-xs text-slate-500">Usually replies in minutes</div>
                </div>
              </Link>

              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Walk In Anytime</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-3">
                  No appointment needed. Visit our institute in Rohini, Delhi and we will be happy to give you a tour, explain our courses, and help you choose the right program.
                </p>
                <div className="text-sm font-semibold text-blue-200">{SITE_CONFIG.address.full}</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 text-sm">We will contact you within 2 hours. Thank you for reaching out!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-bold text-slate-900 mb-1">Send us a Message</h3>
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-600 mb-1.5">Your Name *</label>
                    <input id="contact-name" name="name" type="text" required placeholder="e.g. Rahul Sharma" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm" />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-600 mb-1.5">Phone Number *</label>
                    <input id="contact-phone" name="phone" type="tel" required placeholder="e.g. 9876543210" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm" />
                  </div>
                  <div>
                    <label htmlFor="contact-course" className="block text-xs font-semibold text-slate-600 mb-1.5">Course Interested In</label>
                    <select id="contact-course" name="course" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm bg-white">
                      <option value="">Select a Course (optional)</option>
                      {COURSES.map((c) => <option key={c.id} value={c.slug}>{c.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-600 mb-1.5">Your Question</label>
                    <textarea id="contact-message" name="message" rows={3} placeholder="What would you like to know?" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm resize-none" />
                  </div>
                  <button type="submit" disabled={loading} id="contact-submit-btn" className="w-full inline-flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold rounded-xl transition-colors duration-200">
                    {loading ? <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" /> : <Send className="h-4 w-4" />}
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
