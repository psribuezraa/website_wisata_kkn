# Product Requirements Document (PRD) 
**Website Pariwisata Desa - Proker KKN**

---

## 1. Introduction (Pendahuluan)
Website Pariwisata Desa adalah sebuah platform digital yang dikembangkan sebagai Program Kerja (Proker) Kuliah Kerja Nyata (KKN). Platform ini berfungsi sebagai "brosur digital premium" yang bertujuan mempromosikan potensi wisata alam, kuliner otentik, dan layanan masyarakat desa ke dunia luar secara elegan dan profesional.

## 2. Goals (Tujuan Utama)
1. **Meningkatkan Visibilitas (SEO):** Menjadikan desa mudah ditemukan oleh wisatawan domestik maupun internasional pada halaman pertama mesin pencari Google.
2. **Zero Cost Maintenance:** Memastikan website dapat beroperasi selamanya tanpa membebani kas desa untuk biaya *server/hosting* bulanan (Rp 0/bulan).
3. **Kemandirian Perangkat Desa:** Memberikan sistem yang sangat familier (seperti Excel) agar perangkat desa dapat memperbarui informasi secara mandiri tanpa membutuhkan keahlian IT atau *coding*.
4. **Transaksi Praktis:** Menjembatani komunikasi langsung antara wisatawan dan pemilik usaha lokal melalui WhatsApp, tanpa memotong biaya transaksi pihak ketiga.

## 3. Fitur Utama & Requirements
- **Katalog Wisata & Usaha:** Menampilkan galeri, harga, dan deskripsi destinasi wisata, *homestay*, warung makan, serta penyewaan.
- **Dukungan Dwi-bahasa (Bilingual):** Menyediakan *toggle* peralihan bahasa instan antara Bahasa Indonesia (ID) dan Bahasa Inggris (EN).
- **Pemesanan via WhatsApp API:** Setiap layanan usaha memiliki tombol "Pesan" yang secara dinamis membuka WhatsApp pemilik usaha beserta draf pesan otomatis sesuai bahasa yang sedang aktif.
- **Google Sheets sebagai CMS:** Pangkalan data seluruh harga, nomor HP, dan deskripsi disimpan dalam Google Sheets yang bisa diedit oleh warga desa kapan saja.
- **Responsif (*Mobile-First*):** Antarmuka dirancang khusus untuk kenyamanan maksimal saat diakses melalui *smartphone*.

## 4. Technical Architecture (Arsitektur Sistem)
- **Frontend Framework:** Next.js (App Router) untuk menghasilkan HTML statis dari *server* guna memaksimalkan performa dan SEO.
- **Desain UI/UX:** Tailwind CSS untuk tampilan premium dan animasi yang *smooth*.
- **Database & CMS:** Google Sheets (dipublikasikan sebagai sumber data).
- **Sinkronisasi Data (Real-time):** Menggunakan fitur *On-Demand Revalidation* Next.js yang dipicu oleh Webhook dari Google Apps Script setiap kali tabel Google Sheets di- *update*.
- **Infrastruktur / Hosting:** Vercel (Hobby Tier - 100% Gratis selamanya). Domain kustom (seperti `.desa.id`) opsional.

## 5. Implementation Plan & Development Phases
Pembangunan sistem dibagi menjadi lima fase (*milestones*) terukur:

### Phase 1: Project Setup & Foundation
- Inisialisasi kerangka Next.js dan integrasi Tailwind CSS.
- Menyusun arsitektur *routing* (halaman Beranda, Wisata, Layanan).
- Pembuatan komponen *Layout* dasar (Navbar dan Footer).

### Phase 2: Data Architecture (Google Sheets CMS)
- Membuat spesifikasi *template* kolom di Google Sheets.
- Membuat logika pemanggilan data (*fetching*) dari Vercel ke Google Sheets.
- Merender (*mapping*) baris data Google Sheets ke dalam komponen visual berbentuk kartu (*card*).

### Phase 3: Sinkronisasi Instan & SEO
- Mengonfigurasi ISR (Incremental Static Regeneration) pada Next.js.
- Menulis skrip Webhook pada Google Sheets untuk menembak API pembaruan Next.js saat ada sel yang diedit.
- Injeksi Semantic HTML dan *Meta Tags* (Open Graph) di setiap halaman untuk Googlebot.

### Phase 4: Fitur Bilingual & WhatsApp
- Penyiapan *dictionary* bahasa (ID & EN) menggunakan *library* i18n atau *Context*.
- Memasukkan tombol *toggle* bendera di *navbar*.
- Pembuatan algoritma pembuat tautan WhatsApp `https://wa.me/...` dinamis sesuai baris data dan bahasa pengguna.

### Phase 5: UI/UX Polish & Deployment
- Penghalusan antarmuka: penambahan efek *hover*, bayangan, dan memastikan tidak ada desain yang pecah di layar kecil.
- Audit aksesibilitas dan skor Lighthouse.
- *Deployment* kode *source* melalui GitHub ke *server* Vercel.

---
*Dokumen ini merupakan acuan utama selama pengerjaan proyek dan dapat dijadikan lampiran laporan KKN.*
