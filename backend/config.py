"""
Konfigurasi aplikasi ngeaplikasiyuk API.
"""

from pydantic import BaseModel


class Settings(BaseModel):
    app_name: str = "ngeaplikasiyuk API"
    app_version: str = "1.0.0"
    app_description: str = "Backend API untuk Company Profile ngeaplikasiyuk"
    cors_origins: list[str] = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:3001",
    ]
    debug: bool = True


settings = Settings()
