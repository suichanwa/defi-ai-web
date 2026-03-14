import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Download from './sections/Download'
import DownloadPage from './sections/DownloadPage'

const App = () => {
  const [isDownloadPage, setIsDownloadPage] = useState(window.location.hash === '#/download')

  useEffect(() => {
    const handleHashChange = () => {
      setIsDownloadPage(window.location.hash === '#/download')
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (isDownloadPage) {
    return <DownloadPage />
  }

  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Download />
      </main>
      <footer className="border-t border-[var(--border)] py-8 text-center text-sm text-[var(--muted)]">
        (c) 2026 defi-ai-app | Built on Solana
      </footer>
    </div>
  )
}

export default App
