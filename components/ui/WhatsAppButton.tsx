'use client'

import { MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/constants/site'
import { motion } from 'framer-motion'

const message = encodeURIComponent(
  'Hi IFL Institute! I would like to know more about your courses and admission process.'
)

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 hidden md:block"
    >
      <Link
        href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        id="whatsapp-float-btn"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transition-all duration-300 hover:-translate-y-0.5 group"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm font-semibold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </Link>
    </motion.div>
  )
}
