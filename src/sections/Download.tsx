import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Button from '../components/Button'

const Download = () => {
  const { t } = useTranslation()

  return (
    <section id="download" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-(--surface)" />
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          className="font-display text-3xl font-semibold text-(--text) sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {t('download.heading')}
        </motion.h2>
        <motion.p
          className="mt-4 text-base text-(--muted) sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {t('download.description')}
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Button href="/#/download" size="lg" className="gap-2">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M12 4v10" />
              <path d="M8 10l4 4 4-4" />
              <path d="M4 20h16" />
            </svg>
            {t('nav.download')}
          </Button>
        </motion.div>
        <p className="mt-4 text-sm text-(--muted)">{t('download.footer')}</p>
      </div>
    </section>
  )
}

export default Download
