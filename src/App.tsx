import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Download from './sections/Download'

const App = () => {
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
