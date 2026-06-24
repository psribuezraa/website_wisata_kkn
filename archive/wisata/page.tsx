import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wisata — Desa Nanggulan",
  description:
    "Jelajahi destinasi wisata alam terbaik di Desa Nanggulan. Nikmati pemandangan hijau, sungai jernih, dan udara segar pedesaan.",
};

export default function WisataPage() {
  return (
    <section className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold text-primary-700 tracking-wide uppercase">
            Destinasi
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Wisata Alam Nanggulan
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-500">
            Daftar destinasi wisata akan segera tersedia setelah data dari Google
            Sheets terintegrasi pada Phase 2.
          </p>
        </div>

        {/* Placeholder grid — akan diganti dengan data dari Google Sheets */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4 h-48 rounded-xl bg-neutral-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="h-12 w-12 text-neutral-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-neutral-800">
                Destinasi Wisata {i}
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                Deskripsi singkat destinasi wisata akan muncul di sini.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
