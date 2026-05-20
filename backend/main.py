"""
ngeaplikasiyuk Company Profile - FastAPI Backend
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import settings
from routers import company, services, portfolio, team, contact

app = FastAPI(
    title=settings.app_name,
    description=settings.app_description,
    version=settings.app_version,
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(company.router)
app.include_router(services.router)
app.include_router(portfolio.router)
app.include_router(team.router)
app.include_router(contact.router)


@app.get("/")
async def root():
    return {
        "message": f"{settings.app_name} is running",
        "version": settings.app_version,
    }
