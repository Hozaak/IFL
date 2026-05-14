import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/constants/site'

const waMessage = encodeURIComponent('Hi IFL Institute! I want to visit your institute. Can you share directions?')

export function LocationSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Find Us"
            title="Visit Our"
            titleHighlight="Institute"
            description="We are conveniently located in Rohini, Delhi. Walk in anytime during working hours — no appointment needed."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Info */}
          <AnimatedSection direction="left" className="lg:col-span-1">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 h-full">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Contact Information</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Address</div>
                    <div className="text-slate-700 text-sm leading-relaxed">{SITE_CONFIG.address.full}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Phone</div>
                    <Link href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-slate-700 text-sm font-semibold hover:text-blue-600 transition-colors">
                      {SITE_CONFIG.phone}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">WhatsApp</div>
                    <Link
                      href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${waMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 text-sm font-semibold hover:text-green-700 transition-colors"
                    >
                      Chat with us
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Email</div>
                    <Link href={`mailto:${SITE_CONFIG.email}`} className="text-slate-700 text-sm hover:text-blue-600 transition-colors">
                      {SITE_CONFIG.email}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Office Hours</div>
                    <div className="text-slate-700 text-sm">
                      <div>Monday – Saturday</div>
                      <div className="font-semibold text-blue-600">8:00 AM – 8:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <Link
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="location-whatsapp-btn"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors duration-200"
                >
                  <MessageCircle className="h-4 w-4" />
                  Get Directions on WhatsApp
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Map */}
          <AnimatedSection direction="right" className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-80 lg:h-full min-h-[360px]">
              <iframe
                src={SITE_CONFIG.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 360 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IFL Institute Location - Rohini, Delhi"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
