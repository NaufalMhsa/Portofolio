import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <Hero darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <footer className={`py-8 text-center text-sm border-t ${darkMode ? 'border-slate-800 text-slate-500' : 'border-slate-100 text-slate-500'}`}>© 2026 | Naufal Agung Mahesa</footer>
    </div>
  )
}

export default App
