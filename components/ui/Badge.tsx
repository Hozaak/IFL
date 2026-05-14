import { cn } from '@/lib/utils'

type BadgeVariant = 'blue' | 'green' | 'purple' | 'orange' | 'teal' | 'indigo' | 'red'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  blue: 'bg-blue-100 text-blue-700 border-blue-200',
  green: 'bg-green-100 text-green-700 border-green-200',
  purple: 'bg-purple-100 text-purple-700 border-purple-200',
  orange: 'bg-orange-100 text-orange-700 border-orange-200',
  teal: 'bg-teal-100 text-teal-700 border-teal-200',
  indigo: 'bg-indigo-100 text-indigo-700 border-indigo-200',
  red: 'bg-red-100 text-red-700 border-red-200',
}

export function Badge({ children, variant = 'blue', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full border',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
