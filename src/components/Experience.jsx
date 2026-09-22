const experiencesList = [
  {
    position: "Full-Stack Developer – Tugas Akhir",
    company: "Yayasan Islam Al-Mustofa",
    period: "Feb 2026 – Jun 2026",
    location: "Tangerang, Banten",
    description: "Merancang dan membangun sistem informasi manajemen dokumen berbasis web. Mengembangkan frontend, backend, dan database serta fitur klasifikasi: Publik, Internal, Rahasia, Sangat Rahasia. Tech Stack: React.js, Express.js, MySQL, Figma."
  },
  {
    position: "Analisis dan Perancangan Sistem Informasi – Kerja Praktek",
    company: "Yayasan Islam Al-Mustofa",
    period: "Feb 2025 – Jun 2025",
    location: "Tangerang, Banten",
    description: "Menganalisis kebutuhan dan alur pengelolaan dokumen sebagai dasar perancangan sistem. Merancang UML (Use Case, Activity, Sequence) menggunakan Visual Paradigm serta mockup antarmuka dengan Figma."
  }
];

export default function Experience({ darkMode }) {
  return (
    <section className={`py-12 sm:py-16 text-left border-b transition-colors duration-300 ${darkMode ? 'border-slate-700' : 'border-slate-100'}`} id="experience">
      <h2 className={`text-xl sm:text-2xl font-black mb-5 sm:mb-6 tracking-tight ${darkMode ? 'text-blue-400' : 'text-blue-950'}`}>Pengalaman Project</h2>
      
      <div className="space-y-4 sm:space-y-5">
        {experiencesList.map((exp, index) => (
          <div key={index} className={`border rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200 ${
            darkMode 
              ? 'bg-slate-700/50 border-slate-600 hover:border-blue-500' 
              : 'bg-white border-slate-200 hover:border-blue-800/50'
          }`}>
            <h3 className={`text-xl font-bold mb-2 leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {exp.position} — {exp.company}
            </h3>
            <p className={`text-sm font-medium mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              {exp.period} • {exp.location || exp.type}
            </p>
            
            {exp.description && (
              <p className={`text-base leading-relaxed pt-4 border-t text-justify ${
                darkMode ? 'border-slate-600 text-slate-300' : 'border-slate-100 text-slate-700'
              }`}>
                {exp.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


