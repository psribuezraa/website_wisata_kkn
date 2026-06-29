import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

/**
 * API Route: On-Demand Revalidation
 *
 * Dipanggil oleh Google Apps Script setiap kali ada perubahan di Google Sheets.
 * Endpoint: POST /api/revalidate?secret=YOUR_SECRET_TOKEN
 *
 * Cara kerja:
 * 1. Google Sheets mengirim POST request ke URL ini.
 * 2. Sistem memverifikasi token rahasia.
 * 3. Jika valid, cache halaman yang menggunakan tag "sheets" akan dihapus.
 * 4. Halaman akan di-render ulang dengan data terbaru pada kunjungan berikutnya.
 */
export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");

    // Verifikasi token rahasia agar endpoint tidak bisa dispam
    if (secret !== process.env.REVALIDATE_TOKEN) {
      return NextResponse.json(
        { message: "Token tidak valid" },
        { status: 401 },
      );
    }

    // Hapus cache semua fetch yang menggunakan tag "sheets"
    revalidateTag("sheets", "max");

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
    });
  } catch {
    return NextResponse.json(
      { message: "Terjadi kesalahan saat revalidasi" },
      { status: 500 },
    );
  }
}
