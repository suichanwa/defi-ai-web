import { motion } from 'framer-motion'
import Button from '../components/Button'
import PhoneMockup from '../components/PhoneMockup'

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-28">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-24 left-10 h-56 w-56 rounded-full bg-[rgba(124,92,252,0.35)] blur-[120px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-16 h-72 w-72 rounded-full bg-[rgba(76,112,255,0.35)] blur-[140px]"
          animate={{ scale: [1.05, 1, 1.1], opacity: [0.4, 0.8, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/2 top-1/3 h-48 w-48 -translate-x-1/2 rounded-full bg-[rgba(34,197,94,0.25)] blur-[120px]"
          animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.35] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[rgba(18,18,31,0.8)] px-4 py-1 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            SOLANA / SELF-CUSTODIAL
          </div>
          <h1 className="font-display mt-6 text-4xl font-bold leading-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
            Your Keys.
            <br />
            Your Crypto.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            A Solana wallet built for real DeFi users. Trade, track, and message - all from your phone,
            with no one else holding your keys.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#download" size="lg">
              Download APK
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-[var(--muted)]">
            <span className="inline-flex h-2 w-2 rounded-full bg-[var(--green)]" />
            Live pricing | End-to-end messaging | Zero custody risk
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
