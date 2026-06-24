/* ========================================
   Type Definitions — Google Sheets CMS
   ======================================== */

/** Sheet 1: Wisata */
export interface Wisata {
  id: string;
  nama_wisata: string;
  deskripsi_id: string;
  deskripsi_en: string;
  harga_id: string;
  harga_en: string;
  jam_operasional: string;
  link_gmaps: string;
  link_gambar: string;
  tampil_di_beranda: "Ya" | "Tidak";
}

/** Sheet 2: Penginapan */
export interface Penginapan {
  id: string;
  nama_penginapan: string;
  nama_pemilik: string;
  deskripsi_id: string;
  deskripsi_en: string;
  harga_id: string;
  harga_en: string;
  no_whatsapp: string;
  link_gmaps: string;
  link_gambar: string;
  tampil_di_beranda: "Ya" | "Tidak";
}

/** Sheet 3: Kuliner */
export interface Kuliner {
  id: string;
  nama_kuliner: string;
  deskripsi_id: string;
  deskripsi_en: string;
  harga_id: string;
  harga_en: string;
  no_whatsapp: string;
  link_gambar: string;
  tampil_di_beranda: "Ya" | "Tidak";
}
