# PRODUCT REQUIREMENT DOCUMENT (PRD)
# UNIB PathFinder
### Smart Campus Navigation System Universitas Bengkulu

---

# 1. Informasi Umum

## Nama Project
UNIB PathFinder

## Jenis Project
Website Navigasi Kampus berbasis AI Shortest Path

## Platform
Web Application

## Target Pengguna
- Mahasiswa Universitas Bengkulu
- Dosen
- Staff kampus
- Mahasiswa baru
- Tamu kampus

---

# 2. Latar Belakang

Area Universitas Bengkulu memiliki banyak gedung, jalan, serta fasilitas yang cukup luas sehingga mahasiswa baru maupun pengunjung sering mengalami kesulitan dalam mencari lokasi tertentu.

Saat ini belum tersedia sistem navigasi khusus kampus Universitas Bengkulu yang mampu:
- menampilkan lokasi gedung secara real-time,
- memberikan jalur tercepat,
- mengikuti jalan asli kampus,
- serta membantu navigasi internal kampus secara efektif.

Karena itu dibuatlah sistem bernama **UNIB PathFinder**, yaitu aplikasi navigasi kampus berbasis web yang memanfaatkan konsep Artificial Intelligence pada pencarian shortest path.

---

# 3. Tujuan Project

Tujuan utama project:
- Membantu pengguna menemukan lokasi di area Universitas Bengkulu
- Memberikan jalur tercepat antar lokasi
- Menampilkan navigasi berdasarkan jalan nyata
- Mengimplementasikan konsep AI shortest path
- Menjadi prototype Smart Campus Navigation

---

# 4. Ruang Lingkup Sistem

Sistem mencakup:
- Pemetaan area Universitas Bengkulu
- Penentuan lokasi awal dan tujuan
- Pencarian jalur tercepat
- Visualisasi route pada map
- Estimasi jarak dan waktu tempuh
- Integrasi algoritma shortest path

---

# 5. Teknologi yang Digunakan

## Frontend
- HTML5
- CSS3
- JavaScript

## Map & Routing
- Leaflet.js
- Leaflet Routing Machine
- OpenStreetMap

## AI / Algorithm
- A* Algorithm
atau
- Dijkstra Algorithm

---

# 6. Fitur Utama Sistem

## 6.1 Interactive Map
Sistem menampilkan peta area Universitas Bengkulu secara interaktif menggunakan OpenStreetMap.

### Fungsi:
- Zoom in/out
- Drag map
- Marker lokasi
- Routing jalan

---

## 6.2 Pemilihan Lokasi
Pengguna dapat memilih:
- Lokasi awal
- Lokasi tujuan

Menggunakan:
- dropdown menu
- search location

---

## 6.3 Shortest Path Navigation
Sistem menghitung jalur tercepat menggunakan algoritma shortest path.

### Output:
- Jalur tercepat
- Polyline route
- Estimasi jarak
- Estimasi waktu

---

## 6.4 Marker Lokasi Kampus
Sistem menampilkan marker lokasi penting kampus.

### Lokasi:
- Gerbang UNIB Belakang
- Gerbang UNIB Depan
- Gerbang Utama UNIB
- Rektorat
- Fakultas Teknik
- FMIPA
- Fakultas Hukum
- Fakultas Pertanian
- Masjid Kampus
- Perpustakaan
- Auditorium
- Area Parkir
- Kantin
- Asrama Mahasiswa

---

## 6.5 Popup Informasi Lokasi
Ketika marker diklik:
- nama lokasi muncul
- informasi singkat lokasi tampil

---

## 6.6 Current Location
Mengambil lokasi pengguna menggunakan GPS browser.

---

## 6.7 Reset Route
Menghapus route sebelumnya dan memulai pencarian baru.

---

## 6.8 Dark Mode
Mengubah tampilan website menjadi dark/light mode.

---

# 7. Kebutuhan Fungsional

| No | Kebutuhan |
|---|---|
| 1 | Sistem dapat menampilkan map kampus |
| 2 | Sistem dapat menampilkan marker lokasi |
| 3 | Sistem dapat memilih titik awal |
| 4 | Sistem dapat memilih titik tujuan |
| 5 | Sistem dapat menghitung shortest path |
| 6 | Sistem dapat menampilkan route nyata |
| 7 | Sistem dapat menampilkan estimasi waktu |
| 8 | Sistem dapat menampilkan estimasi jarak |
| 9 | Sistem dapat reset route |
| 10 | Sistem dapat berjalan responsive |

