import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import expImg1 from "../assets/experience/optimized/IMG_0614.jpg";
import expImg2 from "../assets/experience/optimized/IMG_4993.jpg";
import expImg3 from "../assets/experience/optimized/IMG_6546.jpg";
import expImg4 from "../assets/experience/optimized/original 2025-08-08 201638.690.jpg";
import expImg5 from "../assets/experience/optimized/DSC_3305.jpg";
import expImg6 from "../assets/experience/optimized/IMG_3603.jpg";

const experiences = [
  {
    title: "Bendahara Umum",
    period: "Periode 2025/2026",
    organization: "Himpunan Mahasiswa Teknik Informatika (HIMTI UMT)",
    description:
      "Mengelola administrasi keuangan, pencatatan transaksi, serta pemantauan anggaran operasional organisasi secara akuntabel.",
  },
  {
    title: "Ketua Kelompok",
    period: "Juli 2025 – Agustus 2025",
    organization: "KKN UM Tangerang — Kelurahan Panunggangan Utara",
    description:
      "Mengoordinasikan anggota tim, pembagian tugas lintas bidang, serta eksekusi program pengabdian masyarakat.",
  },
  {
    title: "Ketua Divisi Monitoring dan Evaluasi",
    period: "Periode 2024/2025",
    organization: "Departemen Keorganisasian HIMTI UMT",
    description:
      "Mengawasi jalannya roda organisasi serta melakukan evaluasi berkala terhadap pencapaian dan pelaksanaan program kerja.",
  },
  {
    title: "Ketua Divisi Acara",
    period: "Oktober 2024 – November 2024",
    organization: "HIMTI BOOTCAMP 2024",
    description:
      "Merancang konsep acara, menyusun alur pengkaderan calon anggota baru HIMTI UMT, serta mengoordinasikan teknis pelaksanaan di lapangan yang diikuti oleh 109 peserta.",
  },
  {
    title: "Ketua Pelaksana Agenda Donor Darah",
    period: "Juli 2024 – September 2024",
    organization: "HIFEST VII 2024 — HIMTI UMT",
    description:
      "Memimpin perencanaan, pengelolaan tim panitia, dan pengendalian operasional kegiatan donor darah dari tahap persiapan hingga evaluasi akhir bekerja sama dengan PMI Kota Tangerang, dan sukses menghimpun 75 pendonor.",
  },
];

const galleryPhotos = [
  { image: expImg1, alt: "Documentation 1" },
  { image: expImg2, alt: "Documentation 2" },
  { image: expImg3, alt: "Documentation 3" },
  { image: expImg4, alt: "Documentation 4" },
  { image: expImg5, alt: "Documentation 5" },
  { image: expImg6, alt: "Documentation 6" },
];

export default function Experience({ darkMode }) {
  const [galleryPage, setGalleryPage] = useState(0);
  const photosPerPage = 3;
  const pageCount = Math.ceil(galleryPhotos.length / photosPerPage);
  const visiblePhotos = galleryPhotos.slice(
    galleryPage * photosPerPage,
    galleryPage * photosPerPage + photosPerPage,
  );

  const changeGalleryPage = (direction) => {
    setGalleryPage((currentPage) =>
      (currentPage + direction + pageCount) % pageCount,
    );
  };

  return (
    <section id="experience" className="py-12 sm:py-16">
      <div className="text-center mb-10">
        <span
          className={`section-badge ${darkMode ? "section-badge-dark" : ""}`}
        >
          Experience
        </span>
        <p
          className={`block w-full max-w-xl mx-auto mt-3 text-center text-sm sm:text-base leading-7 ${
            darkMode ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Leadership, organizational governance, and event execution during university.
        </p>
      </div>

      <div className="mx-auto max-w-4xl space-y-10">
        <div className="flex flex-col gap-5">
          {experiences.map((experience) => (
            <article
              key={`${experience.title}-${experience.period}`}
              className={`rounded-2xl border p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                darkMode
                  ? "bg-slate-800/50 border-slate-700 hover:shadow-black/25"
                  : "bg-white border-slate-200 shadow-xs hover:shadow-slate-200/80"
              }`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                    {experience.title}
                  </h3>
                  <p className={`mt-1 text-sm font-semibold ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}>
                    {experience.organization}
                  </p>
                </div>
                <span
                  className={`w-fit shrink-0 rounded-full px-3 py-1 text-xs font-semibold border transition-colors ${
                    darkMode
                      ? "bg-indigo-950/60 text-indigo-300 border-indigo-800"
                      : "bg-indigo-50 text-indigo-700 border-indigo-200"
                  }`}
                >
                  {experience.period}
                </span>
              </div>
              <p className={`mt-4 text-sm leading-7 sm:text-base text-justify ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                {experience.description}
              </p>
            </article>
          ))}
        </div>

        <div>
          <h3 className={`mb-4 text-lg font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
            Documentation Gallery
          </h3>
          <div className="relative">
            <div key={galleryPage} className="gallery-page-enter grid grid-cols-3 gap-4">
              {visiblePhotos.map((photo) => (
                <div
                  key={photo.image}
                  className={`aspect-[4/3] overflow-hidden rounded-xl border transition-all ${
                    darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200 shadow-xs"
                  }`}
                >
                  <img
                    src={photo.image}
                    alt={photo.alt}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
            {pageCount > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => changeGalleryPage(-1)}
                  aria-label="Previous documentation photos"
                  className={`absolute left-2 top-1/2 -translate-y-1/2 rounded-full border p-2.5 shadow-lg backdrop-blur-sm transition-all hover:scale-105 ${
                    darkMode
                      ? "border-slate-700 bg-slate-900/85 text-slate-200 hover:bg-slate-800"
                      : "border-slate-200 bg-white/90 text-slate-700 hover:bg-white"
                  }`}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => changeGalleryPage(1)}
                  aria-label="Next documentation photos"
                  className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-full border p-2.5 shadow-lg backdrop-blur-sm transition-all hover:scale-105 ${
                    darkMode
                      ? "border-slate-700 bg-slate-900/85 text-slate-200 hover:bg-slate-800"
                      : "border-slate-200 bg-white/90 text-slate-700 hover:bg-white"
                  }`}
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
