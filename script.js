// ============================================================
//  UNIB PathFinder
//  Map: Leaflet + OSRM  |  AI: A* Pathfinding
// ============================================================

// ── 1. Lokasi Kampus ────────────────────────────────────────
const locations = {
    gerbang_utama: {
        coords: [-3.760524, 102.272609],
        name: "Gerbang Utama UNIB",
        category: "gerbang",
        desc: "Pintu masuk utama Universitas Bengkulu",
        img: "image/gerbang-utama-unib.jpg"
    },
    gerbang_masuk_blkng: {
        coords: [-3.7596055589595068, 102.27521254201437],
        name: "Gerbang Masuk UNIB Belakang",
        category: "gerbang",
        desc: "Pintu masuk bagian belakang kampus",
        img: null
    },
    gerbang_keluar_blkng: {
        coords: [-3.7593853961113117, 102.27622005663032],
        name: "Gerbang Keluar UNIB Belakang",
        category: "gerbang",
        desc: "Pintu keluar bagian belakang kampus",
        img: null
    },
    gerbang_masuk_depan: {
        coords: [-3.7599429243928197, 102.26711028572761],
        name: "Gerbang Masuk UNIB Depan",
        category: "gerbang",
        desc: "Pintu masuk bagian depan kampus",
        img: null
    },
    gerbang_keluar_depan: {
        coords: [-3.7591367080259763, 102.26693959099283],
        name: "Gerbang Keluar UNIB Depan",
        category: "gerbang",
        desc: "Pintu keluar bagian depan kampus",
        img: null
    },
    rektorat: {
        coords: [-3.758870, 102.272299],
        name: "Rektorat UNIB",
        category: "akademik",
        desc: "Pusat administrasi Universitas Bengkulu",
        img: "image/rektorat-unib.jpg"
    },
    glt: {
        coords: [-3.757995, 102.271966],
        name: "Gedung Layanan Terpadu (GLT)",
        category: "akademik",
        desc: "Pusat layanan akademik mahasiswa UNIB",
        img: "image/glt-unib.jpg"
    },
    gsg: {
        coords: [-3.757673, 102.276573],
        name: "Gedung Serba Guna",
        category: "fasilitas",
        desc: "Gedung serba guna untuk acara kampus",
        img: "image/gsg-unib.jpg"
    },
    ftek: {
        coords: [-3.758514, 102.276685],
        name: "Fakultas Teknik",
        category: "akademik",
        desc: "Teknik Sipil, Mesin & Elektro UNIB",
        img: "image/FT.jpg"
    },
    fmipa: {
        coords: [-3.755963, 102.274772],
        name: "Fakultas MIPA",
        category: "akademik",
        desc: "Matematika & Ilmu Pengetahuan Alam",
        img: "image/FMIPA.jpg"
    },
    fhukum: {
        coords: [-3.760498, 102.268424],
        name: "Fakultas Hukum",
        category: "akademik",
        desc: "Fakultas Hukum UNIB",
        img: "image/hukum.jpg"
    },
    fpertanian: {
        coords: [-3.759333, 102.269234],
        name: "Fakultas Pertanian",
        category: "akademik",
        desc: "Fakultas Pertanian UNIB",
        img: "image/pertanian.jpg"
    },
    fekon: {
        coords: [-3.761707, 102.268609],
        name: "Fakultas Ekonomi & Bisnis",
        category: "akademik",
        desc: "Manajemen, Akuntansi & Ekonomi Pembangunan",
        img: "image/FEB.jpg"
    },
    fkip: {
        coords: [-3.756321, 102.277481],
        name: "Fakultas FKIP",
        category: "akademik",
        desc: "Keguruan & Ilmu Pendidikan UNIB",
        img: "image/FKIP.jpg"
    },
    fisip: {
        coords: [-3.758932, 102.274123],
        name: "Fakultas ISIP",
        category: "akademik",
        desc: "Ilmu Sosial & Ilmu Politik UNIB",
        img: "image/FISIP.jpg"
    },
    fkedokteran: {
        coords: [-3.755077, 102.278004],
        name: "Fakultas Kedokteran",
        category: "akademik",
        desc: "Kedokteran & Ilmu Kesehatan UNIB",
        img: "image/FK.jpg"
    },
    perpustakaan: {
        coords: [-3.756857, 102.274804],
        name: "Perpustakaan UNIB",
        category: "fasilitas",
        desc: "Perpustakaan pusat UNIB",
        img: "image/perpus-unib.jpg"
    },
    pkm: {
        coords: [-3.756462, 102.275811],
        name: "Gedung PKM",
        category: "fasilitas",
        desc: "Pusat Kegiatan Mahasiswa",
        img: "image/pkm-unib.jpg"
    },
    masjid_baitul: {
        coords: [-3.758990, 102.275947],
        name: "Masjid Baitul Hikmah",
        category: "ibadah",
        desc: "Masjid kampus area tengah-timur UNIB",
        img: "image/masjid-bahi-unib.jpg"
    },
    masjid_darul: {
        coords: [-3.757326, 102.267626],
        name: "Masjid Darul Ulum",
        category: "ibadah",
        desc: "Masjid kampus area barat UNIB",
        img: "image/masjid-DU-unib.jpg"
    },
    // Lokasi Baru
    taman_danau: {
        coords: [-3.7599722581629127, 102.27365115700027],
        name: "Taman Danau Universitas Bengkulu",
        category: "layanan",
        desc: "Area taman rekreasi di sekitar danau UNIB.",
        img: "image/taman-danau.jpg"
    },
    danau_unib: {
        coords: [-3.7584148380565368, 102.27310082477896],
        name: "Danau UNIB",
        category: "layanan",
        desc: "Danau inspirasi di tengah kampus UNIB.",
        img: "image/danau-unib.jpg"
    },
    klinik: {
        coords: [-3.761468510094025, 102.27177683005613],
        name: "Klinik Pratama UBMC",
        category: "kesehatan",
        desc: "Universitas Bengkulu Medical Center.",
        img: "image/klinik-unib.jpg"
    },
    bank_bni: {
        coords: [-3.7615370626224536, 102.27177439726404],
        name: "Bank BNI",
        category: "layanan",
        desc: "Layanan perbankan di area kampus.",
        img: "image/bank-bni.jpg"
    },
    gor: {
        coords: [-3.760713792691936, 102.26752813253334],
        name: "GOR UNIB",
        category: "olahraga",
        desc: "Gedung Olahraga Universitas Bengkulu.",
        img: "image/gor-unib.jpg"
    },
    mushola_shelter: {
        coords: [-3.757766073646613, 102.2736099352642],
        name: "Mushola Shelter UNIB",
        category: "ibadah",
        desc: "Tempat ibadah di area shelter.",
        img: "image/mushola.jpg"
    },
    stadion: {
        coords: [-3.757582999556738, 102.27818203771456],
        name: "Stadion UNIB",
        category: "olahraga",
        desc: "Stadion olahraga utama Universitas Bengkulu.",
        img: "image/stadion.jpg"
    },
    lptik: {
        coords: [-3.7585383153422036, 102.27500565780815],
        name: "LPTIK",
        category: "akademik",
        desc: "Lembaga Pengembangan Teknologi Informasi dan Komunikasi.",
        img: "image/LPTIK.jpg"
    },
    lab_terpadu_teknik: {
        coords: [-3.7585047502785196, 102.2773598484967],
        name: "Lab Terpadu Teknik",
        category: "akademik",
        desc: "Laboratorium Terpadu Teknik Universitas Bengkulu.",
        img: "image/lab-terpadu.png"
    },
    universitas_bengkulu: {
        coords: [-3.759433407532962, 102.27234575096696],
        name: "Universitas Bengkulu",
        category: "akademik",
        desc: "Titik pusat Universitas Bengkulu.",
        img: "image/unib.jpg"
    }
};

