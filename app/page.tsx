import Image from "next/image";
import Link from "next/link";

/* ---------- Data ---------- */

const destinations = [
  {
    title: "Hidden Waterfall",
    description: "A hidden waterfall in the heart of the jungle.",
    image: "/images/dest-waterfall.png",
    price: "IDR 25k",
  },
  {
    title: "Rice Terraces",
    description: "Ancient farming traditions with panoramic views.",
    image: "/images/dest-rice-terraces.png",
    price: "IDR 30k",
  },
  {
    title: "Village Walk",
    description: "A journey through traditional homes and crafts.",
    image: "/images/dest-village-walk.png",
    price: "IDR 15k",
  },
];

const accommodations = [
  {
    name: "Lumbung Wooden Cabin",
    price: "IDR 450k",
    image: "/images/stay-cabin.png",
    guests: 2,
    beds: 1,
    baths: 1,
  },
  {
    name: "Tropical Garden Suite",
    price: "IDR 650k",
    image: "/images/stay-tropical.png",
    guests: 4,
    beds: 2,
    baths: 1,
  },
];

/* ---------- Page ---------- */

export default function Home() {
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
            Experience the soul of Indonesia through breathtaking landscapes and rich cultural heritage.
          </p>
          <div className="mt-8">
            <Link
              href="/wisata"
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/30 transition-all duration-200 hover:bg-primary-700 hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Now
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
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
                Rooted in Nature,{" "}
                <br className="hidden sm:block" />
                Crafted by Tradition.
              </h2>
              <div className="space-y-4 text-[15px] leading-relaxed text-neutral-500">
                <p>
                  Step away from the hustle of modern life and immerse yourself in rhythms
                  dictated by the sun and seasons. Our village offers a sanctuary where sustainable
                  agriculture and ancient cultural practices thrive in harmony with the pristine
                  environment.
                </p>
                <p>
                  Every path leads to a story, every meal is a celebration of local harvest, and every
                  sunset over the rice terraces reminds us of the simple beauty of existence.
                </p>
              </div>
              <Link
                href="/wisata"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-800 hover:text-primary-600 transition-colors group"
              >
                Read Our Story
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POPULAR DESTINATIONS ===== */}
      <section className="py-20 sm:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Heading */}
          <div className="text-center mb-14">
            <span className="section-label">Explore</span>
            <h2 className="section-heading mt-2">Popular Destinations</h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((dest) => (
              <div
                key={dest.title}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    quality={80}
                  />
                  {/* Price Badge */}
                  <span className="absolute top-3 left-3 rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
                    {dest.price}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {dest.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-neutral-500 leading-relaxed">
                    {dest.description}
                  </p>
                  <div className="mt-5">
                    <Link
                      href="/wisata"
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
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Heading */}
          <div className="text-center mb-14">
            <span className="section-label">Accommodation</span>
            <h2 className="section-heading mt-2">Where to Stay</h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 max-w-4xl mx-auto">
            {accommodations.map((stay) => (
              <div
                key={stay.name}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={stay.image}
                    alt={stay.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    quality={80}
                  />
                  {/* Price Badge */}
                  <span className="absolute top-3 right-3 rounded-full bg-neutral-900/70 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
                    {stay.price} <span className="font-normal text-white/70">/ night</span>
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {stay.name}
                  </h3>

                  {/* Amenity Icons */}
                  <div className="mt-3 flex items-center gap-4 text-neutral-400">
                    {/* Guests */}
                    <span className="flex items-center gap-1 text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                      {stay.guests}
                    </span>
                    {/* Beds */}
                    <span className="flex items-center gap-1 text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                      </svg>
                      {stay.beds}
                    </span>
                    {/* Baths */}
                    <span className="flex items-center gap-1 text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      {stay.baths}
                    </span>
                  </div>

                  {/* WhatsApp Button */}
                  <div className="mt-5">
                    <a
                      href="#"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-700 shadow-sm hover:shadow-md"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
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
    </>
  );
}
