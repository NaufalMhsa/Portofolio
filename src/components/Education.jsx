const educationList = [
  {
    degree: "S1 Teknik Informatika",
    institution: "Universitas Muhammadiyah Tangerang",
    period: "Sep 2022 - Sep 2026",
    gpa: "3.87/4.00",
    description: "Mata Kuliah Relevan: Pemrograman Dasar, Pemrograman Web, Pemrograman Web Lanjutan, Basis Data."
  }
];

export default function Education({ darkMode }) {
  return (
    <section className={`py-12 sm:py-16 text-left border-b transition-colors duration-300 ${darkMode ? 'border-slate-700' : 'border-slate-100'}`} id="education">
      <h2 className={`text-xl sm:text-2xl font-black mb-5 sm:mb-6 tracking-tight ${darkMode ? 'text-blue-400' : 'text-blue-950'}`}>Pendidikan</h2>
      
      <div className="space-y-4 sm:space-y-5">
        {educationList.map((edu, index) => (
          <div key={index} className={`border rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200 ${
            darkMode 
              ? 'bg-slate-700/50 border-slate-600 hover:border-blue-500' 
              : 'bg-white border-slate-200 hover:border-blue-800/50'
          }`}>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3 className={`text-xl font-bold mb-2 leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {edu.degree}
                </h3>
                <p className={`text-base font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {edu.institution}
                </p>
              </div>
              {edu.gpa && (
                <span className={`text-sm font-bold px-3 py-1.5 rounded-lg whitespace-nowrap border ${
                  darkMode 
                    ? 'bg-emerald-900/30 text-emerald-300 border-emerald-800' 
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                }`}>
                  IPK {edu.gpa}
                </span>
              )}
            </div>
            <div className={`pt-4 border-t text-base font-medium text-justify ${
              darkMode ? 'border-slate-600 text-slate-300' : 'border-slate-100 text-slate-600'
            }`}>
              {edu.period} {edu.description && `• ${edu.description}`}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}


