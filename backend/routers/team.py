from fastapi import APIRouter
from models.schemas import TeamMember
from data.seed_data import TEAM

router = APIRouter(prefix="/api", tags=["team"])


@router.get("/team", response_model=list[TeamMember])
async def get_team():
    """Mendapatkan daftar anggota tim."""
    return TEAM
