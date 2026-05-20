from fastapi import APIRouter
from models.schemas import Service
from data.seed_data import SERVICES

router = APIRouter(prefix="/api", tags=["services"])


@router.get("/services", response_model=list[Service])
async def get_services():
    """Mendapatkan daftar layanan."""
    return SERVICES
