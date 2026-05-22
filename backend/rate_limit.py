"""
Rate limiter sederhana berbasis IP (in-memory, sliding window).

Catatan: state disimpan per-proses, jadi tidak akurat di balik banyak worker /
load balancer. Untuk produksi skala besar gunakan store bersama (mis. Redis).
Cukup untuk mencegah spam dasar pada endpoint publik.
"""

import time
from collections import defaultdict, deque

from fastapi import HTTPException, Request, status


class RateLimiter:
    def __init__(self, max_requests: int, window_seconds: int):
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self._hits: dict[str, deque[float]] = defaultdict(deque)

    async def __call__(self, request: Request) -> None:
        client_ip = request.client.host if request.client else "unknown"
        now = time.monotonic()
        hits = self._hits[client_ip]

        # Buang timestamp di luar jendela waktu
        while hits and now - hits[0] > self.window_seconds:
            hits.popleft()

        if len(hits) >= self.max_requests:
            raise HTTPException(
                status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                detail="Terlalu banyak permintaan. Silakan coba lagi beberapa saat lagi.",
            )

        hits.append(now)


# Maksimal 5 pesan kontak per IP tiap 60 detik
contact_rate_limiter = RateLimiter(max_requests=5, window_seconds=60)
