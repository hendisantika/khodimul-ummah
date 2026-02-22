export default function Contact() {
  return (
    <section id="kontak" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Hubungi Kami
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Siap <span className="text-primary">Membantu</span> Anda
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Hubungi kami untuk konsultasi gratis. Tim kami siap menjawab semua
            pertanyaan Anda tentang peluang kerja di Timur Tengah.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="space-y-6 lg:col-span-2">
            {/* Office */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-gray-900">
                Kantor Pusat
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Alamat</p>
                    <p className="text-sm text-gray-600">
                      Jl. Raya Penempatan No. 123
                      <br />
                      Jakarta Selatan 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Telepon</p>
                    <p className="text-sm text-gray-600">
                      +62 21 1234 5678
                      <br />
                      +62 812 3456 7890 (WhatsApp)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">
                      info@khodimulummah.co.id
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Jam Operasional
                    </p>
                    <p className="text-sm text-gray-600">
                      Senin - Jumat: 08.00 - 17.00 WIB
                      <br />
                      Sabtu: 08.00 - 12.00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-gray-900">
                Media Sosial
              </h3>
              <div className="flex gap-3">
                {[
                  {
                    name: "Facebook",
                    icon: (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Instagram",
                    icon: (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    ),
                  },
                  {
                    name: "TikTok",
                    icon: (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                      </svg>
                    ),
                  },
                  {
                    name: "YouTube",
                    icon: (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-all hover:bg-primary hover:text-white"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm lg:p-8">
              <h3 className="mb-6 text-lg font-bold text-gray-900">
                Kirim Pesan
              </h3>
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="nama"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="nama"
                      name="nama"
                      placeholder="Masukkan nama lengkap"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telepon"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      No. Telepon / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="telepon"
                      name="telepon"
                      placeholder="Contoh: 081234567890"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Masukkan alamat email"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tujuan"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Negara Tujuan
                  </label>
                  <select
                    id="tujuan"
                    name="tujuan"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-500 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  >
                    <option value="">Pilih negara tujuan</option>
                    <option value="arab-saudi">Arab Saudi</option>
                    <option value="dubai">Dubai (UEA)</option>
                    <option value="qatar">Qatar</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="pesan"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    rows={4}
                    placeholder="Tulis pesan atau pertanyaan Anda..."
                    className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary px-6 py-3.5 font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
