import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Organizations from './components/Organizations'
import Contact from './components/Contact'
import ScrollReveal from './components/ScrollReveal'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'} py-6 sm:py-10 lg:py-16`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          darkMode ? 'bg-slate-700 text-yellow-400' : 'bg-white text-slate-700'
        }`}
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      <main className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg transition-colors duration-300 ${
        darkMode ? 'bg-slate-800' : 'bg-white'
      }`}>
        <Hero darkMode={darkMode} />
        <ScrollReveal delay={100}>
          <About darkMode={darkMode} />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <Education darkMode={darkMode} />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <Experience darkMode={darkMode} />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <Organizations darkMode={darkMode} />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <Contact darkMode={darkMode} />
        </ScrollReveal>
        <footer className={`text-center py-12 text-sm border-t transition-colors duration-300 ${
          darkMode ? 'text-slate-400 border-slate-700' : 'text-slate-500 border-slate-100'
        }`}>
          © 2026 Naufal Agung Mahesa. All Rights Reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
