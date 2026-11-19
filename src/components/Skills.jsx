import { ClipboardCheck, FileText, Workflow } from 'lucide-react';

const RestApiLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="2" y="2" width="28" height="28" rx="6" fill="#2563EB" />
    <path d="M9 11L5.8 16L9 21M23 11L26.2 16L23 21M19 8L13 24" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MicrosoftOfficeLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="2" y="2" width="13" height="13" rx="1" fill="#F25022" />
    <rect x="17" y="2" width="13" height="13" rx="1" fill="#7FBA00" />
    <rect x="2" y="17" width="13" height="13" rx="1" fill="#00A4EF" />
    <rect x="17" y="17" width="13" height="13" rx="1" fill="#FFB900" />
  </svg>
);

const VisualParadigmPrism = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
    {/* Visual Paradigm 3D Prism Logo */}
    <defs>
      <linearGradient id="vpTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF4A5A" />
        <stop offset="100%" stopColor="#FF7A45" />
      </linearGradient>
      <linearGradient id="vpLeft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C026D3" />
        <stop offset="100%" stopColor="#7C3AED" />
      </linearGradient>
      <linearGradient id="vpRight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#4338CA" />
      </linearGradient>
    </defs>
    {/* Top Face */}
    <polygon points="50,14 84,33 50,52 16,33" fill="url(#vpTop)" />
    {/* Left Face */}
    <polygon points="16,33 50,52 50,88 16,69" fill="url(#vpLeft)" />
    {/* Right Face */}
    <polygon points="50,52 84,33 84,69 50,88" fill="url(#vpRight)" />
    {/* Highlight Edges */}
    <line x1="50" y1="14" x2="50" y2="52" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
    <line x1="16" y1="33" x2="50" y2="52" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
    <line x1="84" y1="33" x2="50" y2="52" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
  </svg>
);

const skills = [
  ['React.js', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'],
  ['Express.js', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'],
  ['Node.js', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'],
  ['REST API', RestApiLogo],
  ['Laravel', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg'],
  ['MySQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'],
  ['JavaScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'],
  ['HTML', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'],
  ['CSS', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'],
  ['Figma', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'],
  ['Visual Paradigm', VisualParadigmPrism],
  ['UML', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg'],
  ['BRD & FRD', FileText],
  ['SDLC', Workflow],
  ['Black Box Testing & UAT', ClipboardCheck],
  ['Microsoft Office', MicrosoftOfficeLogo],
];

export default function Skills({ darkMode }) {
  return (
    <section id="skills" className="py-12 sm:py-16">
      <div className="text-center mb-9">
        <span className={`section-badge ${darkMode ? 'section-badge-dark' : ''}`}>Skills</span>
        <p className={`block w-full max-w-xl mx-auto mt-3 text-center text-sm sm:text-base leading-7 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}> 
          Tools and methods I use to turn ideas into reliable digital products.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
        {skills.map(([name, icon]) => {
          const Icon = typeof icon === 'string' ? null : icon;
          return (
            <div
              key={name}
              className={`min-h-28 flex flex-col items-center justify-center gap-3 p-4 text-center rounded-xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${darkMode ? 'bg-slate-900 border-slate-700 hover:bg-slate-800 hover:shadow-black/20 text-slate-300' : 'bg-white border-slate-200 hover:bg-slate-50 hover:shadow-slate-200/70 text-slate-600'}`} 
            >
              {Icon ? (
                <Icon size={28} className={darkMode ? 'text-indigo-400' : 'text-indigo-600'} />
              ) : (
                <img src={icon} alt={`${name} logo`} className="w-8 h-8 object-contain" loading="lazy" />
              )}
              <span className="text-xs font-semibold leading-tight tracking-tight">{name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
