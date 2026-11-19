import { MapPin, Mail, Phone } from 'lucide-react';
import profileImg from '../assets/IMG_0026.JPG';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero({ darkMode }) {
  const roles = ['System Analyst', 'IT Business Analyst', 'Web Developer'];

  const socials = [
    {
      icon: <GithubIcon size={18} />,
      href: 'https://github.com/NaufalMhsa',
      label: 'GitHub',
    },
    {
      icon: <LinkedinIcon size={18} />, 
      href: 'https://linkedin.com/in/naufal-agung-mahesa',
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={18} />, 
      href: 'mailto:naufalmahesa88@gmail.com',
      label: 'Email',
    },
    {
      icon: <Phone size={18} />, 
      href: 'https://wa.me/6289519765834',
      label: 'WhatsApp',
    },
  ];

  return (
    <section id="profile" className="py-10 sm:py-14 md:py-20">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14">
        {/* Kolom Kiri (60%) */}
        <div className="w-full md:w-3/5 space-y-5">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Hi, I'm Naufal Agung Mahesa👋
          </h1>

          {/* Role Badges */}
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <span
                key={role}
                className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-wide border transition-colors ${
                  darkMode
                    ? 'bg-indigo-950/60 text-indigo-300 border-indigo-800'
                    : 'bg-indigo-50 text-indigo-700 border-indigo-200'
                }`}
              >
                {role}
              </span>
            ))}
          </div>

          {/* Profil Singkat */}
          <p
            className={`max-w-2xl text-sm sm:text-base leading-7 text-justify ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Fresh graduate S1 Teknik Informatika Universitas Muhammadiyah
            Tangerang (Cumlaude, IPK 3,87). Memiliki pengalaman langsung dalam
            menganalisis kebutuhan sistem, merancang arsitektur proses bisnis
            (As-Is &amp; To-Be) serta diagram UML, hingga membangun dan menguji
            aplikasi informasi berbasis web.
          </p>

          {/* Info Lokasi & Ketersediaan */}
          <div
            className={`flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            <span className="inline-flex items-center gap-1">
              <MapPin size={15} className="text-rose-500" />
              Kota Tangerang, Banten
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2 pt-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className={`p-2 rounded-lg border transition-all hover:scale-105 ${
                  darkMode
                    ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:border-slate-600'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm'
                }`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Kolom Kanan (40%) - Foto dengan Kotak Offset Modern */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-end">
          <div className="relative group">
            {/* Background offset card */}
            <div
              className={`absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4 ${
                darkMode
                  ? 'bg-slate-800 border-indigo-500/50'
                  : 'bg-slate-100 border-indigo-300'
              }`}
            />
            {/* Image card */}
            <div
              className={`relative z-10 w-60 h-72 sm:w-68 sm:h-80 overflow-hidden rounded-2xl border shadow-xl ${
                darkMode
                  ? 'bg-slate-800 border-slate-700'
                  : 'bg-white border-slate-200'
              }`}
            >
              <img
                src={profileImg}
                alt="Naufal Agung Mahesa"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
