# Millennia World School (MWS) — Mockup 3 Design Guidelines

Dokumen ini merupakan panduan utama (design guidelines) UI/UX untuk pengembangan halaman web Millennia World School (MWS). Seluruh aturan visual dan tata letak dalam panduan ini dirumuskan berdasarkan audit visual mendalam terhadap halaman `mockup3/client/index.html` dan file stylesheet `mockup3/styles/Styles.css`.

---

## 1. Color Palette & Background Texture

Sistem pewarnaan MWS dirancang untuk memberikan impresi sekolah internasional yang premium, hangat, berkarakter, dan berwawasan global.

### A. Palet Warna Utama (Variables)
| Nama Variabel | Kode Warna | Peran dalam Antarmuka |
| :--- | :--- | :--- |
| `--teal` | `#007a87` | **Primary Brand Color**: Digunakan untuk highlight penting, teks aktif pada kartu, border aksen atas, dan lencana kategori. |
| `--gold` | `#f4b41a` | **Accent Brand Color**: Digunakan untuk aksen garis, ikon, tag kategori sekunder, dan indikator navigasi aktif. |
| `--burgundy` | `#561c22` | **Secondary Action/Hover Color**: Digunakan untuk warna hover tombol utama (`btn-visit`), header panel chatbot, dan tautan menu ketika header dalam keadaan ter-scroll. |
| `--warm-white` | `#f8f7f3` | **Primary Background**: Latar belakang dasar halaman utama yang memberikan kesan bersih namun tetap hangat (off-white). |
| `--white` | `#ffffff` | **Component Background**: Warna dasar kartu program (`class-card`) dan panel dialog/modal. |
| `--charcoal` | `#242222` | **Primary Text & Dark Section Background**: Warna teks default untuk seluruh halaman, serta menjadi background gelap pada section testimoni (`community-voices`). |
| `--gray` | `#77736e` | **Secondary Text Color**: Digunakan untuk teks deskripsi sekunder, subtitle, dan tulisan pembantu (`lede`). |
| `--deep-charcoal` | `#191817` | **Backdrop & Footer Background**: Digunakan untuk footer halaman, backdrop area hero slide, dan area gelap yang membutuhkan kontras sangat tinggi. |

### B. Tekstur & Ornamen Latar Belakang (Asymmetric Shapes)
Untuk menghilangkan kejenuhan latar belakang off-white polos, digunakan ornamen asimetris dengan opasitas rendah:
1. **Asymmetric Corner Shapes (Philosophy Section)**:
   - Menggunakan elemen `.shape` yang ditempatkan absolut di sudut viewport.
   - **Kiri Atas (`.shape-tl`)**: Quarter circle fan warna Emas Emas (`#F4B41A` dengan opacity 25%).
   - **Kanan Atas (`.shape-tr`)**: Giant corner arch berwarna Terracotta/Warm Coral (`#E06D53` dengan opacity 20%).
2. **Asymmetrical SVG Blobs**:
   - **Sisi Kiri (`.info-section::before`)**: SVG blob lembut berwarna Teal (`#007A87` dengan opacity 14%), diposisikan melebar keluar batas kiri layar (`left: -140px`).
   - **Sisi Kanan (`.affiliations::before`)**: SVG blob lembut berwarna Emas (`#F4B41A` dengan opacity 14%), diposisikan meluber keluar batas kanan layar.

---

## 2. Typography

Sistem tipografi menggunakan kombinasi tiga font family yang masing-masing memegang peran berbeda untuk menciptakan kontras hierarki informasi yang elegan.

### A. Font Family
- **Heading Font (`--f-head`)**: `"Plus Jakarta Sans", sans-serif` — Digunakan untuk semua judul utama (H1, H2, H3) untuk kesan modern dan profesional.
- **Body Font (`--f-body`)**: `"Nunito Sans", sans-serif` — Digunakan untuk teks deskripsi, lede, paragraf, menu navigasi, dan tombol. Mengutamakan keterbacaan yang tinggi.
- **Voice/Quote Font (`--f-voice`)**: `"Lora", serif` — Digunakan secara khusus untuk kutipan testimoni, teks filosofi, dan kalimat puitis bergaya editorial.

