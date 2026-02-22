const reasons = [
  {
    title: "Perusahaan Resmi & Berizin",
    description:
      "Terdaftar resmi di Kementerian Ketenagakerjaan RI sebagai P3MI dengan izin penempatan yang sah dan terverifikasi.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Biaya Transparan",
    description:
      "Tidak ada biaya tersembunyi. Seluruh rincian biaya disampaikan secara jelas dan terbuka sejak awal proses pendaftaran.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Jaringan Luas di Timur Tengah",
    description:
      "Kerjasama erat dengan agen dan perusahaan terkemuka di Arab Saudi, Dubai, dan Qatar untuk penempatan yang tepat dan cepat.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Pelatihan Berkualitas",
    description:
      "Fasilitas pelatihan lengkap dengan kurikulum terstandar meliputi bahasa, keterampilan, dan pembekalan budaya negara tujuan.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Gaji Kompetitif",
    description:
      "Kami memastikan setiap pekerja mendapatkan kontrak kerja dengan gaji yang kompetitif sesuai standar negara tujuan.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Perlindungan Pekerja",
    description:
      "Asuransi ketenagakerjaan lengkap, hotline 24 jam, dan tim advokasi siap membantu jika terjadi permasalahan di negara tujuan.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left heading */}
          <div className="lg:col-span-2">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Mengapa Kami
            </span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Mengapa Memilih{" "}
              <span className="text-primary">Khodimul Ummah?</span>
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Kami berkomitmen memberikan pelayanan terbaik dan terpercaya untuk
              setiap pekerja migran Indonesia.
            </p>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg"
            >
              Konsultasi Gratis
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Right grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-gray-50 p-5 transition-all hover:border-primary/20 hover:bg-white hover:shadow-md"
              >
                <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                  {reason.icon}
                </div>
                <h3 className="mb-2 text-sm font-bold text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
