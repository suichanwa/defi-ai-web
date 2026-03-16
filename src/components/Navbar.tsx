import { useTranslation } from 'react-i18next'
import Button from './Button'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = () => {
  const { t } = useTranslation()

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-(--border) bg-[rgba(10,10,20,0.7)] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="font-display text-lg font-bold tracking-wide text-(--primary)">
          defi-ai-app
        </div>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button href="/#/download" size="sm">
            {t('nav.download')}
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
