'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, GraduationCap } from 'lucide-react'
import { NAV_LINKS } from '@/constants/nav'
import { SITE_CONFIG } from '@/constants/site'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-slate-100'
            : 'bg-transparent'
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" id="navbar-logo">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-600/40 transition-shadow duration-300">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className={cn(
                    'font-extrabold text-lg transition-colors duration-300',
                    scrolled ? 'text-slate-900' : 'text-white'
                  )}
                  style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                >
                  IFL Institute
                </span>
                <span
                  className={cn(
                    'text-xs transition-colors duration-300',
                    scrolled ? 'text-blue-600' : 'text-blue-300'
                  )}
                >
                  E-Max Certified
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  id={`nav-${link.label.toLowerCase().replace(' ', '-')}`}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    pathname === link.href
                      ? scrolled
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-white bg-white/15'
                      : scrolled
                      ? 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile menu */}
            <div className="flex items-center gap-3">
              <Link
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className={cn(
                  'hidden lg:flex items-center gap-1.5 text-sm font-medium transition-colors duration-200',
                  scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'
                )}
                id="nav-phone"
              >
                <Phone className="h-4 w-4" />
                {SITE_CONFIG.phone}
              </Link>
              <Link href="/admission" id="nav-cta-btn" className="hidden lg:block">
                <Button size="sm">Book Your Seat</Button>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  'lg:hidden p-2 rounded-lg transition-colors duration-200',
                  scrolled
                    ? 'text-slate-700 hover:bg-slate-100'
                    : 'text-white hover:bg-white/10'
                )}
                aria-label="Toggle menu"
                id="mobile-menu-toggle"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-2xl z-50 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-bold text-slate-900" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
                    IFL Institute
                  </span>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-lg hover:bg-slate-100" aria-label="Close menu">
                  <X className="h-5 w-5 text-slate-600" />
                </button>
              </div>

              <nav className="flex-1 p-5 space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                      pathname === link.href
                        ? 'bg-blue-50 text-blue-600 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="p-5 space-y-3 border-t border-slate-100">
                <Link href={`tel:${SITE_CONFIG.phoneRaw}`} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 text-sm font-medium">
                  <Phone className="h-4 w-4" />
                  {SITE_CONFIG.phone}
                </Link>
                <Link href="/admission" className="btn-primary w-full justify-center text-sm">
                  Book Your Seat
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
