import Link from 'next/link'
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle, ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/constants/site'
import { FOOTER_LINKS } from '@/constants/nav'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-white font-extrabold text-lg leading-tight" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
                  IFL Institute
                </div>
                <div className="text-blue-400 text-xs font-medium">E-Max Certified</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-5">
              Delhi&apos;s trusted computer training institute, empowering students since {SITE_CONFIG.established} with quality education and career guidance.
            </p>
            <div className="flex items-center gap-3">
              <Link href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition-colors duration-200">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href={SITE_CONFIG.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-red-600 flex items-center justify-center transition-colors duration-200">
                <Youtube className="h-4 w-4" />
              </Link>
              <Link href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-green-600 flex items-center justify-center transition-colors duration-200">
                <MessageCircle className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-1.5 group">
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Our Courses</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.courses.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-1.5 group">
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-400">{SITE_CONFIG.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <Link href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  {SITE_CONFIG.phone}
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <Link href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  {SITE_CONFIG.email}
                </Link>
              </li>
            </ul>
            <div className="mt-5 p-3 bg-slate-800 rounded-xl border border-slate-700">
              <p className="text-xs text-slate-400 font-medium mb-1">🕐 Office Hours</p>
              <p className="text-sm text-slate-300">Monday – Saturday</p>
              <p className="text-sm text-blue-400 font-semibold">8:00 AM – 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved. Delhi, India.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <span className="text-slate-700">•</span>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms of Use</Link>
            <span className="text-slate-700">•</span>
            <span className="text-xs text-slate-500">E-Max Certified Institute</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
