const services = [
  {
    title: "Penempatan Pekerja Domestik",
    description:
      "Penempatan pekerja rumah tangga profesional ke keluarga di Arab Saudi, Dubai, dan Qatar dengan standar pelatihan tinggi.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    features: ["Pelatihan tata graha", "Pelatihan memasak", "Pelatihan bahasa Arab"],
  },
  {
    title: "Tenaga Kerja Konstruksi",
    description:
      "Penyaluran tenaga kerja terampil di bidang konstruksi dan bangunan untuk proyek-proyek besar di kawasan Timur Tengah.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ["Tukang bangunan", "Tukang las", "Operator alat berat"],
  },
  {
    title: "Tenaga Kerja Hospitality",
    description:
      "Penempatan tenaga kerja di sektor perhotelan, restoran, dan layanan pariwisata di kota-kota metropolitan Timur Tengah.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.75 1.75 0 013 15.546M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    features: ["Housekeeping hotel", "Waiter/waitress", "Kitchen helper"],
  },
  {
    title: "Pelatihan Pra-Keberangkatan",
    description:
      "Program pelatihan komprehensif mencakup bahasa, budaya, keterampilan kerja, dan persiapan mental sebelum keberangkatan.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    features: ["Bahasa Arab dasar", "Budaya Timur Tengah", "Keterampilan kerja"],
  },
  {
    title: "Pengurusan Dokumen",
    description:
      "Layanan pengurusan dokumen lengkap mulai dari paspor, visa kerja, kontrak kerja, hingga asuransi ketenagakerjaan.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    features: ["Paspor & visa", "Kontrak kerja", "BPJS Ketenagakerjaan"],
  },
  {
    title: "Pendampingan & Perlindungan",
    description:
      "Layanan pendampingan selama masa kontrak kerja dan perlindungan hak-hak pekerja migran di negara tujuan.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    features: ["Hotline 24 jam", "Mediasi masalah kerja", "Bantuan hukum"],
  },
];

export default function Services() {
  return (
    <section id="layanan" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Layanan Kami
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Layanan <span className="text-primary">Lengkap</span> untuk Pekerja
            Migran
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Kami menyediakan layanan menyeluruh dari rekrutmen, pelatihan,
            pengurusan dokumen, hingga penempatan dan perlindungan di negara
            tujuan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl lg:p-8"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-accent"
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
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
