import Button from './Button'

const Navbar = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-[rgba(10,10,20,0.7)] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="font-display text-lg font-bold tracking-wide text-[var(--primary)]">
          defi-ai-app
        </div>
        <Button href="/#/download" size="sm">
          Download APK
        </Button>
      </div>
    </header>
  )
}

export default Navbar