const catColor = {
    gerbang:   "#16a34a", // Hijau
    akademik:  "#2563eb", // Biru
    fasilitas: "#d97706", // Oranye
    ibadah:    "#dc2626", // Merah
    olahraga:  "#ec4899", // Pink
    kesehatan: "#14b8a6", // Teal
    layanan:   "#8b5cf6", // Ungu
};

const CENTER = [-3.7581, 102.2734];
const ZOOM   = 15;

// ── 2. Graf Kampus (untuk A*) ───────────────────────────────
const graph = {
    gerbang_utama:       { gerbang_masuk_depan:550, gerbang_masuk_blkng:520, rektorat:250, fhukum:520, fpertanian:420, universitas_bengkulu:300 },
    gerbang_masuk_blkng: { gerbang_utama:520, gerbang_keluar_blkng:120, ftek:200, masjid_baitul:300, fkip:280 },
    gerbang_keluar_blkng:{ gerbang_masuk_blkng:120, ftek:150, fkip:250, stadion:400 },
    gerbang_masuk_depan: { gerbang_utama:550, gerbang_keluar_depan:50, fhukum:110, fpertanian:200, fekon:280, masjid_darul:240, gor:200 },
    gerbang_keluar_depan:{ gerbang_masuk_depan:50, fhukum:130, fekon:300, fpertanian:220 },
    rektorat:            { gerbang_utama:250, glt:100, fisip:250, perpustakaan:280, universitas_bengkulu:150, danau_unib:120 },
    glt:                 { rektorat:100, gerbang_utama:320, fhukum:480, perpustakaan:300, lptik:200 },
    gsg:                 { ftek:350, masjid_baitul:150, perpustakaan:260, fkip:180, lptik:300 },
    ftek:                { gerbang_masuk_blkng:200, gerbang_keluar_blkng:150, masjid_baitul:230, gsg:350, fisip:320, lab_terpadu_teknik:100 },
    fmipa:               { perpustakaan:200, pkm:150, fkip:300, fkedokteran:350, mushola_shelter:100 },
    fhukum:              { gerbang_utama:520, gerbang_masuk_depan:110, gerbang_keluar_depan:130, fpertanian:120, fekon:220, glt:480, klinik:100, bank_bni:100 },
    fpertanian:          { gerbang_utama:420, gerbang_masuk_depan:200, gerbang_keluar_depan:220, fhukum:120, fekon:300, taman_danau:300 },
    fekon:               { gerbang_masuk_depan:280, gerbang_keluar_depan:300, fhukum:220, fpertanian:300, masjid_darul:380, klinik:200 },
    fkip:                { gerbang_masuk_blkng:280, gerbang_keluar_blkng:250, gsg:180, fmipa:300, fkedokteran:240, pkm:220, stadion:250 },
    fisip:               { rektorat:250, ftek:320, masjid_baitul:200, lptik:150, lab_terpadu_teknik:250, mushola_shelter:150, taman_danau:150 },
    fkedokteran:         { fmipa:350, fkip:240, pkm:200, stadion:350 },
    perpustakaan:        { rektorat:280, glt:300, fmipa:200, gsg:260, pkm:170, mushola_shelter:150 },
    pkm:                 { perpustakaan:170, fmipa:150, fkip:220, fkedokteran:200, mushola_shelter:180 },
    masjid_baitul:       { gerbang_masuk_blkng:300, ftek:230, gsg:150, fisip:200, lptik:220 },
    masjid_darul:        { gerbang_masuk_depan:240, fekon:380, gor:250 },
    // Graph connection nodes baru:
    taman_danau:         { fpertanian:300, fisip:150 },
    danau_unib:          { rektorat:120, universitas_bengkulu:150, mushola_shelter:100 },
    klinik:              { fhukum:100, fekon:200, bank_bni:20 },
    bank_bni:            { fhukum:100, klinik:20 },
    gor:                 { gerbang_masuk_depan:200, masjid_darul:250 },
    mushola_shelter:     { danau_unib:100, perpustakaan:150, pkm:180, fmipa:100, fisip:150 },
    stadion:             { fkip:250, fkedokteran:350, gerbang_keluar_blkng:400 },
    lptik:               { fisip:150, glt:200, gsg:300, masjid_baitul:220 },
    lab_terpadu_teknik:  { ftek:100, fisip:250 },
    universitas_bengkulu:{ rektorat:150, danau_unib:150, gerbang_utama:300 }
};

