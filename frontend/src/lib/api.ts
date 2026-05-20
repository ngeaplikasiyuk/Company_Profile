const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  vision: string;
  mission: string;
  stats: {
    products_released: string;
    client_satisfaction: string;
    expert_support: string;
  };
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PortfolioItem {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image_url: string;
  image_alt: string;
  client: string;
  year: number;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  photo_url: string;
  social_links: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  position: string;
  content: string;
  avatar_url: string;
  rating: number;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
  hours: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface TechStack {
  items: string[];
}

async function fetchApi<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}

export async function getCompanyInfo(): Promise<CompanyInfo> {
  return fetchApi<CompanyInfo>("/api/company");
}

export async function getServices(): Promise<Service[]> {
  return fetchApi<Service[]>("/api/services");
}

export async function getPortfolio(): Promise<PortfolioItem[]> {
  return fetchApi<PortfolioItem[]>("/api/portfolio");
}

export async function getTeam(): Promise<TeamMember[]> {
  return fetchApi<TeamMember[]>("/api/team");
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return fetchApi<Testimonial[]>("/api/testimonials");
}

export async function getFaqs(): Promise<FAQ[]> {
  return fetchApi<FAQ[]>("/api/faqs");
}

export async function getContactInfo(): Promise<ContactInfo> {
  return fetchApi<ContactInfo>("/api/contact-info");
}

export async function getTechStack(): Promise<TechStack> {
  return fetchApi<TechStack>("/api/tech-stack");
}

export async function submitContact(data: ContactMessage): Promise<{ success: boolean; message: string }> {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
