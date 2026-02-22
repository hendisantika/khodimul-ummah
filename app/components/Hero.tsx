import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />

      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-white/5 blur-3xl animate-float animation-delay-400" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <Image
              src="/khodimul-ummah.png"
              alt="Khodimul Ummah Logo"
              width={120}
              height={120}
              className="h-28 w-auto drop-shadow-2xl sm:h-36"
              priority
            />
          </div>

          {/* Badge */}
          <div className="mb-6 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              Perusahaan Penempatan Pekerja Migran Indonesia (P3MI)
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white animate-fade-in-up animation-delay-200 sm:text-5xl lg:text-6xl">
            Wujudkan Masa Depan{" "}
            <span className="text-secondary">Gemilang</span> Bersama
            <br />
            <span className="text-secondary-light">Khodimul Ummah</span>
          </h1>

          {/* Description */}
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/80 animate-fade-in-up animation-delay-400 sm:text-xl">
            Mitra terpercaya dalam penempatan tenaga kerja Indonesia ke{" "}
            <strong className="text-white">Arab Saudi</strong>,{" "}
            <strong className="text-white">Dubai</strong>, &{" "}
            <strong className="text-white">Qatar</strong>. Profesional,
            amanah, dan berpengalaman.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 animate-fade-in-up animation-delay-600 sm:flex-row">
            <a
              href="#kontak"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-secondary-light hover:shadow-xl hover:-translate-y-0.5"
            >
              Daftar Sekarang
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
            <a
              href="#tentang"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
            >
              Pelajari Selengkapnya
            </a>
          </div>

          {/* Destination flags */}
          <div className="mt-16 flex items-center gap-8 animate-fade-in-up animation-delay-800">
            {[
              { country: "Arab Saudi", flag: "🇸🇦" },
              { country: "Dubai (UAE)", flag: "🇦🇪" },
              { country: "Qatar", flag: "🇶🇦" },
            ].map((dest) => (
              <div
                key={dest.country}
                className="flex items-center gap-2 text-white/70"
              >
                <span className="text-2xl">{dest.flag}</span>
                <span className="text-sm font-medium">{dest.country}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
