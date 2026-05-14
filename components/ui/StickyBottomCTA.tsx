'use client'

import Link from 'next/link'
import { Phone, MessageCircle, ClipboardList } from 'lucide-react'
import { SITE_CONFIG } from '@/constants/site'

const message = encodeURIComponent('Hi IFL Institute! I want to know about admissions.')

export function StickyBottomCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white border-t border-slate-200 shadow-2xl">
        <div className="grid grid-cols-3 divide-x divide-slate-200">
          <Link
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            id="mobile-call-btn"
            className="flex flex-col items-center gap-1 py-3 px-2 text-blue-600 hover:bg-blue-50 transition-colors active:bg-blue-100"
          >
            <Phone className="h-5 w-5" />
            <span className="text-xs font-semibold">Call Us</span>
          </Link>
          <Link
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            id="mobile-whatsapp-btn"
            className="flex flex-col items-center gap-1 py-3 px-2 text-green-600 hover:bg-green-50 transition-colors active:bg-green-100"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs font-semibold">WhatsApp</span>
          </Link>
          <Link
            href="/admission"
            id="mobile-apply-btn"
            className="flex flex-col items-center gap-1 py-3 px-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors active:bg-blue-800"
          >
            <ClipboardList className="h-5 w-5" />
            <span className="text-xs font-semibold">Apply Now</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
