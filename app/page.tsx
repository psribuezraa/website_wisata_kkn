import Image from "next/image";
import Link from "next/link";
import {
  getFeaturedDestinations,
  getFeaturedAccommodations,
  getFeaturedKuliner,
} from "@/app/lib/sheets";
import type { Wisata, Penginapan, Kuliner } from "@/app/types";

/* ---------- Fallback Static Data ---------- */
/* Digunakan saat SPREADSHEET_LINK belum dikonfigurasi */

const fallbackDestinations: Wisata[] = [
  {
    id: "W01",
    nama_wisata: "Hidden Waterfall",
    deskripsi_id: "Air terjun tersembunyi di jantung hutan.",
    deskripsi_en: "A hidden waterfall in the heart of the jungle.",
    harga_id: "Rp 25.000",
    harga_en: "IDR 25k",
    jam_operasional: "08:00 - 17:00",
    link_gmaps: "#",
    link_gambar: "/images/dest-waterfall.png",
    tampil_di_beranda: "Ya",
  },
  {
    id: "W02",
    nama_wisata: "Rice Terraces",
    deskripsi_id: "Tradisi pertanian kuno dengan pemandangan panoramik.",
    deskripsi_en: "Ancient farming traditions with panoramic views.",
    harga_id: "Rp 30.000",
    harga_en: "IDR 30k",
    jam_operasional: "06:00 - 18:00",
    link_gmaps: "#",
    link_gambar: "/images/dest-rice-terraces.png",
    tampil_di_beranda: "Ya",
  },
  {
    id: "W03",
    nama_wisata: "Village Walk",
    deskripsi_id: "Perjalanan menelusuri rumah tradisional dan kerajinan.",
    deskripsi_en: "A journey through traditional homes and crafts.",
    harga_id: "Rp 15.000",
    harga_en: "IDR 15k",
    jam_operasional: "07:00 - 16:00",
    link_gmaps: "#",
    link_gambar: "/images/dest-village-walk.png",
    tampil_di_beranda: "Ya",
  },
];

const fallbackAccommodations: Penginapan[] = [
  {
    id: "H01",
    nama_penginapan: "Lumbung Wooden Cabin",
    nama_pemilik: "Pak Budi",
    deskripsi_id: "Kabin kayu tradisional yang nyaman.",
    deskripsi_en: "A cozy traditional wooden cabin.",
    harga_id: "Rp 450.000 / Malam",
    harga_en: "IDR 450k",
    no_whatsapp: "6281234567890",
    link_gmaps: "#",
    link_gambar: "/images/stay-cabin.png",
    tampil_di_beranda: "Ya",
  },
  {
    id: "H02",
    nama_penginapan: "Tropical Garden Suite",
    nama_pemilik: "Ibu Sari",
    deskripsi_id: "Suite dengan taman tropis yang indah.",
    deskripsi_en: "A suite with a beautiful tropical garden.",
    harga_id: "Rp 650.000 / Malam",
    harga_en: "IDR 650k",
    no_whatsapp: "6289876543210",
    link_gmaps: "#",
    link_gambar: "/images/stay-tropical.png",
    tampil_di_beranda: "Ya",
  },
];

const fallbackKuliner: Kuliner[] = [
  {
    id: "K01",
    nama_kuliner: "Nasi Campur Heritage",
    deskripsi_id: "Sepiring nasi campur dengan lauk tradisional khas desa.",
    deskripsi_en:
      "A curated platter of seasoned rice, grilled fish, and local sambals — a centuries-old heritage flavour born.",
    harga_id: "Rp 25.000",
    harga_en: "IDR 25k",
    no_whatsapp: "6281234567890",
    link_gambar: "/images/dest-village-walk.png",
    tampil_di_beranda: "Ya",
  },
  {
    id: "K02",
    nama_kuliner: "Jajanan Pasar",
    deskripsi_id: "Aneka jajanan pasar tradisional yang manis dan gurih.",
    deskripsi_en:
      "Handpicked traditional Javanese snacks like Klepon and Lopis, perfect for a light afternoon refreshment.",
    harga_id: "Rp 15.000",
    harga_en: "IDR 15k",
    no_whatsapp: "6289876543210",
    link_gambar: "/images/dest-rice-terraces.png",
    tampil_di_beranda: "Ya",
  },
];