### B. Spesifikasi Ukuran, Weight, dan Line Height
- **H1 (Hero Headline)**:
  - Ukuran: `clamp(34px, 5.4vw, 66px)`
  - Line-height: `1.08`
  - Weight: `600`
  - Letter-spacing: `0` (override)
- **H2 (Section Headings)**:
  - Ukuran: `clamp(32px, 3.5vw, 44px)` (Pengecualian: `.info-header h2` menggunakan `clamp(28px, 3vw, 40px)`, `.classes-section .section-heading h2` menggunakan `44px`)
  - Line-height: `1.2` hingga `1.25`
  - Weight: `600`
  - Letter-spacing: `0` (override)
- **H3 (Card & Component Titles)**:
  - `.class-card-body h3`: `24px` | Line-height: `1.3` | Weight: `600`
  - `.boxTitle` (Taxonomy Card): `20px` | Line-height: `1.35` | Weight: `600`
  - `.voice-name` (Testimonial Card): `18px` | Weight: `600`
- **Body Text**:
  - Default Body: `17px` | Line-height: `1.7`
  - Lede Text: `19px` | Line-height: `1.75` | Warna: `var(--gray)`
  - Class Card Paragraph: `15px` | Line-height: `1.6`
  - Taxonomy Card Paragraph (`.boxDesc`): `13px` | Line-height: `1.5`
- **Microtext & Caption Tags**:
  - `.boxTag` (Taxonomy tag): `11px` | Weight: `700` | Text-transform: `uppercase` | Letter-spacing: `1px`
  - Age Badge (`.class-card-body span`): `11px` | Weight: `700` | Text-transform: `uppercase` | Letter-spacing: `1.2px`
  - `.voice-role`: `10px` | Weight: `700` | Text-transform: `uppercase` | Letter-spacing: `1.2px`

---

## 3. Component Rules

Seluruh komponen interaktif dan non-interaktif mengikuti aturan visual yang ketat untuk mempertahankan konsistensi identitas MWS.

### A. Aturan Sharp Edges (Sudut Tajam)
Estetika utama Mockup 3 adalah **bebas dari sudut membulat (border-radius: 0)** pada seluruh komponen utama:
- **Wajib menggunakan `border-radius: 0`**:
  - Semua kartu (`.class-card`, `.voice-card`, `.holderBox`, `.innerBox`).
  - Gambar dan frame foto (`.media-placeholder.class-photo`, `.innerBox img`).
  - Elemen badge/lencana umur di dalam kartu program.
  - Dialog pop-up dan modal panel (`.modal-panel`, `.modal-container`, `.modal-photo`).
  - Tombol aksi non-ikon seperti chatbot toggle (`.chatbot-toggle`), panel chatbot (`.chatbot-panel`), dan play button overlay (`.play-btn`).
- **Pengecualian (Boleh membulat/lingkaran)**:
  - Tombol kontrol slider melingkar (`.spotlight-arrow` menggunakan `border-radius: 50%`).
  - Tombol indikator dot/slide pada Hero banner.

### B. Style Tombol & Tautan (Buttons & Links)
1. **Primary / Action Button (`.btn-visit`)**:
   - Tipe: Outline button dengan transisi padat.
   - Default (pada navbar transparan): Border `1px solid rgba(248, 247, 243, 0.7)`, teks putih. Saat scrolled, border dan teks berubah menjadi `var(--charcoal)`.
   - Hover state: Background dan border berubah menjadi Burgundy (`var(--burgundy)`), teks berubah menjadi putih (`var(--white)`).
2. **Secondary Link (`.btn-secondary`)**:
   - Digunakan pada bagian penutup list testimonial.
   - Tipe: Minimalis teks dengan garis bawah aksen Emas (`border-bottom: 1px solid var(--gold)`), padding-bottom `6px`.
