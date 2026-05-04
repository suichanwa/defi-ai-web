import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Button from '../components/Button'

const Download = () => {
  const { t } = useTranslation()

  return (
    <section id="download" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(18,18,31,0.75),rgba(10,10,20,0.85))]" />
      <div className="section-wrap text-center">
        <div className="surface-panel mx-auto max-w-4xl px-6 py-12 sm:px-10">
          <span className="pill-label">Android release</span>
          <motion.h2
            className="section-heading mt-6 text-3xl font-semibold sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {t('download.heading')}
          </motion.h2>
          <motion.p
            className="section-copy mt-4 text-base sm:text-lg"
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
          <p className="mt-5 text-sm text-(--muted)">{t('download.footer')}</p>
        </div>
      </div>
    </section>
  )
}

export default Download