// ── 3. Map ──────────────────────────────────────────────────
const map = L.map('map', { zoomControl: false }).setView(CENTER, ZOOM);
L.control.zoom({ position: 'bottomright' }).addTo(map);

const tileLight = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, attribution: '© OpenStreetMap'
});
const tileDark = L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    { maxZoom: 19, attribution: '© CartoDB', subdomains: 'abcd' }
);

let isDark = false;
let tile   = tileLight;
tile.addTo(map);

// ── 4. Gate Status System ───────────────────────────────────
// activeFilter & markerMap dideklarasikan di sini agar tersedia sejak awal
let activeFilter = '';
let markerMap    = {};   // diisi nanti saat marker dibuat

const BACK_GATES  = ['gerbang_masuk_blkng', 'gerbang_keluar_blkng'];
const FRONT_GATES = ['gerbang_utama', 'gerbang_masuk_depan', 'gerbang_keluar_depan'];
const ALL_GATES   = [...BACK_GATES, ...FRONT_GATES];

function getGateStatus() {
    const now  = new Date();
    const day  = now.getDay();                         // 0=Min, 1=Sen..5=Jum, 6=Sab
    const h    = now.getHours() + now.getMinutes() / 60;
    const isWorkday  = day >= 1 && day <= 5;
    const isWorkHour = h >= 6 && h < 18;
    const isBelow22  = h >= 6 && h < 22;              // Gerbang belakang buka s/d 22.00

    if (isWorkday && isWorkHour) {
        return { mode: 'open',    openGates: ALL_GATES,  label: 'Jam Kerja — Semua Gerbang Buka' };
    } else if (isBelow22) {
        return { mode: 'limited', openGates: BACK_GATES, label: 'Di Luar Jam Kerja — Gerbang Belakang Saja' };
    } else {
        return { mode: 'closed',  openGates: [],          label: 'Semua Gerbang Tutup' };
    }
}

function buildActiveGraph() {
    const { openGates } = getGateStatus();
    const closedGates   = ALL_GATES.filter(g => !openGates.includes(g));
    const active = {};
    for (const [node, edges] of Object.entries(graph)) {
        if (closedGates.includes(node)) continue;
        active[node] = {};
        for (const [nb, w] of Object.entries(edges)) {
            if (closedGates.includes(nb)) continue;
            active[node][nb] = w;
        }
    }
    return active;
}