3. **Outline / Text Link with Arrow (`.text-link` & `.boxLink`)**:
   - `.text-link` (pada Class card): Teks hitam dengan simbol anak panah (`→`) di pseudo-element `::after`. Pada hover, warna teks berubah menjadi Teal dan anak panah bergeser ke kanan sejauh `6px` (`transform: translateX(6px)`).
   - `.boxLink` (pada Taxonomy card): Teks putih dengan panah HTML (`&rarr;`) di dalam `span`. Pada hover, anak panah bergeser ke kanan sejauh `4px`.
4. **Glassmorphism Navigation Arrows (`.spotlight-arrow`)**:
   - Digunakan untuk kontrol slider Campus Spotlight.
   - Style: Lingkaran dengan background semi-transparan (`rgba(255, 255, 255, 0.15)`), border tipis putih, dan efek blur (`backdrop-filter: blur(8px)`).
   - Hover state: Berubah menjadi putih solid (`rgba(255, 255, 255, 0.9)`) dengan teks gelap (`#111`).

### C. Style Kartu (Cards)
1. **`holderBox` (Taxonomy Card)**:
   - Lebar tetap `360px` dengan aspect ratio box internal `3:4`.
   - Hover Effect Gambar: Zoom gambar (`scale(1.08)`) dan efek blur dramatis (`blur(6px) brightness(0.65)`).
   - Text Slide-Up: Konten teks (`.boxContent`) secara default tergeser ke bawah (`translateY(90px)`) sehingga hanya judul (H3) yang terlihat. Saat hover, bergeser kembali ke `translateY(0)` dengan transisi `cubic-bezier(0.16, 1, 0.3, 1)` dalam durasi 0.4s. Tag, deskripsi, dan link muncul secara bertahap menggunakan transition-delay (`0.05s`, `0.1s`, `0.15s`).
2. **`class-card` (Program Grid Card)**:
   - Struktur: Layout flex vertikal, background putih, border abu-abu tipis (`rgba(0, 122, 135, 0.14)`).
   - Aksen Atas: Memiliki garis penutup atas (accent strip) setinggi `3px` berwarna Teal (`var(--teal)`) yang tampil secara permanen (`opacity: 1`).
   - Hover Effect Card: Card terangkat ke atas (`translateY(-8px)`), border menggelap, bayangan halus aktif (`0 20px 40px rgba(0, 0, 0, 0.06)`), judul dan teks link berubah warna menjadi Teal.
3. **`voice-card` (Community Testimonial Card)**:
   - Struktur: Portrait elegan dengan aspect ratio `9:14`, latar belakang hitam, border tipis (`rgba(248, 247, 243, 0.12)`).
   - Hover Effect: Gambar melakukan zoom tipis (`scale(1.05)`) dan blur (`blur(4px) brightness(0.7)`).
   - Play Button Overlay: Kotak putih transparan di bagian tengah yang awalnya tersembunyi (`opacity: 0`, `scale(0.85)`) akan membesar dan terlihat (`opacity: 1`, `scale(1)`) saat di-hover.

---

## 4. Layout & Spacing

Tata letak Mockup 3 didesain dinamis dengan menyeimbangkan area terstruktur (contained) dan area penuh (full-bleed) untuk menjaga ritme visual saat scroll.

### A. Jarak Antar Section (Padding)
- Jarak vertikal standar antar section di layar desktop adalah **`120px 0`**.
- Pengecualian pada section **Philosophy** yang menggunakan padding lebih luas yaitu **`180px 0`** untuk menampung ornamen sudut viewport.
- Spacing diturunkan secara responsif demi kenyamanan perangkat mobile:
  - Layar Tablet (<= 980px): Diturunkan ke kisaran **`88px` hingga `92px`**.
  - Layar Mobile (<= 560px): Diturunkan ke kisaran **`72px` hingga `80px`**.

