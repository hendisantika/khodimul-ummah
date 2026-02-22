import Image from "next/image";

export default function About() {
  return (
    <section id="tentang" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12">
              <div className="flex items-center justify-center">
                <Image
                  src="/khodimul-ummah.png"
                  alt="Khodimul Ummah"
                  width={280}
                  height={280}
                  className="h-56 w-auto drop-shadow-lg sm:h-72"
                />
              </div>
              {/* Floating stats */}
              <div className="absolute -right-4 top-8 rounded-xl bg-white p-4 shadow-xl sm:-right-6">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-xs text-gray-500">Tahun Pengalaman</div>
              </div>
              <div className="absolute -left-4 bottom-8 rounded-xl bg-white p-4 shadow-xl sm:-left-6">
                <div className="text-2xl font-bold text-secondary">5000+</div>
                <div className="text-xs text-gray-500">TKI Ditempatkan</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Tentang Kami
            </span>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Mitra Terpercaya untuk{" "}
              <span className="text-primary">Pekerja Migran</span> Indonesia
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              <strong className="text-gray-900">PT. Khodimul Ummah</strong>{" "}
              adalah Perusahaan Penempatan Pekerja Migran Indonesia (P3MI) yang
              resmi dan terdaftar, berkomitmen penuh untuk membantu tenaga kerja
              Indonesia meraih peluang karir terbaik di Timur Tengah.
            </p>
            <p className="mb-8 text-base leading-relaxed text-gray-600">
              Dengan pengalaman lebih dari satu dekade, kami telah berhasil
              menempatkan ribuan pekerja migran Indonesia ke{" "}
              <strong className="text-gray-800">Arab Saudi</strong>,{" "}
              <strong className="text-gray-800">Dubai (UEA)</strong>, dan{" "}
              <strong className="text-gray-800">Qatar</strong>. Kami menjunjung
              tinggi nilai amanah, profesionalisme, dan pelayanan terbaik dalam
              setiap proses penempatan.
            </p>

            {/* Key values */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Legal & Berizin Resmi",
                  desc: "Terdaftar di Kemenaker RI",
                },
                {
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  title: "Pelayanan Amanah",
                  desc: "Mengutamakan kepercayaan",
                },
                {
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                  title: "Pelatihan Lengkap",
                  desc: "Bahasa & keterampilan kerja",
                },
                {
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Pendampingan Penuh",
                  desc: "Dari awal hingga penempatan",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl bg-gray-50 p-4 transition-colors hover:bg-primary/5"
                >
                  <div className="mt-0.5 text-primary">{item.icon}</div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
