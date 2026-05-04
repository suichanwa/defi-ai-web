import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Features = () => {
  const { t } = useTranslation()
  const features = [
    {
      key: 'selfCustody',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M7 10V7a5 5 0 0 1 10 0v3" />
          <rect x="5" y="10" width="14" height="10" rx="2" />
          <circle cx="12" cy="15" r="1.5" />
        </svg>
      ),
    },
    {
      key: 'portfolio',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 18l6-6 4 4 6-8" />
          <path d="M4 6h16" />
        </svg>
      ),
    },
    {
      key: 'swap',
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
      key: 'messaging',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 6h16v9a3 3 0 0 1-3 3H8l-4 3V6z" />
          <path d="M8 11h8" />
          <path d="M8 14h5" />
        </svg>
      ),
    },
  ]

  return (
    <section id="features" className="py-[5.5rem]">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="pill-label">Core capabilities</span>
          <h2 className="section-heading mt-6 text-3xl font-semibold sm:text-4xl">
            {t('features.heading')}
          </h2>
          <p className="section-copy mt-4 max-w-2xl text-base sm:text-lg">
            {t('features.description')}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center gap-3 text-(--primary)">
                <div className="rounded-xl border border-(--border) bg-(--primary-soft) p-3 text-(--primary)">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-(--text)">
                  {t(`features.items.${feature.key}.title`)}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-(--muted-strong) sm:text-base">
                {t(`features.items.${feature.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
