import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wisata Desa Nanggulan — Jelajahi Keindahan Alam & Kuliner Otentik",
  description:
    "Platform digital resmi Desa Nanggulan. Temukan destinasi wisata alam, kuliner otentik, homestay, dan layanan masyarakat desa. Pesan langsung via WhatsApp.",
  keywords: [
    "desa wisata nanggulan",
    "wisata kulon progo",
    "wisata jogja",
    "kuliner nanggulan",
    "homestay nanggulan",
    "air terjun kedung pedut",
    "desa wisata jogja",
    "wisata alam yogyakarta",
  ],
  authors: [{ name: "Desa Wisata Nanggulan" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Desa Wisata Nanggulan",
    title: "Desa Wisata Nanggulan — Pesona Alam & Kuliner Tradisional Jogja",
    description:
      "Jelajahi keindahan alam, kuliner otentik, dan penginapan nyaman di Desa Nanggulan, Kulon Progo, Yogyakarta. Pesan langsung via WhatsApp!",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Pemandangan alam Desa Wisata Nanggulan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desa Wisata Nanggulan — Pesona Alam & Kuliner Tradisional Jogja",
    description:
      "Jelajahi keindahan alam, kuliner otentik, dan penginapan nyaman di Desa Nanggulan, Kulon Progo, Yogyakarta.",
    images: ["/images/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
