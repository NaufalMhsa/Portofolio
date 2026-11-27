import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ['Profile', 'Skills', 'Projects', 'Experience', 'Contact'];

  const handleScroll = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        darkMode
          ? 'bg-slate-900/95 border-slate-700 backdrop-blur-md'
          : 'bg-white/95 border-slate-200 backdrop-blur-md'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <span
          className={`font-mono font-bold text-base tracking-normal ${
            darkMode ? 'text-indigo-400' : 'text-indigo-600'
          }`}
        >
          Portofolio
        </span>

        {/* Right Side */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Nav Links - desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleScroll(link)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-colors ${
              darkMode
                ? 'text-yellow-400 hover:bg-slate-800'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              darkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={`md:hidden border-t px-4 py-2 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleScroll(link)}
              className={`block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                darkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
