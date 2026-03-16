import { useTranslation } from 'react-i18next'
import heroImage from '../assets/hero.png'

const PhoneMockup = () => {
  const { t } = useTranslation()

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="rounded-[2.5rem] border border-(--border) bg-(--surface) p-3 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
        <div className="overflow-hidden rounded-4xl bg-[#07070f]">
          <img
            src={heroImage}
            alt={t('hero.phoneAlt')}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default PhoneMockup
