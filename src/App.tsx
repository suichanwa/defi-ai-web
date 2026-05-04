import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Download from './sections/Download'
import DownloadPage from './sections/DownloadPage'

const App = () => {
  const { t } = useTranslation()
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
    <div className="site-shell bg-(--bg) text-(--text)">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Download />
      </main>
      <footer className="section-wrap border-t border-(--border) py-10 text-center text-sm text-(--muted)">
        {t('footer.copy')}
      </footer>
    </div>
  )
}

export default App
