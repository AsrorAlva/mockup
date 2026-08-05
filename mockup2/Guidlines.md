# Millennia World School — Design System & Style Rules

## 1. Overview & Brand Identity
* **Project Name:** Millennia World School (MWS) Web Remake (Mockup 2)
* **Target Audience:** Calon orang tua murid & siswa (Preschool/Kindergarten, Elementary, dan Junior High)
* **Core Vibe:** Modern, hangat (*nurturing*), inklusif, dan tepercaya sebagai institusi berstandar internasional.
* **Tech:** HTML, CSS, JS

---

## 2. Color System & Tokens

### Main Brand Colors
| Color Name | Token Name | Hex Code | Intended Usage |
| :--- | :--- | :--- | :--- |
| **Burgundy** | `--color-burgundy` | `#7E1518` | Primary identity, main actions, headings, official moments |
| **White** | `--color-white` | `#FFFFFF` | Main surfaces and readable space |
| **Gold** | `--color-gold` | `#D6A13A` | Highlights, milestones, joyful accents |
| **Charcoal** | `--color-charcoal` | `#241718` | Main text instead of pure black |

### Secondary Contextual Colors
| Color Name | Token Name | Hex Code | Intended Usage |
| :--- | :--- | :--- | :--- |
| **Rose** | `--color-rose` | `#B94A4E` | Compassion, SEL, wellbeing |
| **Sage** | `--color-sage` | `#6F8B6A` | Growth, sustainability, MTSS support |
| **Navy** | `--color-navy` | `--#1F2A44` | Evidence, academics, leadership, reports |
| **Sky** | `--color-sky` | `#B8DDF8` | Calm, reflection, child-centered softness |

### Color Rules & Constraints
* **DO:**
  * Use Burgundy as the brand anchor.
  * Use White and warm surfaces generously.
  * Use Charcoal for readable body text.
  * Use one secondary color to communicate product context.
  * Use Gold sparingly for highlights and celebration.
* **DON'T:**
  * Make full pages overly Burgundy.
  * Use secondary colors randomly.
  * Use neon colors.
  * Use purple as the main brand color.
  * Use pure black for large areas.
  * Use Gold in a flashy/luxury style.

---

## 3. Typography System

### Approved Font Families
Hanya 3 keluarga font Google Fonts yang diizinkan untuk digunakan:
1. **Plus Jakarta Sans** (Heading, Subheading, Button/Label)
2. **Nunito Sans** (Body Text, Caption, Sub-info)
3. **Lora** (Quote & Testimonial)

### Typography Mapping
| UI Element | Font Family | Recommended Weight | CSS Variable |
| :--- | :--- | :--- | :--- |
| **Hero Headline** | Plus Jakarta Sans | Bold (700) / ExtraBold (800) | `var(--font-heading)` |
| **Page Title (H1)** | Plus Jakarta Sans | Bold (700) | `var(--font-heading)` |
| **Section Heading (H2/H3)** | Plus Jakarta Sans | SemiBold (600) | `var(--font-heading)` |
| **Button / Label / Badge** | Plus Jakarta Sans | SemiBold (600) | `var(--font-heading)` |
| **Body Text** | Nunito Sans | Regular (400) | `var(--font-body)` |
| **Body Emphasis / Bold** | Nunito Sans | SemiBold (600) | `var(--font-body)` |
| **Caption / Sub-label** | Nunito Sans | Regular (400) | `var(--font-body)` |
| **Quote / Testimonial** | Lora | Medium Italic (500i) | `var(--font-quote)` |

### Typography Rules
* Use sentence case for most headings.
* Avoid long all-caps text.
* Use generous line height (`1.6` – `1.65` untuk body text, `1.2` – `1.3` untuk heading).
* Do not introduce decorative or childish fonts.
* Do not use more than these three font families.

---

## 4. Layout & Section Specifications

### A. Header Navigation
* **Layout:** Logo dan Menu Navigasi berada di sebelah kiri, sedangkan tombol CTA `Book a Tour` berada di sebelah kanan.
* **Transition Behavior:** 
  * Keadaan awal (*top of page*): Transparent background.
  * Keadaan *scrolled*: Transisi halus (*fade-in*) menuju warna solid/glassmorphism lengkap dengan *soft shadow*.
* **Active Indicator:** Navigasi aktif ditandai dengan indikator status seperti *underline* Burgundy/Gold.
* **Dropdown Menu:** Trigger dropdown khusus berada pada menu **Academics** (menampilkan: Kindergarten, Elementary, Junior High, Curriculum), namun menu utama "Academics" tetap dapat di-klik untuk mengarah ke halaman akademis utama.

### B. Hero Section
* Menampilkan placeholder media penuh (*HD Video/Photo loop muted*).
* Dilengkapi teks ajakan (*headline*) dan tombol aksi cepat.

### C. About Section
* Menggunakan elemen dekoratif *wavy / organic curved shape wrapper* yang memotong/melewati bagian bawah Hero Section untuk memberikan kesan dinamis.
* Berisi *Heading*, deskripsi singkat MWS, dan tombol `Learn More`.

### D. Why Choose Us Section
* Dirancang dengan *grid-layout* interaktif untuk menonjolkan 4 pilar utama (*Teaching, Learning, Extracurricular, Student Support*).
* Menampilkan dokumentasi kegiatan (*Photo Activity*) bersanding dengan poin keunggulan sekolah.

### E. Class Division Section
* Menampilkan 3 kartu jenjang utama:
  1. **Kindergarten** (Ages 2 – 6)
  2. **Elementary** (Ages 6 – 12)
  3. **Junior High** (Ages 12 – 15)
