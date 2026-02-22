const testimonials = [
  {
    name: "Siti Aminah",
    role: "Pekerja Domestik",
    location: "Riyadh, Arab Saudi",
    quote:
      "Alhamdulillah, berkat Khodimul Ummah saya bisa bekerja di Arab Saudi dengan majikan yang baik. Prosesnya mudah dan tim sangat membantu dari awal sampai akhir.",
    rating: 5,
    year: "2023",
  },
  {
    name: "Ahmad Fauzi",
    role: "Pekerja Konstruksi",
    location: "Dubai, UEA",
    quote:
      "Saya sangat bersyukur bisa mendapat pekerjaan di Dubai melalui Khodimul Ummah. Gaji sesuai kontrak dan fasilitas lengkap. Keluarga di rumah jadi lebih sejahtera.",
    rating: 5,
    year: "2024",
  },
  {
    name: "Dewi Rahayu",
    role: "Housekeeping Hotel",
    location: "Doha, Qatar",
    quote:
      "Pelatihan yang diberikan sangat membantu. Saya jadi percaya diri bekerja di hotel bintang 5 di Qatar. Terima kasih Khodimul Ummah!",
    rating: 5,
    year: "2024",
  },
  {
    name: "Budi Santoso",
    role: "Pengemudi",
    location: "Jeddah, Arab Saudi",
    quote:
      "Proses pengurusan dokumen sangat profesional dan cepat. Tidak ada biaya-biaya tambahan yang tidak jelas. Recommended banget!",
    rating: 5,
    year: "2023",
  },
  {
    name: "Nur Hasanah",
    role: "Pekerja Domestik",
    location: "Abu Dhabi, UEA",
    quote:
      "Tim Khodimul Ummah sangat responsif. Ketika saya ada masalah di awal, mereka langsung membantu menyelesaikan. Pelayanan benar-benar amanah.",
    rating: 5,
    year: "2024",
  },
  {
    name: "Rizki Ramadhan",
    role: "Kitchen Helper",
    location: "Doha, Qatar",
    quote:
      "Bekerja di restoran besar di Qatar adalah impian saya. Khodimul Ummah membantu mewujudkannya. Pelatihan bahasa Arab-nya juga sangat berguna.",
    rating: 5,
    year: "2025",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-gradient-to-b from-primary-dark to-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary">
            Testimoni
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Cerita <span className="text-secondary">Sukses</span> Pekerja Kami
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Dengarkan langsung pengalaman pekerja migran Indonesia yang telah
            kami tempatkan di berbagai negara Timur Tengah.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/15"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg
                    key={j}
                    className="h-4 w-4 text-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-sm leading-relaxed text-white/90">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 text-sm font-bold text-secondary">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-white/60">
                    {t.role} &middot; {t.location}
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
