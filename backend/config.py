"""
Konfigurasi aplikasi ngeaplikasiyuk API.
"""

import os

from pydantic import BaseModel

# Default origin untuk dev lokal. Di produksi, override via env CORS_ORIGINS
# (daftar dipisah koma), mis. CORS_ORIGINS="https://ngeaplikasiyuk.com".
_DEFAULT_CORS_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:3001",
]


def _load_cors_origins() -> list[str]:
    raw = os.getenv("CORS_ORIGINS")
    if not raw:
        return _DEFAULT_CORS_ORIGINS
    return [origin.strip() for origin in raw.split(",") if origin.strip()]


class Settings(BaseModel):
    app_name: str = "ngeaplikasiyuk API"
    app_version: str = "1.0.0"
    app_description: str = "Backend API untuk Company Profile ngeaplikasiyuk"
    cors_origins: list[str] = _load_cors_origins()
    debug: bool = os.getenv("DEBUG", "true").lower() == "true"


settings = Settings()
