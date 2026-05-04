import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  ariaLabel?: string
  download?: boolean | string
  target?: string
  rel?: string
}

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'border border-(--primary) bg-(--primary) text-(--text) shadow-[0_18px_35px_rgba(124,92,252,0.28)] hover:border-(--primary-hover) hover:bg-(--primary-hover)',
  outline:
    'border border-(--border) bg-[rgba(14,14,24,0.45)] text-(--text) hover:border-(--primary) hover:bg-(--primary-soft)',
}

const Button = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ariaLabel,
  download,
  target,
  rel,
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary)/70'
  const combined = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        download={download}
        target={target}
        rel={rel}
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
