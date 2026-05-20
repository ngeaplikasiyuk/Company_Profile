<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--burgundy-deep` | `#561C24` | Primary dark, headers, footer background |
| `--burgundy-wine` | `#6D2932` | Hover states, accent borders, gradients |
| `--taupe-warm` | `#C7B7A3` | Secondary text, subtle borders, dividers |
| `--cream-beige` | `#E8D8C4` | Background sections, card surfaces, highlights |

## Proposed Changes

### 1. Project Structure

```
d:\project_CompanyProfile\
├── frontend/                    # Next.js + Vite App
│   ├── package.json
│   ├── vite.config.ts
│   ├── next.config.mjs
│   ├── tsconfig.json
│   ├── public/
│   │   └── images/             # Static images (generated assets)
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx      # Root layout with fonts, metadata
│   │   │   ├── page.tsx        # Landing page (assembles all sections)
│   │   │   ├── globals.css     # Global styles + design tokens
│   │   │   ├── about/
│   │   │   │   └── page.tsx    # About page
│   │   │   ├── services/
│   │   │   │   └── page.tsx    # Services page
│   │   │   ├── portfolio/
│   │   │   │   └── page.tsx    # Portfolio page
│   │   │   ├── team/
│   │   │   │   └── page.tsx    # Team page
│   │   │   └── contact/
│   │   │       └── page.tsx    # Contact page
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Navbar.module.css
│   │   │   ├── Hero.tsx
│   │   │   ├── Hero.module.css
│   │   │   ├── AboutSection.tsx
│   │   │   ├── AboutSection.module.css
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ServicesSection.module.css
│   │   │   ├── PortfolioSection.tsx
│   │   │   ├── PortfolioSection.module.css
│   │   │   ├── TeamSection.tsx
│   │   │   ├── TeamSection.module.css
│   │   │   ├── TestimonialSection.tsx
│   │   │   ├── TestimonialSection.module.css
│   │   │   ├── ContactSection.tsx
│   │   │   ├── ContactSection.module.css
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.module.css
│   │   │   ├── StatsCounter.tsx
│   │   │   └── StatsCounter.module.css
│   │   ├── hooks/
│   │   │   └── useApi.ts       # Custom hook for API calls
│   │   └── lib/
│   │       └── api.ts          # API client config
│   └── .env.local              # API base URL config
│
├── backend/                     # Python FastAPI Backend
│   ├── requirements.txt
│   ├── main.py                 # FastAPI app entry point
│   ├── config.py               # Settings & configuration
│   ├── models/
│   │   └── schemas.py          # Pydantic models
│   ├── routers/
│   │   ├── company.py          # Company info endpoints
│   │   ├── services.py         # Services endpoints
│   │   ├── portfolio.py        # Portfolio endpoints
│   │   ├── team.py             # Team endpoints
│   │   └── contact.py          # Contact form endpoint
│   └── data/
│       └── seed_data.py        # Initial data (JSON-based, no DB needed initially)
│
├── CLAUDE.MD
└── README.md
```

---

### 2. Frontend - Next.js + Vite

#### [NEW] `frontend/` — Next.js Application (scaffolded with `create-next-app`)

**Tech Stack:**
- Next.js 14+ (App Router)
- TypeScript
- CSS Modules (untuk styling terpisah per komponen)
- Google Fonts: **Playfair Display** (headings) + **Inter** (body)

**Halaman & Sections:**

| Page/Section | Deskripsi |
|---|---|
| **Navbar** | Sticky navbar transparan, berubah solid saat scroll. Logo + nav links + CTA button |
| **Hero** | Full-screen hero dgn background image + overlay gradient burgundy. Heading besar + subtext + CTA button. Animasi fade-in |
| **About** | Split layout: teks kiri, gambar kanan. Stats counter (tahun berdiri, klien, proyek) dgn animasi count-up |
| **Services** | Grid 3x2 cards dgn icon, judul, deskripsi. Hover effect: card naik + shadow + border glow |
| **Portfolio** | Gallery grid dgn filter tabs. Hover overlay dgn judul proyek. Lightbox modal |
| **Team** | Grid kartu team member dgn foto circular, nama, jabatan. Hover: social media links muncul |
| **Testimonial** | Carousel/slider dari testimoni klien. Quote marks, avatar, nama, perusahaan |
| **Contact** | Form kiri (nama, email, subjek, pesan) + info kontak kanan (alamat, telepon, email, map) |
| **Footer** | Multi-column footer dgn logo, quick links, kontak, social media. Copyright bar |

