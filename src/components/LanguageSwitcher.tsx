import type { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import {
  getBrowserLanguage,
  LANGUAGE_STORAGE_KEY,
  normalizeLanguage,
  supportedLanguages,
  type SupportedLanguage,
} from '../i18n'

type LanguageMode = SupportedLanguage | 'auto'

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()
  const browserLanguage = getBrowserLanguage()
  const activeLanguage = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language)
  const hasStoredPreference =
    typeof window !== 'undefined' && window.localStorage.getItem(LANGUAGE_STORAGE_KEY) !== null
  const selectedMode: LanguageMode = hasStoredPreference ? activeLanguage : 'auto'

  const handleChange = async (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLanguage = event.target.value as LanguageMode

    if (nextLanguage === 'auto') {
      window.localStorage.removeItem(LANGUAGE_STORAGE_KEY)
      await i18n.changeLanguage(browserLanguage)
      return
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage)
    await i18n.changeLanguage(nextLanguage)
  }

  return (
    <label className="flex items-center gap-2 rounded-full border border-(--border) bg-[rgba(14,14,24,0.75)] px-3 py-1.5 text-xs text-(--muted)">
      <span className="hidden sm:inline">{t('nav.language')}</span>
      <div className="relative">
        <select
          aria-label={t('nav.language')}
          value={selectedMode}
          onChange={handleChange}
          className="appearance-none bg-transparent pr-6 text-sm font-medium text-(--text) outline-none"
        >
          <option value="auto">{`${t('language.auto')} (${supportedLanguages[browserLanguage]})`}</option>
          {Object.entries(supportedLanguages).map(([code, label]) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-(--muted-strong)"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M6 8l4 4 4-4" />
        </svg>
      </div>
    </label>
  )
}

export default LanguageSwitcher
