import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan — Desa Nanggulan",
  description:
    "Temukan layanan masyarakat Desa Nanggulan: homestay, warung makan, penyewaan alat, dan lainnya. Pesan langsung via WhatsApp.",
};

export default function LayananPage() {
  return (
    <section className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold text-primary-700 tracking-wide uppercase">
            Usaha Desa
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Layanan & Usaha Lokal
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-500">
            Daftar layanan akan segera tersedia setelah data dari Google
            Sheets terintegrasi pada Phase 2.
          </p>
        </div>

        {/* Placeholder grid — akan diganti dengan data dari Google Sheets */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Homestay", icon: "🏡" },
            { name: "Warung Makan", icon: "🍲" },
            { name: "Penyewaan", icon: "🚲" },
          ].map((item) => (
            <div
              key={item.name}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <span className="text-4xl">{item.icon}</span>
              <h3 className="mt-4 text-lg font-semibold text-neutral-800">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                Informasi {item.name.toLowerCase()} akan dimuat dari Google
                Sheets.
              </p>
              <button
                disabled
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary-600/10 px-4 py-2 text-sm font-medium text-primary-700 opacity-50 cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
                Pesan via WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
