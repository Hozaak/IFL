'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: Direction
  duration?: number
}

function getVariants(direction: Direction): Variants {
  const offset = 40
  switch (direction) {
    case 'left': return { hidden: { opacity: 0, x: -offset }, visible: { opacity: 1, x: 0 } }
    case 'right': return { hidden: { opacity: 0, x: offset }, visible: { opacity: 1, x: 0 } }
    case 'down': return { hidden: { opacity: 0, y: -offset }, visible: { opacity: 1, y: 0 } }
    case 'none': return { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    default: return { hidden: { opacity: 0, y: offset }, visible: { opacity: 1, y: 0 } }
  }
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.6,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      variants={getVariants(direction)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

// Stagger container for lists
interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({ children, className, staggerDelay = 0.1 }: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
