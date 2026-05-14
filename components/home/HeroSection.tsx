'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone, Award, Users, BookOpen, Star, CheckCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/constants/site'

const stats = [
  { icon: Users, label: 'Students Enrolled', value: '5,000+' },
  { icon: BookOpen, label: 'Courses Offered', value: '12+' },
  { icon: Award, label: 'Years Experience', value: '8+' },
  { icon: Star, label: 'Success Rate', value: '95%' },
]

const highlights = [
  'E-Max Certified Courses',
  'Expert Faculty',
  'Placement Guidance',
  'Flexible Batch Timings',
]

const waMessage = encodeURIComponent('Hi IFL Institute! I want free career guidance.')

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden pt-16">
      {/* Animated blobs */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow animate-delay-500" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-float" />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 container py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8"
          >
            <Award className="h-4 w-4 text-blue-400 flex-shrink-0" />
            <span className="text-blue-300 text-sm font-medium">
              E-Max Certified • Delhi Registered • Est. {SITE_CONFIG.established}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            Delhi&apos;s Most{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-[size:200%] animate-gradient-x">
              Trusted
            </span>{' '}
            Computer Training Institute
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Industry-recognized certifications, affordable fees, expert faculty, and real placement guidance. Build your career with confidence.
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {highlights.map((h) => (
              <span key={h} className="flex items-center gap-1.5 text-slate-300 text-sm">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                {h}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="/admission"
              id="hero-book-seat-btn"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-lg font-bold rounded-2xl shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Book Your Seat Now <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-guidance-btn"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/25 text-white text-lg font-semibold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <Phone className="h-5 w-5" />
              Free Career Guidance
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.08, type: 'spring', stiffness: 200 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-colors duration-300"
              >
                <stat.icon className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl lg:text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-none" aria-hidden>
        <svg viewBox="0 0 1440 60" className="w-full fill-slate-50">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
