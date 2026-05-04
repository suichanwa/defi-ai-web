import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Button from '../components/Button'
import PhoneMockup from '../components/PhoneMockup'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden pb-[5.5rem] pt-32">
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

      <div className="section-wrap grid min-h-[calc(100vh-8rem)] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="pill-label">Solana / Self-Custodial</div>
          <h1 className="font-display mt-6 text-4xl font-bold leading-tight text-(--text) sm:text-5xl lg:text-6xl">
            {t('hero.titleLine1')}
            <br />
            {t('hero.titleLine2')}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-(--muted-strong) sm:text-lg">
            {t('hero.description')}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/#/download" size="lg">
              {t('nav.download')}
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-(--muted)">
            <span className="inline-flex h-2 w-2 rounded-full bg-(--green)" />
            {t('hero.status')}
          </div>
        </motion.div>

        <motion.div
          className="relative"
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
