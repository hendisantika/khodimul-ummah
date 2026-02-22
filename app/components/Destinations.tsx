const destinations = [
  {
    country: "Arab Saudi",
    flag: "🇸🇦",
    capital: "Riyadh",
    description:
      "Negara tujuan utama pekerja migran Indonesia dengan permintaan tinggi untuk pekerja domestik, konstruksi, dan sektor jasa. Gaji kompetitif dengan jaminan akomodasi.",
    highlights: [
      "Gaji pokok mulai SAR 1,500/bulan",
      "Akomodasi & makan ditanggung",
      "Kontrak 2 tahun (dapat diperpanjang)",
      "Tiket pesawat PP ditanggung majikan",
    ],
    sectors: ["Pekerja Rumah Tangga", "Pengemudi", "Konstruksi", "Pertanian"],
    color: "from-green-600 to-green-800",
    bgAccent: "bg-green-50",
    textAccent: "text-green-700",
    borderAccent: "border-green-200",
  },
  {
    country: "Dubai (UEA)",
    flag: "🇦🇪",
    capital: "Dubai",
    description:
      "Kota metropolitan modern dengan peluang karir di sektor perhotelan, konstruksi, dan layanan. Dikenal dengan standar hidup tinggi dan infrastruktur kelas dunia.",
    highlights: [
      "Gaji pokok mulai AED 2,000/bulan",
      "Visa kerja resmi 2 tahun",
      "Fasilitas kesehatan premium",
      "Lingkungan kerja internasional",
    ],
    sectors: ["Hospitality", "Konstruksi", "Ritel", "Housekeeping"],
    color: "from-red-600 to-red-800",
    bgAccent: "bg-red-50",
    textAccent: "text-red-700",
    borderAccent: "border-red-200",
  },
  {
    country: "Qatar",
    flag: "🇶🇦",
    capital: "Doha",
    description:
      "Negara kaya dengan proyek infrastruktur besar-besaran. Peluang kerja melimpah di bidang konstruksi, hospitality, dan layanan domestik dengan proteksi hukum ketenagakerjaan.",
    highlights: [
      "Gaji pokok mulai QAR 1,800/bulan",
      "Reformasi hukum ketenagakerjaan",
      "Standar keselamatan kerja tinggi",
      "Program kesejahteraan pekerja",
    ],
    sectors: ["Konstruksi", "Hospitality", "Cleaning Service", "Keamanan"],
    color: "from-purple-700 to-purple-900",
    bgAccent: "bg-purple-50",
    textAccent: "text-purple-700",
    borderAccent: "border-purple-200",
  },
];

export default function Destinations() {
  return (
    <section id="destinasi" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Negara Tujuan
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Destinasi <span className="text-primary">Penempatan</span> Kami
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Kami menjalin kerjasama resmi dengan agen-agen penempatan di tiga
            negara Timur Tengah untuk memastikan peluang kerja terbaik.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Card Header */}
              <div
                className={`bg-gradient-to-r ${dest.color} p-6 text-white`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{dest.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold">{dest.country}</h3>
                    <p className="text-sm text-white/80">{dest.capital}</p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="mb-5 text-sm leading-relaxed text-gray-600">
                  {dest.description}
                </p>

                {/* Highlights */}
                <div className="mb-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Keunggulan
                  </h4>
                  <ul className="space-y-2">
                    {dest.highlights.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sectors */}
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Sektor Pekerjaan
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {dest.sectors.map((sector, j) => (
                      <span
                        key={j}
                        className={`rounded-full border ${dest.borderAccent} ${dest.bgAccent} px-3 py-1 text-xs font-medium ${dest.textAccent}`}
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
