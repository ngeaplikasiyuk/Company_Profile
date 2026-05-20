from pydantic import BaseModel
from typing import Optional


class CompanyStats(BaseModel):
    products_released: str
    client_satisfaction: str
    expert_support: str


class CompanyInfo(BaseModel):
    name: str
    tagline: str
    description: str
    vision: str
    mission: str
    stats: CompanyStats


class Service(BaseModel):
    id: int
    title: str
    description: str
    icon: str
    features: list[str]


class PortfolioItem(BaseModel):
    id: int
    title: str
    subtitle: str
    category: str
    description: str
    image_url: str
    image_alt: str
    client: str
    year: int


class SocialLinks(BaseModel):
    linkedin: Optional[str] = None
    github: Optional[str] = None
    email: Optional[str] = None


class TeamMember(BaseModel):
    id: int
    name: str
    position: str
    bio: str
    photo_url: str
    social_links: SocialLinks


class Testimonial(BaseModel):
    id: int
    name: str
    company: str
    position: str
    content: str
    avatar_url: str
    rating: int


class FAQ(BaseModel):
    id: int
    question: str
    answer: str


class ContactInfo(BaseModel):
    address: str
    email: str
    phone: str
    hours: str


class ContactMessage(BaseModel):
    name: str
    email: str
    subject: str
    message: str


class ContactResponse(BaseModel):
    success: bool
    message: str


class TechStack(BaseModel):
    items: list[str]
