# Devy A Utami — Portfolio

Website portofolio responsif yang dibangun dari desain `desktop.fig`.
`mobile.fig` dipakai sebagai referensi tambahan; karena tampilannya berbeda
(app-like), versi web mengikuti desktop dan diadaptasi untuk layar kecil.

## Menjalankan

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # hasil produksi di folder dist/
npm run preview   # pratinjau hasil build
```

Tidak ada backend. Semua halaman adalah HTML statis dengan CSS dan JavaScript
vanilla yang diproses oleh Vite.

## Halaman

| File | Isi |
| --- | --- |
| `index.html` | Home: hero, about, education, selected work, contact |
| `experience.html` | Work experience dan tools mastering |
| `projects.html` | Canva portfolio: banner, mockups, menus, travel, flyers, real estate |
| `project-data-management.html` | Data management report |
| `project-slide-decks.html` | Slide deck showcase |
| `certificates.html` | Featured certificate dan sertifikat lainnya |

## Keputusan desain

- **Tipografi disatukan** menjadi tiga font agar terasa lebih profesional:
  - `Fraunces` untuk judul dan angka besar,
  - `Manrope` untuk UI dan body text,
  - `JetBrains Mono` untuk label, meta, dan navigasi kecil.
- Palet tetap memakai navy `#0F103F`, gold `#CAB894`, dan aksen kuning dari desain.
- Layout dirapikan: grid editorial, spacing konsisten, kartu kontak, timeline
  vertikal, carousel center-mode, dan lightbox untuk pratinjau gambar.
- Mobile memakai layout bertumpuk yang diadaptasi dari desktop, dengan menu dan
  tool navigation yang tetap dapat digunakan.
- Aset gambar (foto profil, thumbnail proyek, sertifikat, ikon) diekspor dari
  `desktop.fig` memakai FigCraft, lalu disimpan di `public/assets/`.
- Beberapa bagian yang di file desain bertumpuk atau terpotong (mis. travel
  itinerary dan contact) disusun ulang agar rapi dan terbaca.

## Interaksi

- Carousel dengan tombol prev/next, dot, swipe, keyboard, dan autoplay
  (autoplay berhenti saat hover/fokus dan dinonaktifkan untuk
  `prefers-reduced-motion`).
- Lightbox untuk semua gambar proyek dan sertifikat, bisa ditutup dengan
  tombol close, klik backdrop, atau `Esc`.
- Reveal-on-scroll, hover state, dan spotlight halus pada hero.
- Tombol Back memakai riwayat browser, dengan fallback ke Home.

## Catatan link

- Email: `dedepautams.work@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/devvv9/`
- Upwork dan link proyek eksternal belum tersedia di file desain, jadi memakai
  placeholder (`https://www.upwork.com/` atau lightbox). Ganti dengan URL asli
  di `index.html` bila sudah ada.

## Sumber

- Desain: `desktop.fig`, `mobile.fig`
- Aset: `public/assets/`
- Build: `dist/`