function updateGateUI() {
    const { mode, label } = getGateStatus();
    const dot  = document.getElementById('statusDot');
    const text = document.getElementById('statusText');
    const clk  = document.getElementById('statusClock');
    const now  = new Date();
    const hh   = String(now.getHours()).padStart(2, '0');
    const mm   = String(now.getMinutes()).padStart(2, '0');
    const days = ['Min','Sen','Sel','Rab','Kam','Jum','Sab'];

    dot.className    = 'gate-dot ' + mode;
    text.textContent = label;
    clk.textContent  = `${days[now.getDay()]} ${hh}:${mm}`;

    // Perbarui ikon gerbang + semua visibility
    updateAllMarkers();
}

// Prioritas zoom per lokasi
// P1 (zoom 13+) : Titik pusat universitas (Universitas Bengkulu)
// P2 (zoom 14+) : Landmark utama + Gerbang utama
// P3 (zoom 15+) : Gerbang lain + fakultas besar — tampil di zoom normal
// P4 (zoom 16+) : Gedung kecil / fasilitas — hanya saat zoom dekat
const markerPriority = {
    // P1 — paling jauh
    universitas_bengkulu: 1,
    
    // P2 — zoom 14+
    gerbang_utama:       2,
    rektorat:            2,
    
    // P3 — zoom 15+
    gerbang_masuk_blkng: 3,
    gerbang_keluar_blkng:3,
    gerbang_masuk_depan: 3,
    gerbang_keluar_depan:3,
    ftek:    3,
    fmipa:   3,
    fhukum:  3,
    fekon:   3,
    fkip:    3,
    fisip:   3,
    
    // P4 — zoom 16+
    glt:          4,
    gsg:          4,
    fpertanian:   4,
    fkedokteran:  4,
    perpustakaan: 4,
    pkm:          4,
    masjid_baitul:4,
    masjid_darul: 4,
    taman_danau:  4,
    danau_unib:   4,
    klinik:       4,
    bank_bni:     4,
    gor:          4,
    mushola_shelter: 4,
    stadion:      4,
    lptik:        4,
    lab_terpadu_teknik: 4
};

function zoomThreshold(priority) {
    if (priority === 1) return 13;
    if (priority === 2) return 14;
    if (priority === 3) return 15;
    return 16;
}

function updateAllMarkers() {
    // Guard: lewati jika marker belum dibuat
    if (!Object.keys(markerMap).length) return;

    const zoom = map.getZoom();
    const { openGates } = getGateStatus();

    Object.entries(markerMap).forEach(([key, marker]) => {
        const loc      = locations[key];
        const priority = markerPriority[key] || 3;
        const catMatch = activeFilter === '' || loc.category === activeFilter;
        const zoomOK   = zoom >= zoomThreshold(priority);

        // Perbarui ikon gerbang (abu-abu jika tutup)
        if (loc.category === 'gerbang') {
            const isOpen = openGates.includes(key);
            marker.setIcon(makeIcon(loc.category, isOpen));
            marker.setPopupContent(makePopup(loc, key, isOpen));
        }

        if (catMatch && zoomOK) {
            if (!map.hasLayer(marker)) marker.addTo(map);
        } else {
            if (map.hasLayer(marker)) marker.remove();
        }
    });
}

// ── 5. Markers ──────────────────────────────────────────────

// Ikon Font Awesome per kategori (untuk dropdown)
const catIcon = {
    gerbang:   'fa-archway',
    akademik:  'fa-graduation-cap',
    fasilitas: 'fa-building',
    ibadah:    'fa-mosque',
};

function makeIcon(cat, isOpen = true) {
    const color = isOpen ? (catColor[cat] || '#2563eb') : '#b0b0b0';
    const icon  = catIcon[cat] || 'fa-location-dot';
    const cls   = isOpen ? '' : 'pin-closed';
    return L.divIcon({
        html: `<div class="map-pin-wrap ${cls}">
                 <div class="map-pin-circle" style="background:${color}">
                   <i class="fa-solid ${icon}"></i>
                 </div>
                 <div class="map-pin-tip" style="border-top-color:${color}"></div>
               </div>`,
        className: 'custom-marker',
        iconSize:   [28, 38],
        iconAnchor: [14, 38],
        popupAnchor:[0, -40],
    });
}

function makePopup(loc, key, isOpen = true) {
    const imgTag = loc.img
        ? `<img class="popup-img" src="${loc.img}" alt="${loc.name}" onerror="this.style.display='none'">`
        : '';
    const catLabel = { gerbang:'Gerbang', akademik:'Akademik', fasilitas:'Fasilitas', ibadah:'Ibadah' }[loc.category] || '';
    const gateTag  = loc.category === 'gerbang'
        ? `<span class="popup-gate ${isOpen ? 'gate-open' : 'gate-closed'}">
             <i class="fa-solid fa-circle" style="font-size:5px"></i>
             ${isOpen ? 'Buka' : 'Tutup'}
           </span>`
        : '';
    return `${imgTag}
      <div class="popup-body">
        <div class="popup-name">${loc.name}</div>
        <div class="popup-meta">${catLabel}${gateTag}</div>
        <div class="popup-desc">${loc.desc}</div>
        <div class="popup-actions">
          <button class="popup-btn popup-btn-start" data-key="${key}">
            <i class="fa-solid fa-circle-dot"></i> Titik Awal
          </button>
          <button class="popup-btn popup-btn-end" data-key="${key}">
            <i class="fa-solid fa-location-pin"></i> Tujuan
          </button>
        </div>
      </div>`;
}

