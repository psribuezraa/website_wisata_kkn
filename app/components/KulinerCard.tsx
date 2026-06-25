"use client";

import { useState } from "react";
import type { Kuliner } from "@/app/types";
import { getValidImg } from "@/app/lib/utils";

function isValidLink(val?: string | null): boolean {
  if (!val) return false;
  const s = val.trim();
  if (s === "" || s === "(kosong)" || s === "-" || s === "#") return false;
  return s.startsWith("http://") || s.startsWith("https://");
}

export default function KulinerCard({ item }: { item: Kuliner }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasGmaps = isValidLink(item.link_gmaps);

  return (
    <div className="w-[85vw] sm:w-[360px] shrink-0 snap-center group bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={getValidImg(item.link_gambar, "/images/food-placeholder.png")}
          alt={item.nama_warung}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-neutral-900">
          {item.nama_warung}
        </h3>
        <p className="mt-1.5 text-sm text-neutral-500 leading-relaxed">
          {item.deskripsi_en}
        </p>

        {/* Expandable Details */}
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: isExpanded ? "300px" : "0px",
            opacity: isExpanded ? 1 : 0,
          }}
        >
          <div className="mt-4 space-y-3 border-t border-neutral-100 pt-4 flex flex-col items-start text-left">
            {/* Harga */}
            {item.harga && item.harga !== "(kosong)" && item.harga !== "-" && (
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
                  {item.harga}
                </span>
              </div>
            )}

            {/* Jam Operasional */}
            {item.jam_operasional && item.jam_operasional !== "(kosong)" && item.jam_operasional !== "-" && (
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
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span className="text-neutral-600 text-left">
                  {item.jam_operasional}
                </span>
              </div>
            )}

            {/* Google Maps */}
            {hasGmaps && (
              <a
                href={item.link_gmaps}
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
