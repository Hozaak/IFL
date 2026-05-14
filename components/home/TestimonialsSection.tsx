'use client'

import { useState } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Data Entry Operator, Delhi',
    course: 'Basic Computer Course',
    avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=3b82f6&color=fff&size=80',
    rating: 5,
    text: 'Before joining IFL Institute, I was completely unaware of how to use a computer. After just 3 months, I got a data entry job with a good salary. The teachers were very patient and explained everything in Hindi. I am so grateful!',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Office Assistant, Rohini',
    course: 'MS Office Mastery',
    avatar: 'https://ui-avatars.com/api/?name=Rahul+Verma&background=1e40af&color=fff&size=80',
    rating: 5,
    text: 'The MS Office course helped me get a promotion at work. My Excel skills improved so much that my manager noticed immediately. Fees were very reasonable and the batch timing was flexible for working people like me.',
  },
  {
    id: 3,
    name: 'Anita Gupta',
    role: 'Parent of Student',
    course: 'Academic Tuition',
    avatar: 'https://ui-avatars.com/api/?name=Anita+Gupta&background=0f766e&color=fff&size=80',
    rating: 5,
    text: 'My son was struggling with Maths in Class 9. After joining IFL tuition batches, his marks improved from 45 to 78 in just one semester. The teachers give personal attention and the batch size is small. Very trustworthy institute.',
  },
  {
    id: 4,
    name: 'Suresh Kumar',
    role: 'Freelance Graphic Designer',
    course: 'Graphic Design Basics',
    avatar: 'https://ui-avatars.com/api/?name=Suresh+Kumar&background=7c3aed&color=fff&size=80',
    rating: 5,
    text: 'I started the Graphic Design course with zero experience. Now I earn ₹20,000+ per month from freelance projects. The practical training on Canva and Photoshop was excellent. IFL made my career dream possible.',
  },
  {
    id: 5,
    name: 'Meena Rawat',
    role: 'BPO Executive, Delhi',
    course: 'English Communication',
    avatar: 'https://ui-avatars.com/api/?name=Meena+Rawat&background=ea580c&color=fff&size=80',
    rating: 5,
    text: 'My English was very weak and I was rejected in many interviews. After the English Communication course, I cleared my BPO interview in the first attempt. The mock interview sessions were especially helpful.',
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section className="bg-slate-50 section-padding">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Student Stories"
            title="Real Students,"
            titleHighlight="Real Results"
            description="Do not take our word for it — hear from students who changed their lives at IFL Institute."
          />
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 sm:p-10 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 h-10 w-10 text-blue-100" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-slate-700 text-lg leading-relaxed mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="rounded-full ring-2 ring-blue-100"
                />
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                  <div className="text-xs text-blue-600 font-medium mt-0.5">Course: {t.course}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              id="testimonial-prev-btn"
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border-2 border-slate-200 hover:border-blue-400 hover:text-blue-600 flex items-center justify-center transition-colors duration-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${i === current ? 'w-6 h-2.5 bg-blue-600' : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              id="testimonial-next-btn"
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border-2 border-slate-200 hover:border-blue-400 hover:text-blue-600 flex items-center justify-center transition-colors duration-200"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