// Helper: set lokasi dari tombol popup
function setLocation(type, key) {
    if (type === 'start') {
        document.getElementById('startNode').value   = key;
        document.getElementById('startSearch').value = locations[key].name;
        document.getElementById('clearStart').classList.remove('hidden');
        toast('Titik awal: ' + locations[key].name);
    } else {
        document.getElementById('endNode').value   = key;
        document.getElementById('endSearch').value = locations[key].name;
        document.getElementById('clearEnd').classList.remove('hidden');
        toast('Tujuan: ' + locations[key].name);
    }
}

let popupCloseTimer = null;

Object.entries(locations).forEach(([key, loc]) => {
    const marker = L.marker(loc.coords, {
        icon: makeIcon(loc.category, true),
        title: loc.name,
    })
    .addTo(map)
    .bindPopup(makePopup(loc, key, true), { maxWidth: 260, autoPan: false, closeButton: false });

    marker.on('mouseover', function() {
        clearTimeout(popupCloseTimer);
        this.openPopup();
    });
    marker.on('mouseout', function() {
        const self = this;
        popupCloseTimer = setTimeout(() => self.closePopup(), 350);
    });
    marker.on('click', function() {
        clearTimeout(popupCloseTimer);
        this.openPopup();
    });

    markerMap[key] = marker;
});

// Hover konten popup → batalkan close
map.on('popupopen', e => {
    const el = e.popup.getElement();
    if (!el) return;
    el.addEventListener('mouseenter', () => clearTimeout(popupCloseTimer));
    el.addEventListener('mouseleave', () => {
        popupCloseTimer = setTimeout(() => e.popup._source?.closePopup(), 350);
    });
    el.querySelector('.popup-btn-start')?.addEventListener('click', ev => {
        ev.stopPropagation();
        setLocation('start', ev.currentTarget.dataset.key);
        e.popup._source?.closePopup();
    });
    el.querySelector('.popup-btn-end')?.addEventListener('click', ev => {
        ev.stopPropagation();
        setLocation('end', ev.currentTarget.dataset.key);
        e.popup._source?.closePopup();
    });
});

// Jalankan status awal, zoom listener & update tiap menit
updateAllMarkers();
map.on('zoomend', updateAllMarkers);
updateGateUI();
setInterval(updateGateUI, 60000);

// ── Transport Mode ───────────────────────────────────────────────
let currentProfile = 'foot';

document.querySelectorAll('.transport-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.transport-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentProfile = btn.dataset.profile;
    });
});

// ── 5. OSRM Routing ─────────────────────────────────────────
const routing = L.Routing.control({
    waypoints: [],
    routeWhileDragging: false,
    router: L.Routing.osrmv1({
        serviceUrl: 'https://router.project-osrm.org/route/v1',
        profile: 'foot',
    }),
    lineOptions: {
        styles: [
            { color: '#93c5fd', opacity: 0.4, weight: 8 },
            { color: '#2563eb', opacity: 1,   weight: 3 },
        ],
        addWaypoints: false,
    },
    createMarker: () => null,
    show: false,
    fitSelectedRoutes: false,
}).addTo(map);

// ── 7. Search Dropdown ──────────────────────────────────────
const locList = Object.entries(locations).map(([key, v]) => ({ key, ...v }));

function openDropdown(inputId, dropdownId) {
    const input = document.getElementById(inputId);
    const dd    = document.getElementById(dropdownId);
    const term  = input.value.trim().toLowerCase();
    const { openGates } = getGateStatus();

    // Filter: teks + kategori + gerbang tutup TIDAK tampil
    const items = locList.filter(l => {
        const matchText = l.name.toLowerCase().includes(term);
        const matchCat  = activeFilter === '' || l.category === activeFilter;
        const isClosed  = ALL_GATES.includes(l.key) && !openGates.includes(l.key);
        return matchText && matchCat && !isClosed;
    });

    if (!items.length) {
        dd.innerHTML = `<div class="dd-empty">Tidak ditemukan</div>`;
    } else {
        dd.innerHTML = items.map(loc => {
            const c    = catColor[loc.category] || '#2563eb';
            const icon = catIcon[loc.category]  || 'fa-location-dot';
            const hl   = term
                ? loc.name.replace(new RegExp(`(${term})`, 'gi'), '<b style="color:var(--primary)">$1</b>')
                : loc.name;
            return `<div class="dd-item" data-key="${loc.key}">
                <span class="dd-icon" style="background:${c}">
                  <i class="fa-solid ${icon}"></i>
                </span>
                <div>
                  <div class="dd-name">${hl}</div>
                  <div class="dd-cat">${loc.category}</div>
                </div>
              </div>`;
        }).join('');
    }
    dd.classList.add('open');

    dd.querySelectorAll('.dd-item').forEach(item => {
        item.addEventListener('click', () => {
            const key    = item.dataset.key;
            const hidden = inputId === 'startSearch' ? 'startNode' : 'endNode';
            const clearId= inputId === 'startSearch' ? 'clearStart' : 'clearEnd';
            document.getElementById(hidden).value  = key;
            document.getElementById(inputId).value = locations[key].name;
            document.getElementById(clearId).classList.remove('hidden');
            dd.classList.remove('open');
            map.panTo(locations[key].coords);
            clearTimeout(popupCloseTimer);
            markerMap[key]?.openPopup();
        });
    });
}