/* ---------- Page ---------- */

export default async function Home() {
  // Fetch data dari Google Sheets (fallback ke data statis jika belum dikonfigurasi)
  let destinations: Wisata[] = [];
  let accommodations: Penginapan[] = [];
  let kuliner: Kuliner[] = [];

  try {
    destinations = await getFeaturedDestinations();
    accommodations = await getFeaturedAccommodations();
    kuliner = await getFeaturedKuliner();
  } catch (error) {
    console.error("[Home] Gagal fetch data dari Sheets:", error);
  }

  // Gunakan fallback jika data kosong
  if (destinations.length === 0) destinations = fallbackDestinations;
  if (accommodations.length === 0) accommodations = fallbackAccommodations;
  if (kuliner.length === 0) kuliner = fallbackKuliner;

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-[85vh] min-h-[540px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero-bg.png"
          alt="Pemandangan Desa Wisata"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Discover the Authentic Village Life
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            Experience the soul of Indonesia through breathtaking landscapes and
            rich cultural heritage.
          </p>
          <div className="mt-8">
            <Link
              href="/#destinations"
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/30 transition-all duration-200 hover:bg-primary-700 hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== OUR HERITAGE ===== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/about-village.png"
                alt="Keindahan Desa Wisata"
                fill
                className="object-cover"
                quality={85}
              />
            </div>

            {/* Text */}
            <div className="space-y-5">
              <span className="section-label">Our Heritage</span>
              <h2 className="section-heading !leading-snug">
                Rooted in Nature, <br className="hidden sm:block" />
                Crafted by Tradition.
              </h2>
              <div className="space-y-4 text-[15px] leading-relaxed text-neutral-500">
                <p>
                  Step away from the hustle of modern life and immerse yourself
                  in rhythms dictated by the sun and seasons. Our village offers
                  a sanctuary where sustainable agriculture and ancient cultural
                  practices thrive in harmony with the pristine environment.
                </p>
                <p>
                  Every path leads to a story, every meal is a celebration of
                  local harvest, and every sunset over the rice terraces reminds
                  us of the simple beauty of existence.
                </p>
              </div>
              <Link
                href="/#destinations"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-800 hover:text-primary-600 transition-colors group"
              >
                Read Our Story
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POPULAR DESTINATIONS ===== */}
      <section id="destinations" className="py-20 sm:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Heading */}
          <div className="text-center mb-14">
            <span className="section-label">Explore</span>
            <h2 className="section-heading mt-2">Popular Destinations</h2>
          </div>

          {/* Cards */}
          <div className="flex overflow-x-auto gap-7 pb-8 px-5 sm:px-8 snap-x snap-mandatory hide-scrollbar -mx-5 sm:-mx-8">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className="w-[85vw] sm:w-[360px] shrink-0 snap-center group bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={
                      dest.link_gambar &&
                      dest.link_gambar !== "(kosong)" &&
                      dest.link_gambar !== "-"
                        ? dest.link_gambar
                        : "/images/dest-waterfall.png"
                    }
                    alt={dest.nama_wisata}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    quality={80}
                  />
                  {/* Price Badge */}
                  <span className="absolute top-3 left-3 rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
                    {dest.harga_en}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {dest.nama_wisata}
                  </h3>
                  <p className="mt-1.5 text-sm text-neutral-500 leading-relaxed">
                    {dest.deskripsi_en}
                  </p>
                  <div className="mt-5">
                    <Link
                      href={
                        dest.link_gmaps &&
                        dest.link_gmaps !== "(kosong)" &&
                        dest.link_gmaps !== "-"
                          ? dest.link_gmaps
                          : "/#destinations"
                      }
                      target={
                        dest.link_gmaps &&
                        dest.link_gmaps !== "(kosong)" &&
                        dest.link_gmaps !== "-"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        dest.link_gmaps &&
                        dest.link_gmaps !== "(kosong)" &&
                        dest.link_gmaps !== "-"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-flex w-full items-center justify-center rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 transition-all duration-200 hover:bg-neutral-100 hover:text-neutral-900"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHERE TO STAY ===== */}
      <section id="accommodations" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Heading */}
          <div className="text-center mb-14">
            <span className="section-label">Accommodation</span>
            <h2 className="section-heading mt-2">Where to Stay</h2>
          </div>

          {/* Cards */}
          <div
            className={`grid grid-cols-1 gap-7 ${accommodations.length >= 2 ? "sm:grid-cols-2 max-w-4xl" : "max-w-md"} mx-auto`}
          >
            {accommodations.map((stay) => (
              <div
                key={stay.id}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={
                      stay.link_gambar &&
                      stay.link_gambar !== "(kosong)" &&
                      stay.link_gambar !== "-"
                        ? stay.link_gambar
                        : "/images/stay-cabin.png"
                    }
                    alt={stay.nama_penginapan}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    quality={80}
                  />
                  {/* Price Badge */}
                  <span className="absolute top-3 right-3 rounded-full bg-neutral-900/70 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
                    {stay.harga_en}{" "}
                    <span className="font-normal text-white/70">/ night</span>
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {stay.nama_penginapan}
                  </h3>
                  <p className="mt-1.5 text-sm text-neutral-500 leading-relaxed">
                    {stay.deskripsi_en}
                  </p>

                  {/* WhatsApp Button */}
                  <div className="mt-5">
                    <a
                      href={
                        stay.no_whatsapp
                          ? `https://wa.me/${stay.no_whatsapp}?text=${encodeURIComponent(
                              `Halo, saya tertarik untuk memesan ${stay.nama_penginapan}. Apakah tersedia?`,
                            )}`
                          : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-700 shadow-sm hover:shadow-md"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Book via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TASTE THE HERITAGE (KULINER) ===== */}
      <section id="kuliner" className="py-20 sm:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Heading */}
          <div className="text-center mb-14">
            <span className="section-label">Kuliner</span>
            <h2 className="section-heading mt-2">Taste the Heritage</h2>
            <p className="mt-3 text-sm text-neutral-500 max-w-lg mx-auto leading-relaxed">
              Savor the authentic taste of our village, prepared with fresh
              ingredients and centuries-old recipes passed down through
              generations.
            </p>
          </div>

          {/* Cards */}
          <div
            className={`grid grid-cols-1 gap-7 ${kuliner.length >= 2 ? "sm:grid-cols-2 max-w-4xl" : "max-w-md"} mx-auto`}
          >
            {kuliner.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={
                      item.link_gambar &&
                      item.link_gambar !== "(kosong)" &&
                      item.link_gambar !== "-"
                        ? item.link_gambar
                        : "/images/dest-village-walk.png"
                    }
                    alt={item.nama_kuliner}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    quality={80}
                  />
                  {/* Price Badge */}
                  <span className="absolute top-3 left-3 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
                    {item.harga_en}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {item.nama_kuliner}
                  </h3>
                  <p className="mt-1.5 text-sm text-neutral-500 leading-relaxed">
                    {item.deskripsi_en}
                  </p>
                  <div className="mt-5">
                    <a
                      href={
                        item.no_whatsapp
                          ? `https://wa.me/${item.no_whatsapp}?text=${encodeURIComponent(
                              `Halo, saya ingin memesan ${item.nama_kuliner}. Apakah tersedia?`,
                            )}`
                          : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 transition-all duration-200 hover:bg-neutral-100 hover:text-neutral-900"
                    >
                      Pesan via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