### B. Aturan Contained (`.wrap`) vs Full-Bleed
1. **Contained Layout (`.wrap`)**:
   - Berfungsi menyelaraskan batas kiri dan kanan teks utama agar sejajar secara vertikal.
   - Batas maksimum lebar konten adalah `1240px` dengan margin otomatis (`margin: 0 auto`) dan padding kiri-kanan default sebesar `48px` (turun ke `28px` di tablet dan `20px` di mobile).
2. **Full-Bleed Layout (Meluber ke Pinggir Layar)**:
   Digunakan untuk memecah kebosanan struktur contained monoton:
   - **`holderBoxes` (Taxonomy Slider)**: Meluber ke ujung monitor menggunakan kalkulasi margin negatif (`width: 100vw; margin-left: -50vw; margin-right: -50vw; left: 50%; right: 50%`). Agar item kartu pertama tetap lurus dengan judul di atasnya, diterapkan padding kiri dimockup3/Guidelines.mdnamis: `padding-left: max(24px, calc((100vw - 1200px) / 2))`.
   - **`campus-spotlight` (Spotlight Slider)**: Slider gambar penuh 100% lebar layar (`100vw`) dengan tinggi adaptif `80vh` (min-height `500px`, max-height `720px`).
   - **`community-voices.wrap` (Testimonial Grid)**: Dibuat full bleed dengan warna latar belakang arang gelap (`var(--charcoal)`) dan padding internal dinamis untuk menyeimbangkan letak grid kartu testimonial.
   - **`classes-section .section-shell`**: Berbentuk blok kotak besar penuh (`max-width: 100%`) dengan padding internal `72px` yang bertindak sebagai visual "island box" raksasa, dilengkapi garis aksen emas (`width: 180px; height: 4px; background: var(--gold)`) di pojok kanan atas.

---

## 5. UI Do's & Don'ts

Pedoman perilaku interaksi dan batasan elemen visual yang tidak boleh dilanggar.

### **DO'S (Lakukan)**
- **Gunakan Transisi `cubic-bezier`**: Untuk semua perubahan posisi, transformasi, zoom gambar, dan lifting efek pada kartu, wajib menggunakan fungsi transisi `cubic-bezier(0.16, 1, 0.3, 1)` agar animasi terasa halus, responsif, dan bernilai premium.
- **Pertahankan Karakter Sudut Tajam (Sharp Edges)**: Pastikan setiap kartu baru, frame gambar, tombol kotak, chatbot panel, dan jendela modal menggunakan sudut lancip (`border-radius: 0`).
- **Gunakan Selang-seling Kontras Warna Section**: Jaga ritme visual halaman dengan menyelingi section berlatar belakang hangat (`--warm-white`) dengan section berlatar belakang gelap (`--charcoal` atau `--deep-charcoal`).
- **Sediakan Kontrol Alternatif pada Slider**: Setiap slider full-bleed (seperti spotlight atau taxonomy) harus selalu dilengkapi dengan tombol kontrol navigasi manual (panah kiri/kanan).

### **DON'TS (Hindari)**
- **Dilarang Keras Menggunakan Eyebrow Text**: Jangan menempatkan teks kecil (tag/label/kategori) langsung di atas judul utama section. Setiap section harus langsung dibuka secara tegas menggunakan Heading 2 (H2).
- **Dilarang Menambahkan Efek Hover Visual pada Tombol Filter Non-Aktif**: Pada bilah menu filter kategori (`.filter-btn`), hindari memberikan perubahan warna teks saat di-hover (`color` tetap abu-abu `#888`). Warna gelap dan garis indikator aktif hanya boleh muncul saat tombol filter berada dalam keadaan aktif (`.active`).
- **Dilarang Menggunakan Rounded Corners pada Tombol Utama**: Jangan membulatkan sudut tombol `btn-visit`, `btn-secondary`, dan tombol toggle chat.
- **Jangan Membatasi Semua Section pada Grid Contained**: Hindari mengurung seluruh section halaman di dalam container `.wrap` agar sisi kanan dan kiri monitor layar lebar tidak terasa kosong dan monoton. Gunakan section full-bleed sebagai jeda visual.
