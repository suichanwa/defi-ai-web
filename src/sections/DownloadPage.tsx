import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Button from '../components/Button'
import LanguageSwitcher from '../components/LanguageSwitcher'

const APK_PATH = '/downloads/defi-ai-app.apk'

const DownloadPage = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-(--bg) text-(--text)">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-(--border) bg-[rgba(10,10,20,0.85)] backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="font-display text-lg font-bold tracking-wide text-(--primary)">
            defi-ai-app
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button href="/#/" variant="outline" size="sm">
              {t('nav.backHome')}
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex min-h-screen max-w-4xl items-center px-6 pb-16 pt-28">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="rounded-3xl border border-(--border) bg-(--surface)/90 p-8 shadow-[0_40px_90px_rgba(0,0,0,0.45)] sm:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-[rgba(18,18,31,0.8)] px-4 py-1 text-xs uppercase tracking-[0.35em] text-(--muted)">
              {t('downloadPage.badge')}
            </div>
            <h1 className="font-display mt-6 text-3xl font-semibold sm:text-4xl">
              {t('downloadPage.heading')}
            </h1>
            <p className="mt-4 text-base text-(--muted) sm:text-lg">
              {t('downloadPage.description')}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={APK_PATH} size="lg" className="gap-2" download>
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
              <Button href={APK_PATH} variant="outline" size="lg" className="gap-2">
                {t('downloadPage.directLink')}
              </Button>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-(--border) bg-[rgba(10,10,20,0.6)] p-6">
                <h2 className="font-display text-lg font-semibold">{t('downloadPage.installTitle')}</h2>
                <ol className="mt-4 space-y-2 text-sm text-(--muted)">
                  <li>{t('downloadPage.installStep1')}</li>
                  <li>{t('downloadPage.installStep2')}</li>
                  <li>{t('downloadPage.installStep3')}</li>
                  <li>{t('downloadPage.installStep4')}</li>
                </ol>
              </div>
              <div className="rounded-2xl border border-(--border) bg-[rgba(10,10,20,0.6)] p-6">
                <h2 className="font-display text-lg font-semibold">{t('downloadPage.troubleTitle')}</h2>
                <p className="mt-4 text-sm text-(--muted)">
                  {t('downloadPage.troubleBody', { path: APK_PATH })}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default DownloadPage
