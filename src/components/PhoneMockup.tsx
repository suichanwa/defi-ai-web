import { useTranslation } from 'react-i18next'
import heroImage from '../assets/hero.png'

const PhoneMockup = () => {
  const { t } = useTranslation()

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(circle,rgba(124,92,252,0.2),transparent_70%)] blur-2xl" />
      <div className="rounded-[2.5rem] border border-(--border-strong) bg-(--surface) p-3 shadow-(--shadow-strong)">
        <div className="overflow-hidden rounded-[2rem] bg-[#07070f]">
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