* Setiap kartu dilengkapi *image placeholder*, deskripsi kelompok umur, dan tombol `Learn More`.

### F. Campus Environment Section
* Menampilkan galeri keunggulan lingkungan & fasilitas sekolah.
* **Interaction:** Menggunakan *hover overlay trigger* pada setiap foto yang menampilkan penjelasan detail fasilitas ketika kursor diarahkan ke gambar.

### G. What Our Community Says (Testimonial)
* Menampilkan foto/media perwakilan komunitas (orang tua/siswa).
* **Interaction:** Terdapat ikon *Play / Quote Badge* di tengah gambar. Saat di-klik, memunculkan **Popup Modal** berisi video testimoni atau gambar dengan *caption* cerita lengkap.

### H. Affiliations Section
* Menampilkan logo akreditasi dan mitra kerja sama global.
* **Interaction:** Menggunakan *Infinite Auto-scroll Marquee* (gulir otomatis tanpa putus dari kanan ke kiri) yang dapat berhenti sejenak saat kursor di-hover (*pause on hover*).

---

## 5. Motion & Animation Kit Guidelines

Motion should make interfaces feel calm, responsive, and purposeful. Use animation to clarify hierarchy, feedback, and progress — not to decorate every element.

### Available Motion Class Utilities
| Utility Class | Element Target | Purpose |
| :--- | :--- | :--- |
| `.motion-fade-up` | Section headers, cards, empty states | Introduce content gently on page load or render |
| `.motion-hover-lift` | Buttons, clickable cards, selectable tiles | Communicate that the element is interactive |
| `.motion-progress-grow` | Progress bars | Reveal learning, reading, or support progress |
| `.motion-float` | Hero accents, illustrations, decorative badges | Add calm ambient motion only where it supports the page mood |
| `.motion-pulse-soft` | Status icons, celebration icons, live indicators | Draw attention without pressure |
| `.motion-orbit` | Hero badges or featured milestone accents | Add a small moment of delight, used sparingly |

### Animation Stagger Delays
* `.motion-delay-100` (Stagger related items by 100ms)
* `.motion-delay-200` (Stagger related items by 200ms)
* `.motion-delay-300` (Stagger related items by 300ms)
* `.motion-delay-500` (Stagger related items by 500ms)


### Update Affilations Section
## Affiliations

Pada section ini sebenernya sudah ada contohnya anda tinggal mengikuti saja sama ini



<div class="affiliations-carousel">

<div class="carousel-track">

<!-- Set 1 (Original) -->

<article class="activity-card"><img src="https://millenniaws.sch.id/wp-content/uploads/2023/11/Climate-Action.jpg" alt="Climate Action" /></article>

<article class="activity-card"><img src="https://millenniaws.sch.id/wp-content/uploads/2023/11/ClimateChangeSchool.jpg" alt="Climate Change School" /></article>

<article class="activity-card"><img src="https://millenniaws.sch.id/wp-content/uploads/2023/11/CharterForCompassion.jpg" alt="Charter for Compassion" /></article>

<article class="activity-card"><img src="https://millenniaws.sch.id/wp-content/uploads/2023/11/ClimateActionProject.jpg" alt="Climate Action Project" /></article>

<article class="activity-card"><img src="https://millenniaws.sch.id/wp-content/uploads/2023/11/CommonSenseEducation.jpg" alt="Common Sense Education" /></article>

<article class="activity-card"><img src="https://millenniaws.sch.id/wp-content/uploads/2023/11/ResponsiveClassroom.jpg" alt="Responsive Classroom" /></article>

<article class="activity-card"><img src="https://millenniaws.sch.id/wp-content/uploads/2023/11/iEran.jpg" alt="iEARN" /></article>

<article class="activity-card"><img src="https://millenniaws.sch.id/wp-content/uploads/2023/11/Empatico.jpg" alt="Empatico" /></article>

<article class="activity-card"><img src="https://millenniaws.sch.id/wp-content/uploads/2023/11/EraseMeanness.jpg" alt="Erase Meanness" /></article>




<!-- Set 2 (Duplicate - Wajib untuk efek loop tanpa putus) -->



<article class="activity-card"><img src="https://millenniaws.sch.id/wp-content/uploads/2023/11/Climate-Action.jpg" alt="Climate Action" /></article>

<article class="activity-card"><img src="https://millenniaws.sch.id/wp-content/uploads/2023/11/ClimateChangeSchool.jpg" alt="Climate Change School" /></article>

<article class="activity-card"><img src="https://millenniaws.sch.id/wp-content/uploads/2023/11/CharterForCompassion.jpg" alt="Charter for Compassion" /></article>

<article class="activity-card"><img src="https://millenniaws.sch.id/wp-content/uploads/2023/11/ClimateActionProject.jpg" alt="Climate Action Project" /></article>

<article class="activity-card"><img src="https://millenniaws.sch.id/wp-content/uploads/2023/11/CommonSenseEducation.jpg" alt="Common Sense Education" /></article>

<article class="activity-card"><img src="https://millenniaws.sch.id/wp-content/uploads/2023/11/ResponsiveClassroom.jpg" alt="Responsive Classroom" /></article>

<article class="activity-card"><img src="https://millenniaws.sch.id/wp-content/uploads/2023/11/iEran.jpg" alt="iEARN" /></article>

<article class="activity-card"><img src="https://millenniaws.sch.id/wp-content/uploads/2023/11/Empatico.jpg" alt="Empatico" /></article>

<article class="activity-card"><img src="https://millenniaws.sch.id/wp-content/uploads/2023/11/EraseMeanness.jpg" alt="Erase Meanness" /></article>

</div>

</div>
