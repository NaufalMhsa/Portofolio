import { useState } from 'react';

const organizationsList = [
  {
    title: "Himpunan Mahasiswa Teknik Informatika (HIMTI) – Bendahara Umum",
    desc: "Periode 2025–2026",
    details: "Bertanggung jawab penuh dalam pengelolaan arus kas organisasi, penyusunan laporan keuangan transparan, serta pengawasan transaksi operasional seluruh divisi. Memastikan efisiensi penggunaan anggaran dalam setiap program kerja dan menjaga stabilitas finansial organisasi selama satu periode kepengurusan."
  },
  {
    title: "Himpunan Mahasiswa Teknik Informatika (HIMTI) – Ketua Divisi Monitoring dan Evaluasi",
    desc: "Periode 2024–2025",
    details: "Memimpin tim dalam melakukan pengawasan ketat terhadap seluruh program kerja pengurus. Melakukan evaluasi berkala, memberikan rekomendasi strategis untuk perbaikan kinerja, serta memastikan setiap divisi mencapai target yang telah ditetapkan dengan standar kualitas yang tinggi."
  },
  {
    title: "KKN UM Tangerang 2025 – Ketua Kelompok",
    desc: "Kelurahan Panunggangan Utara | Jul 2025 – Agu 2025",
    details: "Memimpin kelompok KKN dalam mengidentifikasi kebutuhan masyarakat setempat dan merancang program kerja pengabdian yang berdampak nyata. Mengoordinasikan pembagian tugas anggota, menjalin komunikasi dengan perangkat desa, serta memastikan seluruh rangkaian kegiatan berjalan lancar dan memberikan manfaat bagi warga."
  },
  {
    title: "Karang Taruna RT 05 RW 01 Kelurahan Larangan Selatan – Wakil Ketua",
    desc: "Periode 2025–2028",
    details: "Mendampingi ketua dalam menggerakkan kegiatan sosial kemasyarakatan di lingkungan RT. Berperan aktif dalam mengoordinasikan anggota untuk berbagai agenda lingkungan, acara hari besar nasional, serta menjadi jembatan komunikasi antara pengurus dan warga untuk menciptakan lingkungan yang harmonis."
  }
];

const committeesList = [
  {
    title: "HIMTI Festival 2025 – Bendahara Umum BPH HIFEST",
    desc: "30 Jul 2025 – 11 Okt 2025",
    details: "Mengelola dan mencatat pemasukan serta pengeluaran rangkaian kegiatan HIMTI Festival 2025. Mengelola administrasi keuangan untuk berbagai agenda, termasuk perlombaan dan seminar. Berkoordinasi dengan panitia dalam memenuhi kebutuhan operasional kegiatan."
  },
  {
    title: "HIMTI Bootcamp 2024 – Ketua Divisi Acara",
    desc: "29 Nov – 1 Des 2024",
    details: "Mengoordinasikan pelaksanaan rangkaian acara pengkaderan HIMTI dengan 109 peserta. Mengatur susunan acara, pembagian tugas, dan koordinasi tim acara. Memastikan pelaksanaan kegiatan berjalan sesuai jadwal yang telah ditetapkan."
  },
  {
    title: "HIMTI Festival 2024 – Ketua Pelaksana Donor Darah",
    desc: "19 Sep 2024",
    details: "Memimpin dan mengoordinasikan panitia dalam pelaksanaan kegiatan donor darah. Berkoordinasi dengan PMI Kota Tangerang dalam persiapan dan pelaksanaan kegiatan. Mengatur pembagian tugas dan koordinasi panitia selama kegiatan berlangsung."
  }
];

export default function Organizations({ darkMode }) {
  const [activeOrgIndex, setActiveOrgIndex] = useState(null);
  const [activeComIndex, setActiveComIndex] = useState(null);

  const renderList = (list, activeIndex, setActiveIndex, title) => (
    <div className="mb-10">
      <h2 className={`text-xl sm:text-2xl font-black mb-5 sm:mb-6 tracking-tight ${darkMode ? 'text-blue-400' : 'text-blue-950'}`}>
        {title}
      </h2>
      <div className="space-y-4">
        {list.map((item, index) => (
          <div 
            key={index} 
            className={`group cursor-pointer p-4 rounded-xl transition-all duration-300 border ${
              activeIndex === index 
                ? (darkMode ? 'bg-slate-700/50 border-blue-500' : 'bg-blue-50/50 border-blue-200')
                : (darkMode ? 'border-transparent hover:bg-slate-800/50' : 'border-transparent hover:bg-slate-50')
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className="flex gap-3">
              <span className={`font-bold text-base leading-tight flex-shrink-0 mt-0.5 transition-colors duration-300 ${
                activeIndex === index ? 'text-blue-500' : 'text-slate-400'
              }`}>•</span>
              <div className="flex-1">
                <div className={`font-bold text-base transition-colors duration-300 ${
                  activeIndex === index 
                    ? (darkMode ? 'text-blue-400' : 'text-blue-700') 
                    : (darkMode ? 'text-white' : 'text-slate-900')
                }`}>
                  {item.title}
                </div>
                <div className={`text-sm transition-colors duration-300 ${
                  activeIndex === index ? (darkMode ? 'text-slate-200' : 'text-slate-800') : (darkMode ? 'text-slate-400' : 'text-slate-600')
                }`}>
                  {item.desc}
                </div>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-60 opacity-100 mt-3' : 'max-h-0 opacity-0'
                }`}>
                  <p className={`text-sm leading-relaxed border-t pt-3 text-justify ${
                    darkMode ? 'border-slate-600 text-slate-300' : 'border-slate-200 text-slate-600'
                  }`}>
                    {item.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className={`py-12 sm:py-16 text-left border-b transition-colors duration-300 ${darkMode ? 'border-slate-700' : 'border-slate-100'}`} id="organizations">
      {renderList(organizationsList, activeOrgIndex, setActiveOrgIndex, "Pengalaman Organisasi")}
      {renderList(committeesList, activeComIndex, setActiveComIndex, "Pengalaman Kepanitiaan")}
    </section>
  );
}

