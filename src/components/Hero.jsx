import profileImg from '../assets/IMG_0026.JPG';
import { useEffect, useState } from 'react';

const heroData = {
  name: "Naufal Agung Mahesa",
  position: "Web Developer",
  skills: ["React.js", "JavaScript", "HTML", "CSS", "Node.js", "Express.js", "MySQL"]
};

export default function Hero({ darkMode }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`pb-12 sm:pb-16 pt-6 sm:pt-8 text-left relative border-b transition-colors duration-300 ${darkMode ? 'border-slate-700' : 'border-slate-100'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex flex-col-reverse sm:flex-row sm:items-end justify-between gap-8 sm:gap-10 relative z-10">
        {/* Info Bio */}
        <div className="flex-1">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            {heroData.name}
          </h1>
          <p className="text-lg sm:text-xl text-blue-500 font-bold mb-4">
            {heroData.position}
          </p>
          
          {/* Skills Badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {heroData.skills.map((skill, index) => (
              <span
                key={index}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-200 transform hover:scale-110 ${
                  darkMode 
                    ? 'bg-blue-900/30 text-blue-300 border-blue-800' 
                    : 'bg-blue-50 text-blue-900 border-blue-200'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Profile Card / Avatar */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg ring-2 ring-blue-900/10 hover:ring-4 hover:ring-blue-900/20 hover:scale-105 transition-all duration-300">
            <img 
              src={profileImg} 
              alt={heroData.name} 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}