// ── 7. Filter Chip Logic ─────────────────────────────────────
document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
        if (chip.classList.contains('active') && chip.dataset.cat !== '') {
            activeFilter = '';
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            document.querySelector('.chip[data-cat=""]').classList.add('active');
        } else {
            activeFilter = chip.dataset.cat;
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
        }

        // Perbarui marker di peta (zoom + filter + gate status)
        updateAllMarkers();

        // Refresh dropdown yang terbuka
        if (document.getElementById('startDropdown').classList.contains('open'))
            openDropdown('startSearch', 'startDropdown');
        if (document.getElementById('endDropdown').classList.contains('open'))
            openDropdown('endSearch', 'endDropdown');
    });
});

['startSearch', 'endSearch'].forEach(id => {
    const input = document.getElementById(id);
    const ddId  = id === 'startSearch' ? 'startDropdown' : 'endDropdown';
    input.addEventListener('focus', () => openDropdown(id, ddId));
    input.addEventListener('input', () => openDropdown(id, ddId));
});

// ── Clear Button Logic ───────────────────────────────────────
function setupClear(inputId, clearBtnId, hiddenId) {
    const input    = document.getElementById(inputId);
    const clearBtn = document.getElementById(clearBtnId);

    function syncBtn() {
        clearBtn.classList.toggle('hidden', input.value.trim() === '');
    }

    input.addEventListener('input', syncBtn);
    input.addEventListener('focus', syncBtn);

    clearBtn.addEventListener('click', () => {
        input.value = '';
        document.getElementById(hiddenId).value = '';
        clearBtn.classList.add('hidden');
        input.focus();
        // Buka dropdown lagi setelah dikosongkan
        const ddId = inputId === 'startSearch' ? 'startDropdown' : 'endDropdown';
        openDropdown(inputId, ddId);
    });
}

setupClear('startSearch', 'clearStart', 'startNode');
setupClear('endSearch',   'clearEnd',   'endNode');

document.addEventListener('click', e => {
    ['startSearch','endSearch'].forEach(id => {
        const ddId = id === 'startSearch' ? 'startDropdown' : 'endDropdown';
        const dd   = document.getElementById(ddId);
        if (!document.getElementById(id).contains(e.target) && !dd.contains(e.target)) {
            dd.classList.remove('open');
        }
    });
});

// ── 7. Swap ─────────────────────────────────────────────────
document.getElementById('btnSwap').addEventListener('click', () => {
    const sH = document.getElementById('startNode');
    const eH = document.getElementById('endNode');
    const sI = document.getElementById('startSearch');
    const eI = document.getElementById('endSearch');
    [sH.value, eH.value] = [eH.value, sH.value];
    [sI.value, eI.value] = [eI.value, sI.value];
});

// ── 9. A* Algorithm ─────────────────────────────────────────
function heuristic(a, b) {
    const [la, lo]  = locations[a]?.coords || [0, 0];
    const [lb, lb2] = locations[b]?.coords || [0, 0];
    const dy = (lb  - la)  * 111111;
    const dx = (lb2 - lo)  * 111111 * Math.cos(la * Math.PI / 180);
    return Math.sqrt(dx * dx + dy * dy);
}

function astar(start, end, activeGraph) {
    const g = {}, f = {}, prev = {};
    const open   = new Set(Object.keys(activeGraph));
    const closed = new Set();
    for (const n of open) { g[n] = Infinity; f[n] = Infinity; prev[n] = null; }
    g[start] = 0; f[start] = heuristic(start, end);

    while (open.size) {
        let cur = null;
        for (const n of open) {
            if (!closed.has(n) && (cur === null || f[n] < f[cur])) cur = n;
        }
        if (!cur || f[cur] === Infinity || cur === end) break;
        open.delete(cur); closed.add(cur);
        for (const [nb, w] of Object.entries(activeGraph[cur] || {})) {
            if (closed.has(nb)) continue;
            const tg = g[cur] + w;
            if (tg < g[nb]) {
                prev[nb] = cur; g[nb] = tg;
                f[nb] = tg + heuristic(nb, end);
                open.add(nb);
            }
        }
    }
    const path = []; let c = end;
    while (c) { path.unshift(c); c = prev[c]; }
    return { path, distance: g[end], reachable: g[end] !== Infinity };
}

