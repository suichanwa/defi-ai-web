import heroImage from '../assets/hero.png'

const PhoneMockup = () => {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
        <div className="overflow-hidden rounded-[2rem] bg-[#07070f]">
          <img
            src={heroImage}
            alt="defi-ai-app wallet preview"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default PhoneMockup
