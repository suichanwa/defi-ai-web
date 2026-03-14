import { motion } from 'framer-motion'

const features = [
  {
    title: 'Self-Custody',
    description: 'Your private keys live on your device. Not on a server. Not with us.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M7 10V7a5 5 0 0 1 10 0v3" />
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <circle cx="12" cy="15" r="1.5" />
      </svg>
    ),
  },
  {
    title: 'Solana Portfolio',
    description: 'Track your SOL and tokens in real time with live on-chain pricing.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 18l6-6 4 4 6-8" />
        <path d="M4 6h16" />
      </svg>
    ),
  },
  {
    title: 'Send / Receive / Swap',
    description: 'Full DeFi actions in a clean mobile interface. No fluff.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M7 7h9l-2-2" />
        <path d="M16 17H7l2 2" />
        <path d="M7 7v4" />
        <path d="M16 17v-4" />
      </svg>
    ),
  },
  {
    title: 'Secure Messaging',
    description: 'End-to-end encrypted in-app chat. Talk crypto without leaving your wallet.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 6h16v9a3 3 0 0 1-3 3H8l-4 3V6z" />
        <path d="M8 11h8" />
        <path d="M8 14h5" />
      </svg>
    ),
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-display text-3xl font-semibold text-[var(--text)] sm:text-4xl">
            Everything you need. Nothing you don't.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[var(--muted)] sm:text-lg">
            Self-custody first, Solana fast, and built for real DeFi flows. Every feature is there
            because you use it.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition duration-300 hover:border-[var(--primary)]/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center gap-3 text-[var(--primary)]">
                <div className="rounded-xl border border-[var(--border)] bg-[rgba(124,92,252,0.1)] p-3 text-[var(--primary)]">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--text)]">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