---

# 8. Kebutuhan Non-Fungsional

## Performance
- Website ringan
- Loading cepat

## Usability
- Mudah digunakan
- Interface modern

## Compatibility
- Desktop
- Mobile
- Tablet

## Security
- Tidak membutuhkan login
- Tidak menyimpan data pengguna

---

# 9. Data Lokasi Kampus

## Koordinat Lokasi

```javascript
const locations = {
    "Gerbang Utama UNIB": [-3.760524, 102.272609], 
    "Gerbang UNIB Depan": [-3.759400, 102.267500], 
    "Gerbang UNIB Belakang": [-3.759000, 102.277800], 
    
    "Rektorat UNIB": [-3.758870, 102.272299], 
    "Perpustakaan UNIB": [-3.756857, 102.274804], 
    "Masjid Baitul Hikmah UNIB": [-3.758990, 102.275947],
    "Masjid Darul Ulum UNIB": [-3.757326, 102.267626], 
    "Gedung Unit Layanan Terpadu": [-3.757995, 102.271966], 
    "Gedung Serba Guna Universitas Bengkulu": [-3.757673, 102.276573], 
    "Gedung PKM UNIB": [-3.756462, 102.275811], 
    "Fakultas Teknik": [-3.758514, 102.276685], 
    "Fakultas MIPA": [-3.755963, 102.274772], 
    "Fakultas Hukum": [-3.760498, 102.268424], 
    "Fakultas Pertanian": [-3.759333, 102.269234], 
    "Fakultas Ekonomi dan Bisnis": [-3.761707, 102.268609], 
    "Fakultas Kedokteran": [-3.755077, 102.278004], 
    "Fakultas Keguruan (FKIP)": [-3.756321, 102.277481], 
    "Fakultas ISIP": [-3.758932, 102.274123]
};
```

---

# 10. Konsep Artificial Intelligence

Project menggunakan konsep:
## Shortest Path Problem

Algoritma yang digunakan:
- A*
atau
- Dijkstra

Algoritma digunakan untuk:
- menentukan jalur tercepat,
- menghitung efisiensi rute,
- mensimulasikan sistem navigasi cerdas.

---

# 11. Alur Sistem

```text
User memilih lokasi
        ↓
Sistem membaca koordinat
        ↓
Algoritma shortest path berjalan
        ↓
Routing Machine mencari jalur nyata
        ↓
Map menampilkan route
        ↓
Sistem menampilkan jarak dan waktu
```

---

# 12. Flowchart Sistem

```text
Start
 ↓
Pilih Lokasi Awal
 ↓
Pilih Lokasi Tujuan
 ↓
Klik Cari Jalur
 ↓
Proses Shortest Path
 ↓
Generate Route
 ↓
Tampilkan Route pada Map
 ↓
Tampilkan Jarak & Waktu
 ↓
Finish
```

---

# 13. Desain UI/UX

## Konsep Design
- Modern
- Minimalist
- Futuristic
- Glassmorphism
- Responsive

## Warna
- Biru
- Putih
- Neon Accent

---

# 14. Struktur Project

```text
UNIB-PathFinder/
│
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── icons/
│   └── images/
```

---

# 15. Target Hasil Akhir

Website mampu:
- Menampilkan peta nyata UNIB
- Menampilkan route jalan asli
- Menghitung shortest path
- Memberikan pengalaman seperti mini Google Maps kampus
- Menjadi prototype Smart Campus berbasis AI

---

# 16. Pengembangan Selanjutnya

## Future Development
- Login user
- Database lokasi kampus
- Real-time traffic kampus
- AI rekomendasi jalur
- Voice navigation
- Mobile app version
- Integrasi GPS real-time
- Crowdsourced reporting

---

# 17. Kesimpulan

UNIB PathFinder merupakan sistem navigasi kampus berbasis web yang memanfaatkan teknologi pemetaan digital dan algoritma Artificial Intelligence untuk membantu pengguna menemukan jalur tercepat di area Universitas Bengkulu secara efisien dan interaktif.

Sistem ini diharapkan dapat menjadi langkah awal menuju implementasi Smart Campus di Universitas Bengkulu.

