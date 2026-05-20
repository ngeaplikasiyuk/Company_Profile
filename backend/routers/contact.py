from fastapi import APIRouter
from models.schemas import (
    ContactInfo,
    ContactMessage,
    ContactResponse,
    FAQ,
    Testimonial,
    TechStack,
)
from data.seed_data import CONTACT_INFO, FAQS, TESTIMONIALS, TECH_STACK

router = APIRouter(prefix="/api", tags=["contact"])


@router.get("/contact-info", response_model=ContactInfo)
async def get_contact_info():
    """Mendapatkan informasi kontak perusahaan."""
    return CONTACT_INFO


@router.post("/contact", response_model=ContactResponse)
async def submit_contact(message: ContactMessage):
    """Menerima pesan kontak dari form."""
    print(f"📩 Pesan baru dari {message.name} ({message.email})")
    print(f"   Subjek: {message.subject}")
    print(f"   Pesan: {message.message}")

    return ContactResponse(
        success=True,
        message="Terima kasih! Pesan Anda telah kami terima. Kami akan merespons dalam 1x24 jam.",
    )


@router.get("/faqs", response_model=list[FAQ])
async def get_faqs():
    """Mendapatkan daftar FAQ."""
    return FAQS


@router.get("/testimonials", response_model=list[Testimonial])
async def get_testimonials():
    """Mendapatkan daftar testimoni."""
    return TESTIMONIALS


@router.get("/tech-stack", response_model=TechStack)
async def get_tech_stack():
    """Mendapatkan daftar tech stack."""
    return TECH_STACK
