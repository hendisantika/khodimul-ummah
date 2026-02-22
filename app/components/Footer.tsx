import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/khodimul-ummah.png"
                alt="Khodimul Ummah"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold">Khodimul Ummah</h3>
                <p className="text-[10px] tracking-widest uppercase text-secondary">
                  Melayani dengan Amanah
                </p>
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-white/60">
              Perusahaan Penempatan Pekerja Migran Indonesia (P3MI) resmi yang
              berkomitmen membantu TKI meraih karir terbaik di Timur Tengah.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {["Facebook", "Instagram", "TikTok", "YouTube"].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-xs text-white/60 transition-colors hover:bg-secondary hover:text-white"
                  aria-label={name}
                >
                  {name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
              Tautan Cepat
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Beranda", href: "#beranda" },
                { label: "Tentang Kami", href: "#tentang" },
                { label: "Layanan", href: "#layanan" },
                { label: "Destinasi", href: "#destinasi" },
                { label: "Proses Pendaftaran", href: "#proses" },
                { label: "Testimoni", href: "#testimoni" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
              Negara Tujuan
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Arab Saudi", flag: "🇸🇦" },
                { label: "Dubai (UEA)", flag: "🇦🇪" },
                { label: "Qatar", flag: "🇶🇦" },
              ].map((dest) => (
                <li
                  key={dest.label}
                  className="flex items-center gap-2 text-sm text-white/60"
                >
                  <span>{dest.flag}</span>
                  {dest.label}
                </li>
              ))}
            </ul>

            <h4 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wider text-secondary">
              Jam Operasional
            </h4>
            <p className="text-sm text-white/60">
              Sen - Jum: 08.00 - 17.00 WIB
            </p>
            <p className="text-sm text-white/60">Sab: 08.00 - 12.00 WIB</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
              Kontak
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Jl. Raya Penempatan No. 123, Jakarta Selatan 12345
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/60">
                <svg className="h-4 w-4 flex-shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +62 21 1234 5678
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/60">
                <svg className="h-4 w-4 flex-shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@khodimulummah.co.id
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} PT. Khodimul Ummah. Seluruh hak
              dilindungi undang-undang.
            </p>
            <div className="flex gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-white/60">
                Kebijakan Privasi
              </a>
              <a href="#" className="hover:text-white/60">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
