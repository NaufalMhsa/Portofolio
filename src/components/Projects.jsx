import { useState } from "react";
import { ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import shot579 from "../assets/skripsi/Screenshot (579).png";
import shot580 from "../assets/skripsi/Screenshot (580).png";
import shot581 from "../assets/skripsi/Screenshot (581).png";
import shot582 from "../assets/skripsi/Screenshot (582).png";
import kpShot799 from "../assets/kp/Screenshot (799).png";
import kpShot800 from "../assets/kp/Screenshot (800).png";
import kpUseCase from "../assets/kp/Use Case Diagram.jpg";
import kpActivityDiagram from "../assets/kp/Activity Diagram Staff ubah password.jpg";
import kpSequenceDiagram from "../assets/kp/Sequence Diagram Admin Verifikasi Hapus Dokumen.jpg";
import webShot810 from "../assets/web/Screenshot (810).png";
import webShot811 from "../assets/web/Screenshot (811).png";
import { FileSearch } from "lucide-react";

const thesisScreenshots = [
  { img: shot579, label: "Tampilan Login" },
  { img: shot582, label: "Dashboard & Statistik Arsip" },
  { img: shot580, label: "Form Input Data Dokumen" },
  { img: shot581, label: "Manajemen Dokumen & Klasifikasi ISO/IEC 27001" },
];

const internshipScreenshots = [
  { img: kpUseCase, label: "Use Case Diagram" },
  { img: kpActivityDiagram, label: "Activity Diagram Ubah Password" },
  {
    img: kpSequenceDiagram,
    label: "Sequence Diagram Verifikasi Hapus Dokumen",
  },
  { img: kpShot799, label: "Wireframe Halaman Login" },
  { img: kpShot800, label: "Wireframe Dashboard Admin" },
];

const webScreenshots = [
  { img: webShot811, label: "Halaman Login", fit: "contain" },
  { img: webShot810, label: "Dashboard Project Web", fit: "contain" },
];

const projects = [
  {
    title: "Sistem Informasi Manajemen Dokumen — Yayasan Islam Al-Mustofa",
    category: "PROYEK (Lulus 2026)",
    role: "System Analyst & Web Developer | (Tugas Akhir/Skripsi)",
    time: "Februari 2026 – Juni 2026",
    description:
      "Merancang dan membangun sistem informasi manajemen dokumen berbasis web untuk Yayasan Islam Al-Mustofa menggunakan metode Prototype dalam SDLC dengan tech stack React.js, Express.js, dan MySQL. Sistem ini mengimplementasikan fitur pengelolaan dokumen serta pengaturan hak akses pengguna yang mengacu pada 4 tingkat klasifikasi kerahasiaan informasi standar ISO/IEC 27001, sekaligus dilengkapi dengan penyusunan skenario test case dan pengujian fungsional menggunakan metode Black Box Testing.",
    tags: [
      "React.js",
      "Express.js",
      "MySQL",
      "ISO/IEC 27001",
      "Full-Stack",
      "Black Box Testing",
    ],
    icon: ShieldCheck,
    screenshots: thesisScreenshots,
  },
  {
    title: "Analisis & Perancangan Sistem Dokumen — Yayasan Islam Al-Mustofa",
    category: "PENGALAMAN MAGANG",
    role: "System & Business Analyst | (Kerja Praktek)",
    time: "Februari 2025 – Juni 2025",
    description:
      "Melakukan analisis proses bisnis yang berjalan serta menggali kebutuhan pengguna di Yayasan Islam Al-Mustofa melalui pendekatan User Requirement Specification (URS) sebagai fondasi perancangan sistem usulan. Hasil analisis tersebut kemudian dimodelkan ke dalam alur sistem usulan (To-Be) menggunakan diagram UML (Use Case, Activity, dan Sequence) melalui Visual Paradigm, serta diterjemahkan menjadi rancangan antarmuka pengguna berupa wireframe dan mockup interaktif menggunakan Figma.",
    tags: [
      "System Analyst",
      "Business Analyst",
      "ISO/IEC 27001",
      "UML",
      "Visual Paradigm",
      "Figma",
      "To-Be Modeling",
    ],
    icon: FileSearch,
    screenshots: internshipScreenshots,
  },
  {
    title: "Sistem Informasi Pelaporan Masalah Siswa",
    category: "FREELANCE PROJECT",
    role: "Web Developer",
    description:
      "Mengembangkan aplikasi berbasis web menggunakan Laravel, Tailwind CSS, dan MySQL untuk mempermudah pencatatan, pemantauan, dan tindak lanjut laporan kedisiplinan maupun bimbingan konseling siswa secara terpusat. Mendukung pengelolaan multi-peran bagi Admin, Guru BK, Wali Kelas, dan Siswa, serta melakukan pengujian fungsional menggunakan metode Black Box Testing untuk memastikan kesesuaian fitur dengan kebutuhan sistem.",
    tags: ["Laravel 12", "Tailwind CSS", "MySQL", "Black Box Testing"],
    icon: ShieldCheck,
    screenshots: webScreenshots,
  },
];

function Preview({ project, darkMode }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (project.screenshots && project.screenshots.length > 0) {
    const current = project.screenshots[activeIdx];
    return (
      <div
        className={`min-h-72 md:min-h-full flex flex-col justify-center p-4 sm:p-6 transition-colors ${
          darkMode ? "bg-slate-800/80" : "bg-indigo-50/70"
        }`}
      >
        <div
          className={`w-full rounded-xl overflow-hidden border shadow-lg transition-all ${
            darkMode
              ? "bg-slate-900 border-slate-700"
              : "bg-white border-slate-200"
          }`}
        >
          {/* Window header */}
          <div
            className={`flex items-center px-3 py-2 border-b ${
              darkMode
                ? "bg-slate-800 border-slate-700"
                : "bg-slate-100 border-slate-200"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
          </div>

          {/* Screenshot container */}
          <div className="relative group aspect-video overflow-hidden bg-slate-950/5">
            <img
              src={current.img}
              alt={current.label}
              className={`w-full h-full transition-transform duration-300 group-hover:scale-[1.02] ${
                current.label.includes("Diagram") || current.fit === "contain"
                  ? "object-contain bg-white p-2"
                  : "object-cover object-top"
              }`}
            />
            {/* Nav Arrows */}
            <button
              onClick={() =>
                setActiveIdx((prev) =>
                  prev === 0 ? project.screenshots.length - 1 : prev - 1,
                )
              }
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition opacity-80 group-hover:opacity-100"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() =>
                setActiveIdx((prev) =>
                  prev === project.screenshots.length - 1 ? 0 : prev + 1,
                )
              }
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition opacity-80 group-hover:opacity-100"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Thumbnail indicators */}
        <div className="flex justify-center items-center gap-2 mt-3">
          {project.screenshots.map((s, idx) => (
            <button
              key={s.label}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Lihat ${s.label}`}
              className={`h-1.5 rounded-full transition-all ${
                activeIdx === idx
                  ? darkMode
                    ? "w-6 bg-indigo-400"
                    : "w-6 bg-indigo-600"
                  : darkMode
                    ? "w-2 bg-slate-700 hover:bg-slate-600"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  const Icon = project.icon;
  return (
    <div
      className={`min-h-64 md:min-h-full flex items-center justify-center p-8 ${
        darkMode ? "bg-slate-800" : "bg-indigo-50"
      }`}
    >
      <div
        className={`w-full max-w-xs rounded-xl border shadow-lg overflow-hidden ${
          darkMode
            ? "bg-slate-900 border-slate-700"
            : "bg-white border-indigo-100"
        }`}
      >
        <div
          className={`flex items-center gap-1.5 px-3 py-2 border-b ${
            darkMode ? "border-slate-700" : "border-slate-100"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-rose-400" />
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
        </div>
        <div className="p-5 space-y-4">
          <div className="flex gap-3 items-center">
            <Icon size={27} className="text-indigo-500" />
            <div className="h-3 w-28 rounded bg-indigo-200" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-16 rounded bg-indigo-100" />
            <div className="h-16 rounded bg-sky-100" />
            <div className="h-16 rounded bg-violet-100" />
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full rounded bg-slate-200" />
            <div className="h-2 w-4/5 rounded bg-slate-200" />
            <div className="h-2 w-3/5 rounded bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ darkMode }) {
  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="text-center mb-10">
        <span
          className={`section-badge ${darkMode ? "section-badge-dark" : ""}`}
        >
          Projects
        </span>
        <p
          className={`block w-full max-w-xl mx-auto mt-3 text-center text-sm sm:text-base leading-7 ${
            darkMode ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Selected work covering system analysis, business processes, and web
          application development.
        </p>
      </div>
      <div className="space-y-8">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className={`grid md:grid-cols-2 overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
              darkMode
                ? "bg-slate-800/50 border-slate-700 hover:shadow-black/25"
                : "bg-white border-slate-200 shadow-sm hover:shadow-slate-200/80"
            }`}
          >
            <div className={i % 2 === 1 ? "order-1 md:order-2" : "order-1"}>
              <Preview project={project} darkMode={darkMode} />
            </div>
            <div
              className={`p-6 sm:p-8 flex flex-col justify-center order-2 ${
                i % 2 === 1 ? "md:order-1" : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    darkMode
                      ? "bg-indigo-950 text-indigo-300 border border-indigo-800"
                      : "bg-indigo-50 text-indigo-700 border border-indigo-200"
                  }`}
                >
                  {project.category}
                </span>
              </div>
              <div
                className={`text-xs font-semibold ${
                  darkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {project.role}
                {project.time && ` • ${project.time}`}
              </div>
              <h3
                className={`mt-2 text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`mt-3 text-sm leading-relaxed text-justify ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-1 rounded-full text-[11px] font-medium ${
                      darkMode
                        ? "bg-slate-700 text-slate-300"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