// ── 10. Find Route ───────────────────────────────────────────
const overlay   = document.getElementById('loadingOverlay');
const cardRoute = document.getElementById('routeInfo');
const cardAI    = document.getElementById('aiResult');

// Simpan GPS coords kalau user pilih "dari sini"
let gpsLatLng = null;

document.getElementById('btnFindRoute').addEventListener('click', () => {
    const sk = document.getElementById('startNode').value;
    const ek = document.getElementById('endNode').value;
    const startIsGPS = sk === '__gps__';

    if (!sk || !ek)  { toast('Pilih lokasi awal dan tujuan'); return; }
    if (!startIsGPS && sk === ek) { toast('Lokasi tidak boleh sama'); return; }

    const { openGates, mode } = getGateStatus();

    // Validasi gerbang start/end
    if (!startIsGPS && ALL_GATES.includes(sk) && !openGates.includes(sk)) {
        toast('Gerbang asal sedang tutup! Pilih gerbang lain.'); return;
    }
    if (ALL_GATES.includes(ek) && !openGates.includes(ek)) {
        toast('Gerbang tujuan sedang tutup! Pilih gerbang lain.'); return;
    }

    // Blokir GPS masuk kampus kalau semua gerbang tutup
    if (startIsGPS && mode === 'closed') {
        toast('Semua gerbang tutup (>22.00). Tidak dapat masuk kampus.'); return;
    }

    let astarResult = null;
    // A* hanya untuk rute antar lokasi kampus (bukan GPS)
    if (!startIsGPS) {
        const activeGraph = buildActiveGraph();
        if (!activeGraph[sk]) {
            toast('Titik awal tidak dapat dijangkau saat ini.'); return;
        }
        if (!activeGraph[ek]) {
            toast('Tujuan tidak dapat dijangkau saat ini.'); return;
        }
        astarResult = astar(sk, ek, activeGraph);
        if (!astarResult.reachable) {
            toast('Tidak ada jalur yang tersedia saat ini.'); return;
        }
        showAIResult(astarResult);
    }

    // Peta kendaraan ke profil OSRM untuk membedakan jalur
    // Motor pakai 'bike' agar bisa lewat jalur kecil/gang (seperti realita di kampus)
    // Mobil pakai 'driving' agar tetap di jalan utama
    let osrmProfile = 'foot';
    if (currentProfile === 'car') osrmProfile = 'driving';
    else if (currentProfile === 'motor') osrmProfile = 'bike';
    else if (currentProfile === 'bike') osrmProfile = 'bike';
    
    // Update router sesuai moda kendaraan
    routing.options.router = L.Routing.osrmv1({
        serviceUrl: 'https://router.project-osrm.org/route/v1',
        profile: osrmProfile,
    });

    // Bangun waypoints 
    let waypoints = [];
    if (startIsGPS && gpsLatLng) {
        waypoints.push(gpsLatLng);
        if (mode === 'limited') {
            // Paksa OSRM lewat gerbang masuk belakang agar tidak lewat gerbang depan
            waypoints.push(L.latLng(...locations['gerbang_masuk_blkng'].coords));
        }
        waypoints.push(L.latLng(...locations[ek].coords));
    } else if (astarResult && astarResult.path) {
        // Solusi Error Garis Biru Zig-Zag: 
        // Jangan masukkan semua titik gedung ke OSRM karena koordinat gedung 
        // seringkali tidak persis di atas jalan, menyebabkan garis bolak-balik (zig-zag).
        // Cukup berikan titik awal dan akhir, OSRM akan mencari jalan aspal termulus.
        const path = astarResult.path;
        waypoints = [
            L.latLng(...locations[path[0]].coords),
            L.latLng(...locations[path[path.length - 1]].coords)
        ];
    }

    overlay.classList.remove('hidden');
    cardRoute.classList.add('hidden');
    cardAI.classList.add('hidden');
    routing.setWaypoints(waypoints);
});

function showAIResult(result) {
    const pathEl = document.getElementById('aiPathDisplay');
    const distEl = document.getElementById('aiDistDisplay');

    pathEl.innerHTML = result.path.map((key, i) => {
        const name  = locations[key]?.name || key;
        const color = catColor[locations[key]?.category] || '#2563eb';
        const arrow = i < result.path.length - 1
            ? '<span class="node-arrow">›</span>'
            : '';
        return `<span class="node-name" style="color:${color}">${name}</span>${arrow}`;
    }).join('');

    distEl.textContent = result.distance !== Infinity
        ? `Estimasi jarak graf: ~${result.distance} m  •  ${result.path.length} titik`
        : 'Jarak tidak diketahui';
}

