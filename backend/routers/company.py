from fastapi import APIRouter
from models.schemas import CompanyInfo
from data.seed_data import COMPANY_INFO

router = APIRouter(prefix="/api", tags=["company"])


@router.get("/company", response_model=CompanyInfo)
async def get_company():
    """Mendapatkan informasi perusahaan."""
    return COMPANY_INFO
