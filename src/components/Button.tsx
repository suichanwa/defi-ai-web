import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  ariaLabel?: string
}

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-[var(--primary)] text-[var(--text)] shadow-[0_12px_30px_rgba(124,92,252,0.25)] hover:bg-[var(--primary-hover)]',
  outline:
    'border border-[var(--border)] text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)]',
}

const Button = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ariaLabel,
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/70'
  const combined = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        className={combined}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      aria-label={ariaLabel}
      className={combined}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}

export default Button