routing.on('routesfound', e => {
    overlay.classList.add('hidden');
    const s   = e.routes[0].summary;
    const km  = (s.totalDistance / 1000).toFixed(2);
    
    // Hitung waktu manual (kecepatan rata-rata di kampus dalam m/s)
    let speed = 1.2; // Jalan Kaki: ~4.3 km/h
    if (currentProfile === 'bike') speed = 3.5; // Sepeda: ~12.6 km/h
    if (currentProfile === 'motor') speed = 6.5; // Motor: ~23.4 km/h (paling lincah)
    if (currentProfile === 'car') speed = 4.5; // Mobil: ~16.2 km/h (lambat karena polisi tidur/jalan sempit)
    
    const timeSeconds = s.totalDistance / speed;
    const min = Math.max(1, Math.round(timeSeconds / 60));
    document.getElementById('distValue').textContent = km + ' km';
    document.getElementById('timeValue').textContent = min + ' mnt';
    cardRoute.classList.remove('hidden');
    cardRoute.classList.add('fade-in');
    // Tampilkan panel A* jika ada hasil
    if (!cardAI.classList.contains('hidden') || document.getElementById('aiPathDisplay').innerHTML) {
        cardAI.classList.remove('hidden');
        cardAI.classList.add('fade-in');
    }
    map.fitBounds(L.latLngBounds(e.routes[0].coordinates), { padding: [50, 50] });
});

routing.on('routingerror', () => {
    overlay.classList.add('hidden');
    toast('Gagal mendapat rute. Coba lagi.');
});

// ── 10. Reset ────────────────────────────────────────────────
document.getElementById('btnReset').addEventListener('click', () => {
    routing.setWaypoints([]);
    ['startNode','endNode'].forEach(id => document.getElementById(id).value = '');
    ['startSearch','endSearch'].forEach(id => document.getElementById(id).value = '');
    ['clearStart','clearEnd'].forEach(id => document.getElementById(id).classList.add('hidden'));
    cardRoute.classList.add('hidden');
    cardAI.classList.add('hidden');
    // Reset GPS state
    gpsLatLng = null;
    if (gpsMarker) { gpsMarker.remove(); gpsMarker = null; }
    map.flyTo(CENTER, ZOOM, { duration: 1 });
});

// ── 11. GPS — Gunakan sebagai titik awal ──────────────────────
let gpsMarker = null;

document.getElementById('btnGPS').addEventListener('click', () => {
    if (!navigator.geolocation) { toast('GPS tidak didukung di browser ini'); return; }

    toast('Mencari lokasi Anda...');
    navigator.geolocation.getCurrentPosition(pos => {
        const { latitude: lat, longitude: lng, accuracy } = pos.coords;
        gpsLatLng = L.latLng(lat, lng);

        // Marker GPS di peta
        if (gpsMarker) gpsMarker.remove();
        gpsMarker = L.marker([lat, lng], {
            icon: L.divIcon({
                html: '<div class="gps-dot"></div>',
                className: '', iconSize:[14,14], iconAnchor:[7,7]
            })
        }).addTo(map)
          .bindPopup(`<b>Lokasi Anda</b><br><small>Akurasi ±${Math.round(accuracy)} m</small>`)
          .openPopup();

        // Isi field "Dari mana?" dengan label lokasi GPS
        document.getElementById('startNode').value   = '__gps__';
        document.getElementById('startSearch').value = '📍 Lokasi Saya';

        // Tampilkan tombol clear untuk startSearch
        document.getElementById('clearStart').classList.remove('hidden');

        map.flyTo([lat, lng], 17, { duration: 1 });
        toast('Lokasi ditemukan! Pilih tujuan lalu cari jalur.');
    }, err => {
        const msg = {
            1: 'Izin GPS ditolak. Aktifkan lokasi di browser.',
            2: 'Posisi tidak tersedia.',
            3: 'Waktu habis. Coba lagi.',
        }[err.code] || 'Gagal mendapat lokasi.';
        toast(msg);
    }, { enableHighAccuracy: true, timeout: 10000 });
});

// ── 12. Recenter ──────────────────────────────────────────────
document.getElementById('btnRecenter').addEventListener('click', () => {
    map.flyTo(CENTER, ZOOM, { duration: 1 });
});

// ── 12. Dark Mode ─────────────────────────────────────────────
document.getElementById('themeToggle').addEventListener('click', () => {
    isDark = !isDark;
    document.body.classList.toggle('dark', isDark);
    map.removeLayer(tile);
    tile = isDark ? tileDark : tileLight;
    tile.addTo(map);
    document.querySelector('#themeToggle i').className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
});

// ── 13. Toast ─────────────────────────────────────────────────
let toastEl = null, toastTimer = null;
function toast(msg) {
    if (!toastEl) {
        toastEl = document.createElement('div');
        toastEl.id = 'toast';
        document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2500);
}

// Close dropdown on map click
map.on('click', () => {
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
});
