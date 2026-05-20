from fastapi import APIRouter, HTTPException
from models.schemas import PortfolioItem
from data.seed_data import PORTFOLIO

router = APIRouter(prefix="/api", tags=["portfolio"])


@router.get("/portfolio", response_model=list[PortfolioItem])
async def get_portfolio():
    """Mendapatkan daftar portfolio/produk."""
    return PORTFOLIO


@router.get("/portfolio/{item_id}", response_model=PortfolioItem)
async def get_portfolio_item(item_id: int):
    """Mendapatkan detail portfolio berdasarkan ID."""
    for item in PORTFOLIO:
        if item["id"] == item_id:
            return item
    raise HTTPException(status_code=404, detail="Portfolio item not found")
