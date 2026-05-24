# UNIB PathFinder 🗺️

**UNIB PathFinder** adalah aplikasi navigasi rute cerdas berbasis web yang dirancang khusus untuk memetakan lokasi dan rute tercepat di area kampus Universitas Bengkulu (UNIB). Aplikasi ini menggunakan **Algoritma A* (A-Star)** sebagai mesin pencari rute utama (*pathfinding*) yang dikombinasikan dengan OpenStreetMap (OSRM) untuk menggambar rute jalan aspal.

Proyek ini dibangun sebagai bagian dari implementasi Kecerdasan Buatan (AI) untuk menyelesaikan masalah pencarian rute terpendek dengan fungsi heuristik dinamis.

---

## ✨ Fitur Utama

1. **Pencarian Rute Cerdas (A* Algorithm)**
   Menggunakan algoritma A-Star yang memanfaatkan jarak geografis lintang & bujur (Haversine formula) sebagai fungsi heuristik. Dijamin menemukan rute paling optimal.
2. **Simulasi Buka-Tutup Gerbang (Time-based Routing)**
   Menyesuaikan rute berdasarkan waktu nyata (Real-Time). Jika pengguna mencari jalan masuk kampus pada malam hari (> 22.00 WIB) atau saat hari libur, sistem akan otomatis menyesuaikan graf jalur dan menghindari gerbang yang tertutup.
3. **Penyesuaian Moda Kendaraan**
   Menyediakan pilihan profil kendaraan seperti **Jalan Kaki**, **Sepeda**, **Motor**, dan **Mobil** yang akan memengaruhi bagaimana OSRM menggambar garis rute di aspal.
4. **Desain Utilitarian & Responsif**
   Antarmuka Pengguna (UI) yang dirancang *Ultra Minimalist* dan *Native* agar dapat dimuat dengan sangat cepat baik di komputer (Desktop) maupun perangkat seluler (Mobile) tanpa mengurangi fungsi utamanya.
5. **GPS Integrasi (Lokasi Saat Ini)**
   Pengguna dapat langsung menggunakan koordinat GPS "*Dari Sini*" untuk mencari arah tercepat menuju fasilitas kampus yang diinginkan.

---

## 🛠️ Teknologi yang Digunakan

Proyek ini sepenuhnya bersifat *Client-Side* (Frontend-Only) dan tidak memerlukan server database (Backend).
* **HTML5, CSS3, JavaScript (ES6)**
* **Leaflet.js:** Library *open-source* terpopuler untuk membangun peta interaktif.
* **Leaflet Routing Machine & OSRM:** Layanan *routing* jalan aspal berbasis OpenStreetMap.
* **Font Awesome:** Untuk ikon-ikon UI navigasi.

---

## 🚀 Cara Menjalankan Aplikasi

Aplikasi ini tidak membutuhkan instalasi server Node.js, PHP, atau database apa pun. Anda bisa langsung menjalankannya di perangkat Anda.

1. **Clone atau Unduh** *repository/folder* ini ke komputer Anda.
2. Buka folder `unib-pathfinder`.
3. Klik ganda (`Double Click`) pada file **`index.html`** untuk membukanya di *browser* (direkomendasikan menggunakan Google Chrome, Mozilla Firefox, atau Microsoft Edge).
4. Selesai! Aplikasi sudah siap digunakan.

*(Catatan: Anda membutuhkan koneksi internet aktif agar modul peta dasar (Tile Layer) dari OpenStreetMap dapat dimuat).*

---

## 🧠 Mengapa Algoritma A*?

Dalam skenario rute kampus yang memiliki waktu komputasi kritis (berjalan di browser klien), **A*** jauh lebih unggul dibandingkan algoritma *Dijkstra*. A* menghemat sumber daya secara signifikan dengan hanya mengeksplorasi jalan yang mendekat ke arah tujuan, berkat panduan *Heuristik*. Keunggulan utamanya di proyek ini mencakup:
* Jaminan rute terpendek (*Completeness & Optimality*).
* Eksekusi dalam hitungan milidetik.
* Kemampuan manipulasi biaya jalur dinamis `g(n)` (seperti memblokir gerbang yang tutup).

Untuk penjelasan lebih detail dan matematis yang bisa dimasukkan ke dalam laporan, silakan baca file: [`penjelasan_algoritma_astar.md`](./penjelasan_algoritma_astar.md)

---

## 📂 Struktur Direktori

```text
📁 unib-pathfinder/
├── 📄 index.html                       # Kerangka UI utama
├── 📄 style.css                        # Aturan desain dan styling UI (Ultra Minimalist)
├── 📄 script.js                        # Logika Utama Peta, Graph Nodes, dan Algoritma A*
├── 📄 penjelasan_algoritma_astar.md    # Penjelasan ilmiah terkait AI A* di proyek ini
├── 📄 README.md                        # Dokumentasi ini
└── 📁 image/                           # Foto dan aset visual untuk popup lokasi kampus
```

---
*Dibuat untuk memenuhi tugas mata kuliah Kecerdasan Buatan (AI).*
