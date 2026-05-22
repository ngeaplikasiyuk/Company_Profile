# ngeaplikasiyuk - Company Profile

Studio pengembangan perangkat lunak butik. Website company profile dengan estetika premium (burgundy + cream) dan animasi scroll-based.

## Struktur Project

```
project_CompanyProfile/
├── frontend/                              # Next.js 16 (App Router, TypeScript)
│   └── src/
│       ├── app/                           # Routes: /, /about, /services, /portfolio, /team, /contact
│       ├── components/                    # Section components (Hero, Navbar, Footer, dll)
│       ├── styles/                        # CSS Modules (terpisah dari komponen)
│       ├── hooks/useScrollAnimation.ts
│       └── lib/api.ts                     # API client ke backend
├── backend/                               # FastAPI
│   ├── main.py
│   ├── config.py
│   ├── routers/                           # company, services, portfolio, team, contact
│   ├── models/schemas.py                  # Pydantic models
│   └── data/seed_data.py                  # Seed data (JSON-based, no DB)
└── stitch_react_fastapi_company_profile/  # Design reference dari Google Stitch
```

## Cara Run

### Backend (FastAPI)
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8000`
- API docs (Swagger): `http://localhost:8000/docs`

## Tech Stack

**Frontend**
- Next.js 16.2.6 (App Router) + React 19
- TypeScript
- CSS Modules (di `src/styles/`)
- Google Fonts: **Playfair Display** (heading) + **Inter** (body)
- Material Symbols Outlined (icons)

**Backend**
- Python + FastAPI
- Pydantic (validasi schema)
- Uvicorn (ASGI server)
- CORS allow: `localhost:3000`, `127.0.0.1:3000`, `localhost:3001`
- Data: seed data JSON-based (belum pakai database)

## Color Palette

Didefinisikan sebagai CSS variables di `frontend/src/app/globals.css`.

| Token | Hex | Pemakaian |
|---|---|---|
| `--burgundy-deep` / `--primary` | `#561C24` | Primary, headers, footer bg |
| `--burgundy-wine` / `--primary-container` | `#6D2932` | Hover, accent, gradient |
| `--taupe-warm` / `--tertiary` | `#C7B7A3` | Secondary text, divider, outline-variant |
| `--cream-beige` / `--surface-variant` | `#E8D8C4` | Section bg, card surface |
| `--background` / `--surface` | `#FDF8F3` | Background utama (warm cream) |
| `--on-background` | `#2a1f1f` | Text utama |

## Endpoint API

| Method | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/api/company` | Info perusahaan + stats |
| `GET` | `/api/services` | Daftar layanan |
| `GET` | `/api/portfolio` | Daftar proyek |
| `GET` | `/api/portfolio/{id}` | Detail proyek |
| `GET` | `/api/team` | Anggota tim |
| `GET` | `/api/contact` (info) / `POST` `/api/contact` | Info kontak / submit form |

## Komponen Frontend

`Navbar`, `Hero`, `AboutSection`, `ServicesSection`, `PortfolioSection`, `TeamSection`, `TestimonialSection`, `FaqSection`, `CtaSection`, `ContactSection`, `Footer`, `StatsCounter`, `MagneticWrap`, `TextReveal`.

## Konvensi

- Single page scrollable di `/`, plus halaman terpisah per section (`/about`, `/services`, dll)
- Semua konten **Bahasa Indonesia** (`<html lang="id">`, `locale: id_ID`)
- Data di-fetch dari FastAPI via `src/lib/api.ts`
- CSS Modules ditempatkan di `src/styles/` (bukan kolokasi dengan komponen)
- Design accent: brutalist shadow (`4px 4px 0` solid burgundy), grain overlay (SVG noise filter), animasi fade-in-up via Intersection Observer (`useScrollAnimation`)
- Font heading: Playfair Display (serif, elegan); body: Inter

## Standar Kode

Checklist ringkas yang relevan untuk project ini. Verifikasi saat membuat/mengubah komponen atau endpoint — jangan over-engineer.

**Aksesibilitas**
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<button>`) dan heading hierarchy benar (satu `<h1>` per halaman)
- `alt` deskriptif untuk gambar; `aria-label` untuk button icon-only
- Jangan hapus `:focus-visible` outline di `globals.css`; hormati `prefers-reduced-motion` untuk animasi scroll
- Hindari `--taupe-warm` untuk body text di atas `--background` (kontras kurang dari WCAG AA)

**Responsiveness**
- Mobile-first; cek di 360px, 768px, 1280px. Tidak boleh horizontal scroll di mobile
- Pakai spacing var (`--container-max`, `--margin-mobile/-desktop`) — bukan angka hardcode
- Touch target minimal 44×44px

**Loading & error state**
- Fetch dari `src/lib/api.ts` harus punya state loading + error (spinner/skeleton, bukan layout loncat)
- Error state berbahasa Indonesia + tombol retry; jangan diam saja saat fetch gagal

**Maintainability**
- Maksimal **300 baris per file** — kalau lewat, pecah jadi komponen/hook/modul lebih kecil
- Komponen kecil & single-responsibility; tipe TS eksplisit untuk props & API response (hindari `any`)
- Pydantic schema = single source of truth; frontend type harus match
- Tidak ada hex/magic number inline — pakai CSS variable; hapus kode mati & unused import
- Satu router per domain di `routers/` — jangan tumpuk endpoint di `main.py`

**Keamanan**
- Validasi input via Pydantic; jangan `dangerouslySetInnerHTML` tanpa sanitasi
- CORS restrictive (origin dari env, jangan `["*"]`); jangan commit `.env`/secret
- Jangan log PII (email/pesan contact form) ke console; jangan expose stack trace ke client
- Security header di `next.config.ts`; rate limit `POST /api/contact` saat deploy
