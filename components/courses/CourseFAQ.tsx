'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FAQ {
  question: string
  answer: string
}

interface CourseFAQProps {
  faqs: FAQ[]
}

export function CourseFAQ({ faqs }: CourseFAQProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={cn(
            'border rounded-xl overflow-hidden transition-colors duration-200',
            open === i ? 'border-blue-300 bg-blue-50' : 'border-slate-200 bg-white'
          )}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-4 text-left"
            aria-expanded={open === i}
            id={`faq-${i}-btn`}
          >
            <span className={cn('font-semibold text-sm', open === i ? 'text-blue-700' : 'text-slate-800')}>
              {faq.question}
            </span>
            <ChevronDown
              className={cn(
                'h-4 w-4 flex-shrink-0 ml-3 transition-transform duration-300',
                open === i ? 'rotate-180 text-blue-600' : 'text-slate-400'
              )}
            />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed border-t border-blue-200 pt-3">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
