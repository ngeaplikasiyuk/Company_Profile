# ngeaplikasiyuk - Company Profile

## Project Structure
- `frontend/` — Next.js 15 (App Router, TypeScript, CSS Modules)
- `backend/` — Python FastAPI (REST API)
- `stitch_react_fastapi_company_profile/` — Design reference dari Google Stitch

## Running the Project

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

Frontend runs on `http://localhost:3000`
Backend runs on `http://localhost:8000`
API docs at `http://localhost:8000/docs`

## Color Palette
- Primary: `#3a0710` (deep burgundy)
- Primary Container: `#561c24`
- Secondary: `#93474f` (wine)
- Background: `#fff8f7` (warm white)
- Surface Dim: `#e5d7d7` (taupe)

## Tech Stack
- **Frontend**: Next.js, TypeScript, CSS Modules, Hanken Grotesk font
- **Backend**: Python, FastAPI, Pydantic, Uvicorn
- **Design**: Brutalist shadows, grain overlay, Material Symbols

## Conventions
- Single page scrollable layout
- Data fetched from FastAPI backend via REST
- CSS Modules for component-scoped styling
- All content in Bahasa Indonesia
