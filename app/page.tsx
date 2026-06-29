import Image from "next/image";
import Link from "next/link";
import DestinationCard from "@/app/components/DestinationCard";
import AccommodationCard from "@/app/components/AccommodationCard";
import KulinerCard from "@/app/components/KulinerCard";
import {
  getFeaturedDestinations,
  getFeaturedAccommodations,
  getFeaturedKuliner,
} from "@/app/lib/sheets";
import type { Wisata, Penginapan, Kuliner } from "@/app/types";

import { getValidImg } from "@/app/lib/utils";

/* ---------- Fallback Static Data ---------- */
/* Digunakan saat SPREADSHEET_LINK belum dikonfigurasi */

const fallbackDestinations: Wisata[] = [
  {
    nama_wisata: "Hidden Waterfall",
    deskripsi_id: "Air terjun tersembunyi di jantung hutan.",
    deskripsi_en: "A hidden waterfall in the heart of the jungle.",
    harga: "Rp 25.000",
    jam_operasional: "08:00 - 17:00",
    link_gmaps: "#",
    link_gambar: "/images/dest-waterfall.png",
    tampil_di_beranda: "Ya",
  },
  {
    nama_wisata: "Rice Terraces",
    deskripsi_id: "Tradisi pertanian kuno dengan pemandangan panoramik.",
    deskripsi_en: "Ancient farming traditions with panoramic views.",
    harga: "Rp 30.000",
    jam_operasional: "06:00 - 18:00",
    link_gmaps: "#",
    link_gambar: "/images/dest-rice-terraces.png",
    tampil_di_beranda: "Ya",
  },
  {
    nama_wisata: "Village Walk",
    deskripsi_id: "Perjalanan menelusuri rumah tradisional dan kerajinan.",
    deskripsi_en: "A journey through traditional homes and crafts.",
    harga: "Rp 15.000",
    jam_operasional: "07:00 - 16:00",
    link_gmaps: "#",
    link_gambar: "/images/dest-village-walk.png",
    tampil_di_beranda: "Ya",
  },
];

const fallbackAccommodations: Penginapan[] = [
  {
    nama_penginapan: "Lumbung Wooden Cabin",
    deskripsi_id: "Kabin kayu tradisional yang nyaman.",
    deskripsi_en: "A cozy traditional wooden cabin.",
    harga: "Rp 450.000 / Malam",
    no_whatsapp: "6281234567890",
    link_gmaps: "#",
    link_gambar: "/images/stay-cabin.png",
    tampil_di_beranda: "Ya",
  },
  {
    nama_penginapan: "Tropical Garden Suite",
    deskripsi_id: "Suite dengan taman tropis yang indah.",
    deskripsi_en: "A suite with a beautiful tropical garden.",
    harga: "Rp 650.000 / Malam",
    no_whatsapp: "6289876543210",
    link_gmaps: "#",
    link_gambar: "/images/stay-tropical.png",
    tampil_di_beranda: "Ya",
  },
];

const fallbackKuliner: Kuliner[] = [
  {
    nama_warung: "Nasi Campur Heritage",
    deskripsi_id: "Sepiring nasi campur dengan lauk tradisional khas desa.",
    deskripsi_en:
      "A curated platter of seasoned rice, grilled fish, and local sambals — a centuries-old heritage flavour born.",
    harga: "Rp 25.000",
    jam_operasional: "08:00 - 20:00",
    link_gmaps: "#",
    link_gambar: "/images/dest-village-walk.png",
    tampil_di_beranda: "Ya",
  },
  {
    nama_warung: "Jajanan Pasar",
    deskripsi_id: "Aneka jajanan pasar tradisional yang manis dan gurih.",
    deskripsi_en:
      "Handpicked traditional Javanese snacks like Klepon and Lopis, perfect for a light afternoon refreshment.",
    harga: "Rp 15.000",
    jam_operasional: "06:00 - 15:00",
    link_gmaps: "#",
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
      {/* ===== JSON-LD Structured Data (SEO) ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristDestination",
            "name": "Desa Wisata Nanggulan",
            "description":
              "Destinasi wisata alam, kuliner otentik, dan penginapan nyaman di Desa Nanggulan, Kulon Progo, Yogyakarta.",
            // TODO: Ganti dengan domain asli setelah deploy
            "url": "https://wisata-nanggulan.vercel.app",
            "touristType": [
              "Nature lover",
              "Cultural tourist",
              "Food tourist",
            ],
            "geo": {
              "@type": "GeoCoordinates",
              // TODO: Ganti dengan koordinat GPS asli Desa Nanggulan
              "latitude": 0,
              "longitude": 0,
            },
            "image": "/images/hero-bg.png",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Desa Wisata Nanggulan",
            "description":
              "Platform digital resmi Desa Nanggulan. Temukan destinasi wisata alam, kuliner otentik, homestay, dan layanan masyarakat desa.",
            // TODO: Ganti dengan domain asli setelah deploy
            "url": "https://wisata-nanggulan.vercel.app",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nanggulan",
              "addressRegion": "Kulon Progo",
              "addressCountry": "ID",
            },
            "image": "/images/hero-bg.png",
          }),
        }}
      />

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
            {destinations.map((dest, idx) => (
              <DestinationCard key={idx} dest={dest} />
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
          <div className="flex overflow-x-auto gap-7 pb-8 px-5 sm:px-8 snap-x snap-mandatory hide-scrollbar -mx-5 sm:-mx-8">
            {accommodations.map((stay, idx) => (
              <AccommodationCard key={idx} stay={stay} />
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
          <div className="flex overflow-x-auto gap-7 pb-8 px-5 sm:px-8 snap-x snap-mandatory hide-scrollbar -mx-5 sm:-mx-8">
            {kuliner.map((item, idx) => (
              <KulinerCard key={idx} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
