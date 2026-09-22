const aboutData = {
  about: "Lulusan S1 Teknik Informatika Universitas Muhammadiyah Tangerang dengan pengalaman dalam pengembangan aplikasi web serta analisis dan perancangan sistem informasi. Menguasai React.js, JavaScript, HTML, CSS, Node.js, Express.js, MySQL, dan Figma. Memiliki kemampuan kerja sama tim, komunikasi, pemecahan masalah, dan berpikir analitis."
};

export default function About({ darkMode }) {
  return (
    <section className={`py-12 sm:py-16 text-left border-b transition-colors duration-300 ${darkMode ? 'border-slate-700' : 'border-slate-100'}`} id="about">
      <h2 className={`text-xl sm:text-2xl font-black mb-5 sm:mb-6 tracking-tight ${darkMode ? 'text-blue-400' : 'text-blue-950'}`}>Tentang Saya</h2>
      <p className={`text-sm sm:text-base leading-7 text-justify ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
        {aboutData.about}
      </p>
    </section>
  );
}