**Animasi & Micro-interactions:**
- Intersection Observer untuk fade-in/slide-up saat scroll
- Smooth scroll antar section
- Navbar background transition on scroll
- Button hover ripple effects
- Card lift + glow on hover
- Stats counter number animation
- Parallax effect pada hero

---

### 3. Backend - Python FastAPI

#### [NEW] `backend/` — FastAPI REST API

**Endpoints:**

| Method | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/api/company` | Info perusahaan (nama, deskripsi, visi, misi, stats) |
| `GET` | `/api/services` | Daftar layanan |
| `GET` | `/api/portfolio` | Daftar proyek portfolio |
| `GET` | `/api/portfolio/{id}` | Detail proyek |
| `GET` | `/api/team` | Daftar anggota tim |
| `GET` | `/api/testimonials` | Daftar testimoni |
| `POST` | `/api/contact` | Submit contact form |

**Fitur Backend:**
- CORS middleware (allow frontend origin)
- Pydantic schemas untuk validasi data
- Seed data (JSON-based, tanpa database untuk awal — bisa di-extend ke PostgreSQL/SQLite nanti)
- Error handling & response formatting
- Contact form endpoint (simpan ke file/database)

---

### 4. Data Models (Pydantic Schemas)

```python
class CompanyInfo:
    name, tagline, description, vision, mission
    stats: { years, clients, projects, awards }

class Service:
    id, title, description, icon, features[]

class PortfolioItem:
    id, title, category, description, image_url, client, year

class TeamMember:
    id, name, position, bio, photo_url, social_links{}

class Testimonial:
    id, name, company, position, content, avatar_url, rating

class ContactMessage:
    name, email, subject, message
```

---

## User Review Required

> [!IMPORTANT]
> **Nama Perusahaan**: Saat ini saya akan menggunakan placeholder nama perusahaan. Apakah ada nama perusahaan spesifik yang ingin digunakan?

> [!IMPORTANT]
> **Konten**: Data awal akan menggunakan sample/dummy data yang realistis. Apakah ada konten spesifik (layanan, portofolio, tim) yang ingin dimasukkan?

> [!IMPORTANT]
> **Next.js vs Vite**: Next.js sudah menggunakan bundler sendiri (Turbopack/Webpack). Apakah yang dimaksud adalah:
> - **Opsi A (Recommended)**: Next.js sebagai framework utama (sudah termasuk SSR, routing, dll.)
> - **Opsi B**: Vite + React biasa (SPA, tanpa SSR) — terpisah dari Next.js
> - **Opsi C**: Dua frontend terpisah — Next.js untuk main site + Vite untuk admin panel
>
> Saya rekomendasikan **Opsi A** karena Next.js sudah lengkap untuk company profile (SEO-friendly, SSR, dll.)

## Open Questions

> [!NOTE]
> **Database**: Apakah perlu setup database (PostgreSQL/SQLite) sekarang, atau cukup JSON-based seed data untuk MVP?

> [!NOTE]
> **Deployment**: Apakah ada rencana deployment tertentu? (Vercel untuk FE, Railway/Render untuk BE?)

> [!NOTE]
> **Bahasa**: Apakah konten website dalam Bahasa Indonesia atau Inggris?

---

## Verification Plan

### Automated Tests
1. **Frontend**: `npm run build` — memastikan tidak ada build error
2. **Frontend**: `npm run dev` — verifikasi visual di browser
3. **Backend**: `uvicorn main:app --reload` — cek semua endpoint via `/docs` (Swagger UI)
4. **Integration**: Frontend fetch data dari backend — memastikan CORS & data flow benar

### Manual Verification
- Visual inspection semua section di browser
- Responsive check (mobile, tablet, desktop)
- Animasi & scroll interaction
- Contact form submission
- API endpoint testing via FastAPI Swagger docs