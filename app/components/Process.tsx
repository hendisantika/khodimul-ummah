const steps = [
  {
    step: "01",
    title: "Pendaftaran",
    description:
      "Calon pekerja migran mendaftar dengan melengkapi data diri dan dokumen persyaratan awal. Tim kami akan melakukan seleksi dan wawancara.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Medical Check-Up",
    description:
      "Pemeriksaan kesehatan menyeluruh di rumah sakit yang ditunjuk untuk memastikan calon pekerja dalam kondisi sehat dan layak bekerja.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Pelatihan & Pembekalan",
    description:
      "Program pelatihan intensif meliputi bahasa Arab, keterampilan kerja, budaya negara tujuan, dan pembekalan mental selama 2-3 bulan.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Pengurusan Dokumen",
    description:
      "Pengurusan seluruh dokumen yang dibutuhkan: paspor, visa kerja, kontrak kerja, BPJS Ketenagakerjaan, dan asuransi perlindungan.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Penempatan & Keberangkatan",
    description:
      "Proses matching dengan majikan/perusahaan di negara tujuan, penandatanganan kontrak final, dan keberangkatan dengan pendampingan penuh.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    step: "06",
    title: "Monitoring & Perlindungan",
    description:
      "Pemantauan berkala selama masa kontrak kerja. Layanan hotline 24 jam dan pendampingan jika terjadi permasalahan di negara tujuan.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="proses" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Alur Proses
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Proses <span className="text-primary">Penempatan</span> yang Mudah
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Kami memastikan setiap tahapan berjalan lancar, transparan, dan sesuai
            regulasi pemerintah Indonesia.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg lg:p-8"
            >
              {/* Step number */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-4xl font-black text-primary/10">
                  {step.step}
                </span>
                <div className="rounded-xl bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  {step.icon}
                </div>
              </div>

              <h3 className="mb-3 text-lg font-bold text-gray-900">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {step.description}
              </p>

              {/* Connector arrow (hidden on last card per row) */}
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                  {(i + 1) % 3 !== 0 && (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-white">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
