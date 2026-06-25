"use client";

import { useState } from "react";
import type { Penginapan } from "@/app/types";
import { getValidImg } from "@/app/lib/utils";

function isValidLink(val?: string | null): boolean {
  if (!val) return false;
  const s = val.trim();
  if (s === "" || s === "(kosong)" || s === "-" || s === "#") return false;
  // Hanya terima URL yang valid (dimulai dengan http:// atau https://)
  return s.startsWith("http://") || s.startsWith("https://");
}

function getValidWa(val?: string | null): string | null {
  if (!val) return null;
  const s = val.trim();
  if (s === "" || s === "(kosong)" || s === "-") return null;
  // Ensure it starts with 62
  let formatted = s;
  if (formatted.startsWith("0")) {
    formatted = "62" + formatted.substring(1);
  } else if (!formatted.startsWith("62") && !formatted.startsWith("+62")) {
    // If it doesn't start with 62 or +62, assume it's just missing the country code
    formatted = "62" + formatted;
  }
  // Strip non-numeric characters like + or spaces
  formatted = formatted.replace(/\D/g, "");
  return formatted;
}

export default function AccommodationCard({ stay }: { stay: Penginapan }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasGmaps = isValidLink(stay.link_gmaps);
  const validWa = getValidWa(stay.no_whatsapp);
  const waLink = validWa
    ? `https://wa.me/${validWa}?text=${encodeURIComponent(
        `Halo ${stay.nama_pemilik}, saya tertarik untuk memesan penginapan ${stay.nama_penginapan}. Apakah tersedia?`
      )}`
    : null;

  return (
    <div className="w-[85vw] sm:w-[360px] shrink-0 snap-center group bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={getValidImg(stay.link_gambar, "/images/stay-cabin.png")}
          alt={stay.nama_penginapan}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-neutral-900">
          {stay.nama_penginapan}
        </h3>
        <p className="mt-1.5 text-sm text-neutral-500 leading-relaxed">
          {stay.deskripsi_en}
        </p>

        {/* Expandable Details */}
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: isExpanded ? "400px" : "0px",
            opacity: isExpanded ? 1 : 0,
          }}
        >
          <div className="mt-4 space-y-3 border-t border-neutral-100 pt-4 flex flex-col items-start text-left">
            {/* Harga */}
            {stay.harga && stay.harga !== "(kosong)" && stay.harga !== "-" && (
              <div className="flex items-center gap-2.5 text-sm w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4 text-primary-600 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>
                <span className="text-neutral-700 font-medium text-left">
                  {stay.harga} <span className="font-normal text-neutral-500 text-xs">/ night</span>
                </span>
              </div>
            )}

            {/* Nama Pemilik */}
            {stay.nama_pemilik && stay.nama_pemilik !== "(kosong)" && stay.nama_pemilik !== "-" && (
              <div className="flex items-center gap-2.5 text-sm w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4 text-primary-600 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <span className="text-neutral-600 text-left">
                  {stay.nama_pemilik}
                </span>
              </div>
            )}

            {/* Google Maps */}
            {hasGmaps && (
              <a
                href={stay.link_gmaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                Lihat di Google Maps
              </a>
            )}

            {/* WhatsApp */}
            {waLink && (
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.221-1.15-2.136-2.389-2.055a18.37 18.37 0 0 0-8.03 1.34m0 0a2.12 2.12 0 0 0-.66.381"
                  />
                </svg>
                Hubungi via WhatsApp
              </a>
            )}
          </div>
        </div>

        {/* Toggle Button */}
        <div className="mt-auto pt-5">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 transition-all duration-200 hover:bg-neutral-100 hover:text-neutral-900 cursor-pointer"
          >
            {isExpanded ? "Hide Details" : "View Details"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`h-3.5 w-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
