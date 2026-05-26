"""
Seed data untuk ngeaplikasiyuk company profile.
"""

COMPANY_INFO = {
    "name": "ngeaplikasiyuk",
    "tagline": "Mengubah Ide Menjadi Produk Digital Berkualitas",
    "description": "Kami adalah kolektif kreator, insinyur, dan pemikir strategis yang mendedikasikan diri untuk membangun infrastruktur digital yang elegan dan fungsional.",
    "vision": "Menjadi mitra teknologi terpercaya untuk setiap bisnis yang ingin bertransformasi secara digital.",
    "mission": "Memberikan solusi perangkat lunak berkualitas tinggi dengan estetika premium dan performa tanpa kompromi.",
    "stats": {
        "products_released": "10+",
        "client_satisfaction": "98%",
        "expert_support": "24/7",
    },
}

SERVICES = [
    {
        "id": 1,
        "title": "Custom Software",
        "description": "Pengembangan perangkat lunak kustom yang dirancang khusus sesuai kebutuhan bisnis Anda.",
        "icon": "terminal",
        "features": ["Web App", "Mobile App", "Desktop App", "API Development"],
    },
    {
        "id": 2,
        "title": "Cloud & devops",
        "description": "Infrastruktur cloud dan pipeline CI/CD untuk deployment yang cepat dan andal.",
        "icon": "cloud_done",
        "features": ["AWS", "GCP", "Docker", "Kubernetes"],
    },
    {
        "id": 3,
        "title": "Dashboard Analytics",
        "description": "Visualisasi data real-time untuk pengambilan keputusan berbasis data.",
        "icon": "analytics",
        "features": ["Real-time Dashboard", "BI Reports", "Data Pipeline"],
    },
    {
        "id": 4,
        "title": "UI/UX Design",
        "description": "Desain antarmuka yang intuitif dan pengalaman pengguna yang berkesan.",
        "icon": "auto_awesome",
        "features": ["Wireframing", "Prototyping", "User Research", "Design System"],
    },
    {
        "id": 5,
        "title": "IoT Integration",
        "description": "Menghubungkan perangkat fisik dengan sistem digital untuk automasi cerdas.",
        "icon": "settings_input_component",
        "features": ["Sensor Integration", "Edge Computing", "MQTT"],
    },
    {
        "id": 6,
        "title": "AI Integration",
        "description": "Integrasi kecerdasan buatan untuk meningkatkan efisiensi dan inovasi.",
        "icon": "memory",
        "features": ["Machine Learning", "NLP", "Computer Vision", "LLM Integration"],
    },
]

PORTFOLIO = [
    {
        "id": 1,
        "title": "CloudCore Analytics",
        "subtitle": "Enterprise Data Solution",
        "category": "Web App",
        "description": "Platform analitik data enterprise dengan visualisasi real-time dan dashboard interaktif.",
        "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuB9cqe6x1Z6SwL4WXBtjH8BB7J9vs_kIyC21wJVaVHl19oWd-NFvouech92kOcpFXFegmAgzC1OQnIR5XKp6x0qzD0y5EdB4JFiPquajtZeidKzDwx88T1C-xCnPu4RCHTXjQi6k3YPxnQvU-hsKFHAuZIip9oATqvTXhYZeZ_lq_9l9XT84Z2TuVLAavBpS7-qm5SQnpKOd8IaMTwFbvg6AsKq8IFILmNcYz8b9hRFM85-alOfCUXfRJx9vhVyLbdyrC0CKRyHzg4",
        "image_alt": "Platform analitik digital CloudCore dengan visualisasi data modern",
        "client": "PT DataKita",
        "year": 2024,
    },
    {
        "id": 2,
        "title": "Nexus FinTech",
        "subtitle": "Modern Banking Experience",
        "category": "Mobile App",
        "description": "Aplikasi perbankan digital dengan UI minimalis dan pengalaman pengguna yang seamless.",
        "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuCTyDCmEcZZeW6jlj0cRm18xCCRPYLCCKOlKCXCA_Sk_Zuy6c-m6Ei8m35F2uu84s5zCNzYqKdNxOUZftMvJBW1oqCKTZqGNDxUJD89Z7LIyFbaoB7WQtqb_LM0pod8uEI89X88hk1BxkaARVKot99R7M4b7WKJETzTIcIIRYwzT3_D8AYEmmOtsz6mjWd8VKP7zrPiAQcLyNYx6qtBLDMJQ_3787PCZ_fo29Rx-XoKxsQyqwwmrOJE_3eppod8gE4TYOjXNWUGHlQ",
        "image_alt": "Aplikasi mobile Nexus FinTech dengan UI finansial minimalis",
        "client": "Bank Nusantara",
        "year": 2024,
    },
    {
        "id": 3,
        "title": "Pulse Workflow",
        "subtitle": "Team Productivity Suite",
        "category": "Web App",
        "description": "Platform manajemen proyek dengan layout bento-grid dan kolaborasi real-time.",
        "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuB3JnjWgXy0yP6C7AoH424d9nUzJcnohZO47NSp6P5J8USm8kMUqC4ijP2F30lQrfaMwm4POBKqeiWPNiiufDQ5qCHeADawgHUkuqthinLw1Zg6zA9Ep3sZBMqf4HFEqhcEyUxM2k2lvkIgN7dMeb2hTINOBW0cC3fEJRDA8Y6tZxxR5g6Xc1-Rm2NnO3QhUAZUZySJRORlB22KZIWdlJCB3Y6RONV9emlkpxb56VvmJMk8RX_QwbUXd1jk46QvbIGBpWM80gtZE_g",
        "image_alt": "Tool manajemen Pulse Workflow dengan layout bento-grid",
        "client": "Startup Hub ID",
        "year": 2023,
    },
]

TEAM = [
    {
        "id": 1,
        "name": "Gusti Raka Ananto",
        "position": "Founder",
        "bio": "Visioner teknologi dengan 10+ tahun pengalaman di industri software development.",
        "photo_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuCUa7E_QyS0zTo5yis11P80RoCd9kYtHOKWHAqSzbxR_AEe-C8YQtN6uADDI4saAbuVOYWGqTUyW1YWciAllFVvnBhZZin0kxbgAxx2Mbu0T-pTakpTuZ_vGTQuaScvPhhRqlW8rzIzA6RoMkV7LQYEx0BtHB-xc9ilMwX4Owbpkuh-jHy3cmM-eYTmsr8WXmDxyxXPWniK_u0opGTIvpQ1RLlKc6udLADctSmlHn8jzrhAkVJwyJ8l-cut7e3xtAgus3jpXq2aJaY",
        "social_links": {
            "linkedin": "https://linkedin.com/in/gustiraaka",
            "github": "https://github.com/gustirakaa",
            "email": "gustiraka2004@ngeaplikasiyuk.com",
        },
    },
    {
        "id": 2,
        "name": "Muhammad Faiz",
        "position": "CO-Founder",
        "bio": "Full-stack engineer yang passionate dengan arsitektur scalable dan clean code.",
        "photo_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuB9cqe6x1Z6SwL4WXBtjH8BB7J9vs_kIyC21wJVaVHl19oWd-NFvouech92kOcpFXFegmAgzC1OQnIR5XKp6x0qzD0y5EdB4JFiPquajtZeidKzDwx88T1C-xCnPu4RCHTXjQi6k3YPxnQvU-hsKFHAuZIip9oATqvTXhYZeZ_lq_9l9XT84Z2TuVLAavBpS7-qm5SQnpKOd8IaMTwFbvg6AsKq8IFILmNcYz8b9hRFM85-alOfCUXfRJx9vhVyLbdyrC0CKRyHzg4",
        "social_links": {
            "linkedin": "https://linkedin.com/in/muhammadfaiz",
            "github": "https://github.com/muhammadfaiz",
            "email": "muhammadfaiz@ngeaplikasiyuk.com",
        },
    },
    {
        "id": 3,
        "name": "Yesi Sukmawati",
        "position": "CEO",
        "bio": "UI/UX designer dengan mata tajam untuk estetika dan pengalaman pengguna premium.",
        "photo_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuCTyDCmEcZZeW6jlj0cRm18xCCRPYLCCKOlKCXCA_Sk_Zuy6c-m6Ei8m35F2uu84s5zCNzYqKdNxOUZftMvJBW1oqCKTZqGNDxUJD89Z7LIyFbaoB7WQtqb_LM0pod8uEI89X88hk1BxkaARVKot99R7M4b7WKJETzTIcIIRYwzT3_D8AYEmmOtsz6mjWd8VKP7zrPiAQcLyNYx6qtBLDMJQ_3787PCZ_fo29Rx-XoKxsQyqwwmrOJE_3eppod8gE4TYOjXNWUGHlQ",
        "social_links": {
            "linkedin": "https://linkedin.com/in/yesisukmawati",
            "email": "yesi@ngeaplikasiyuk.com",
        },
    },
    {
        "id": 4,
        "name": "Kaila Fiorenza Gampo",
        "position": "CEO",
        "bio": "Ahli manajemen proyek yang memastikan setiap produk dikirim tepat waktu dengan kualitas terbaik.",
        "photo_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuB3JnjWgXy0yP6C7AoH424d9nUzJcnohZO47NSp6P5J8USm8kMUqC4ijP2F30lQrfaMwm4POBKqeiWPNiiufDQ5qCHeADawgHUkuqthinLw1Zg6zA9Ep3sZBMqf4HFEqhcEyUxM2k2lvkIgN7dMeb2hTINOBW0cC3fEJRDA8Y6tZxxR5g6Xc1-Rm2NnO3QhUAZUZySJRORlB22KZIWdlJCB3Y6RONV9emlkpxb56VvmJMk8RX_QwbUXd1jk46QvbIGBpWM80gtZE_g",
        "social_links": {
            "linkedin": "https://linkedin.com/in/kailafiorenza",
            "email": "kaila@ngeaplikasiyuk.com",
        },
    },
]

TESTIMONIALS = [
    {
        "id": 1,
        "name": "Budi Santoso",
        "company": "PT DataKita",
        "position": "CEO",
        "content": "ngeaplikasiyuk berhasil mentransformasi sistem analitik kami dari nol menjadi platform enterprise yang solid. Tim mereka sangat profesional dan responsif.",
        "avatar_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuCUa7E_QyS0zTo5yis11P80RoCd9kYtHOKWHAqSzbxR_AEe-C8YQtN6uADDI4saAbuVOYWGqTUyW1YWciAllFVvnBhZZin0kxbgAxx2Mbu0T-pTakpTuZ_vGTQuaScvPhhRqlW8rzIzA6RoMkV7LQYEx0BtHB-xc9ilMwX4Owbpkuh-jHy3cmM-eYTmsr8WXmDxyxXPWniK_u0opGTIvpQ1RLlKc6udLADctSmlHn8jzrhAkVJwyJ8l-cut7e3xtAgus3jpXq2aJaY",
        "rating": 5,
    },
    {
        "id": 2,
        "name": "Diana Kusuma",
        "company": "Bank Nusantara",
        "position": "VP of Digital",
        "content": "Kualitas desain UI/UX dari ngeaplikasiyuk benar-benar di level yang berbeda. Aplikasi mobile banking kami mendapat rating 4.8 di Play Store sejak peluncuran.",
        "avatar_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuB9cqe6x1Z6SwL4WXBtjH8BB7J9vs_kIyC21wJVaVHl19oWd-NFvouech92kOcpFXFegmAgzC1OQnIR5XKp6x0qzD0y5EdB4JFiPquajtZeidKzDwx88T1C-xCnPu4RCHTXjQi6k3YPxnQvU-hsKFHAuZIip9oATqvTXhYZeZ_lq_9l9XT84Z2TuVLAavBpS7-qm5SQnpKOd8IaMTwFbvg6AsKq8IFILmNcYz8b9hRFM85-alOfCUXfRJx9vhVyLbdyrC0CKRyHzg4",
        "rating": 5,
    },
    {
        "id": 3,
        "name": "Hendra Wijaya",
        "company": "Startup Hub ID",
        "position": "Founder",
        "content": "Kolaborasi dengan ngeaplikasiyuk sangat menyenangkan. Mereka tidak hanya membangun aplikasi, tapi juga memberikan insight strategis yang sangat berharga.",
        "avatar_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuCTyDCmEcZZeW6jlj0cRm18xCCRPYLCCKOlKCXCA_Sk_Zuy6c-m6Ei8m35F2uu84s5zCNzYqKdNxOUZftMvJBW1oqCKTZqGNDxUJD89Z7LIyFbaoB7WQtqb_LM0pod8uEI89X88hk1BxkaARVKot99R7M4b7WKJETzTIcIIRYwzT3_D8AYEmmOtsz6mjWd8VKP7zrPiAQcLyNYx6qtBLDMJQ_3787PCZ_fo29Rx-XoKxsQyqwwmrOJE_3eppod8gE4TYOjXNWUGHlQ",
        "rating": 5,
    },
]

FAQS = [
    {
        "id": 1,
        "question": "Berapa lama pengerjaan?",
        "answer": "Estimasi pengerjaan bervariasi mulai dari 4 minggu hingga 4 bulan, tergantung pada kompleksitas fitur dan lingkup proyek.",
    },
    {
        "id": 2,
        "question": "Biaya maintenance?",
        "answer": "Kami menawarkan paket maintenance bulanan yang mencakup perbaikan bug, pembaruan keamanan, dan dukungan teknis 24/7.",
    },
    {
        "id": 3,
        "question": "Apakah ada garansi bug?",
        "answer": "Tentu, kami memberikan masa garansi perbaikan bug gratis selama 3 bulan setelah peluncuran aplikasi Anda.",
    },
    {
        "id": 4,
        "question": "Teknologi apa yang digunakan?",
        "answer": "Kami menggunakan stack modern seperti React, Flutter, Node.js, dan cloud native infrastructure untuk hasil optimal.",
    },
]

CONTACT_INFO = {
    "address": "Jl. Teknologi No. 42, Bandung, Indonesia",
    "email": "hello@ngeaplikasiyuk.com",
    "phone": "+62 812 3456 7890",
    "hours": "Senin - Jumat, 09:00 - 18:00 WIB",
}

TECH_STACK = {
    "items": ["React", "HTML5", "CSS3", "JS/TS", "Python", "Golang", "C++", "Node.js", "Vue", "DLL"]
}

"""
Seed data untuk ngeaplikasiyuk company profile.
"""

COMPANY_INFO = {
    "name": "ngeaplikasiyuk",
    "tagline": "Mengubah Ide Menjadi Produk Digital Berkualitas",
    "description": "Kami adalah kolektif kreator, insinyur, dan pemikir strategis yang mendedikasikan diri untuk membangun infrastruktur digital yang elegan dan fungsional.",
    "vision": "Menjadi mitra teknologi terpercaya untuk setiap bisnis yang ingin bertransformasi secara digital.",
    "mission": "Memberikan solusi perangkat lunak berkualitas tinggi dengan estetika premium dan performa tanpa kompromi.",
    "stats": {
        "products_released": "10+",
        "client_satisfaction": "98%",
        "expert_support": "24/7",
    },
}

SERVICES = [
    {
        "id": 1,
        "title": "custom software",
        "description": "Pengembangan perangkat lunak kustom yang dirancang khusus sesuai kebutuhan bisnis Anda.",
        "icon": "terminal",
        "features": ["Web App", "Mobile App", "Desktop App", "API Development"],
    },
    {
        "id": 2,
        "title": "Cloud & devops",
        "description": "Infrastruktur cloud dan pipeline CI/CD untuk deployment yang cepat dan andal.",
        "icon": "cloud_done",
        "features": ["AWS", "GCP", "Docker", "Kubernetes"],
    },
    {
        "id": 3,
        "title": "dashboard analitik",
        "description": "Visualisasi data real-time untuk pengambilan keputusan berbasis data.",
        "icon": "analytics",
        "features": ["Real-time Dashboard", "BI Reports", "Data Pipeline"],
    },
    {
        "id": 4,
        "title": "UI/UX Design",
        "description": "Desain antarmuka yang intuitif dan pengalaman pengguna yang berkesan.",
        "icon": "auto_awesome",
        "features": ["Wireframing", "Prototyping", "User Research", "Design System"],
    },
    {
        "id": 5,
        "title": "IoT Integration",
        "description": "Menghubungkan perangkat fisik dengan sistem digital untuk automasi cerdas.",
        "icon": "settings_input_component",
        "features": ["Sensor Integration", "Edge Computing", "MQTT"],
    },
    {
        "id": 6,
        "title": "AI Integration",
        "description": "Integrasi kecerdasan buatan untuk meningkatkan efisiensi dan inovasi.",
        "icon": "memory",
        "features": ["Machine Learning", "NLP", "Computer Vision", "LLM Integration"],
    },
]

PORTFOLIO = [
    {
        "id": 1,
        "title": "CloudCore Analytics",
        "subtitle": "Enterprise Data Solution",
        "category": "Web App",
        "description": "Platform analitik data enterprise dengan visualisasi real-time dan dashboard interaktif.",
        "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuB9cqe6x1Z6SwL4WXBtjH8BB7J9vs_kIyC21wJVaVHl19oWd-NFvouech92kOcpFXFegmAgzC1OQnIR5XKp6x0qzD0y5EdB4JFiPquajtZeidKzDwx88T1C-xCnPu4RCHTXjQi6k3YPxnQvU-hsKFHAuZIip9oATqvTXhYZeZ_lq_9l9XT84Z2TuVLAavBpS7-qm5SQnpKOd8IaMTwFbvg6AsKq8IFILmNcYz8b9hRFM85-alOfCUXfRJx9vhVyLbdyrC0CKRyHzg4",
        "image_alt": "Platform analitik digital CloudCore dengan visualisasi data modern",
        "client": "PT DataKita",
        "year": 2024,
    },
    {
        "id": 2,
        "title": "Nexus FinTech",
        "subtitle": "Modern Banking Experience",
        "category": "Mobile App",
        "description": "Aplikasi perbankan digital dengan UI minimalis dan pengalaman pengguna yang seamless.",
        "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuCTyDCmEcZZeW6jlj0cRm18xCCRPYLCCKOlKCXCA_Sk_Zuy6c-m6Ei8m35F2uu84s5zCNzYqKdNxOUZftMvJBW1oqCKTZqGNDxUJD89Z7LIyFbaoB7WQtqb_LM0pod8uEI89X88hk1BxkaARVKot99R7M4b7WKJETzTIcIIRYwzT3_D8AYEmmOtsz6mjWd8VKP7zrPiAQcLyNYx6qtBLDMJQ_3787PCZ_fo29Rx-XoKxsQyqwwmrOJE_3eppod8gE4TYOjXNWUGHlQ",
        "image_alt": "Aplikasi mobile Nexus FinTech dengan UI finansial minimalis",
        "client": "Bank Nusantara",
        "year": 2024,
    },
    {
        "id": 3,
        "title": "Pulse Workflow",
        "subtitle": "Team Productivity Suite",
        "category": "Web App",
        "description": "Platform manajemen proyek dengan layout bento-grid dan kolaborasi real-time.",
        "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuB3JnjWgXy0yP6C7AoH424d9nUzJcnohZO47NSp6P5J8USm8kMUqC4ijP2F30lQrfaMwm4POBKqeiWPNiiufDQ5qCHeADawgHUkuqthinLw1Zg6zA9Ep3sZBMqf4HFEqhcEyUxM2k2lvkIgN7dMeb2hTINOBW0cC3fEJRDA8Y6tZxxR5g6Xc1-Rm2NnO3QhUAZUZySJRORlB22KZIWdlJCB3Y6RONV9emlkpxb56VvmJMk8RX_QwbUXd1jk46QvbIGBpWM80gtZE_g",
        "image_alt": "Tool manajemen Pulse Workflow dengan layout bento-grid",
        "client": "Startup Hub ID",
        "year": 2023,
    },
]

TEAM = [
    {
        "id": 1,
        "name": "Gusti Raka Ananto",
        "position": "Founder",
        "bio": "Visioner teknologi dengan 10+ tahun pengalaman di industri software development.",
        "photo_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuCUa7E_QyS0zTo5yis11P80RoCd9kYtHOKWHAqSzbxR_AEe-C8YQtN6uADDI4saAbuVOYWGqTUyW1YWciAllFVvnBhZZin0kxbgAxx2Mbu0T-pTakpTuZ_vGTQuaScvPhhRqlW8rzIzA6RoMkV7LQYEx0BtHB-xc9ilMwX4Owbpkuh-jHy3cmM-eYTmsr8WXmDxyxXPWniK_u0opGTIvpQ1RLlKc6udLADctSmlHn8jzrhAkVJwyJ8l-cut7e3xtAgus3jpXq2aJaY",
        "social_links": {
            "linkedin": "https://linkedin.com/in/gustiraaka",
            "github": "https://github.com/gustirakaa",
            "email": "gustiraka2004@ngeaplikasiyuk.com",
        },
    },
    {
        "id": 2,
        "name": "Muhammad Faiz",
        "position": "CO-Founder",
        "bio": "Full-stack engineer yang passionate dengan arsitektur scalable dan clean code.",
        "photo_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuB9cqe6x1Z6SwL4WXBtjH8BB7J9vs_kIyC21wJVaVHl19oWd-NFvouech92kOcpFXFegmAgzC1OQnIR5XKp6x0qzD0y5EdB4JFiPquajtZeidKzDwx88T1C-xCnPu4RCHTXjQi6k3YPxnQvU-hsKFHAuZIip9oATqvTXhYZeZ_lq_9l9XT84Z2TuVLAavBpS7-qm5SQnpKOd8IaMTwFbvg6AsKq8IFILmNcYz8b9hRFM85-alOfCUXfRJx9vhVyLbdyrC0CKRyHzg4",
        "social_links": {
            "linkedin": "https://linkedin.com/in/muhammadfaiz",
            "github": "https://github.com/muhammadfaiz",
            "email": "muhammadfaiz@ngeaplikasiyuk.com",
        },
    },
    {
        "id": 3,
        "name": "Yesi Sukmawati",
        "position": "CEO",
        "bio": "UI/UX designer dengan mata tajam untuk estetika dan pengalaman pengguna premium.",
        "photo_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuCTyDCmEcZZeW6jlj0cRm18xCCRPYLCCKOlKCXCA_Sk_Zuy6c-m6Ei8m35F2uu84s5zCNzYqKdNxOUZftMvJBW1oqCKTZqGNDxUJD89Z7LIyFbaoB7WQtqb_LM0pod8uEI89X88hk1BxkaARVKot99R7M4b7WKJETzTIcIIRYwzT3_D8AYEmmOtsz6mjWd8VKP7zrPiAQcLyNYx6qtBLDMJQ_3787PCZ_fo29Rx-XoKxsQyqwwmrOJE_3eppod8gE4TYOjXNWUGHlQ",
        "social_links": {
            "linkedin": "https://linkedin.com/in/yesisukmawati",
            "email": "yesi@ngeaplikasiyuk.com",
        },
    },
    {
        "id": 4,
        "name": "Kaila Fiorenza Gampo",
        "position": "CEO",
        "bio": "Ahli manajemen proyek yang memastikan setiap produk dikirim tepat waktu dengan kualitas terbaik.",
        "photo_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuB3JnjWgXy0yP6C7AoH424d9nUzJcnohZO47NSp6P5J8USm8kMUqC4ijP2F30lQrfaMwm4POBKqeiWPNiiufDQ5qCHeADawgHUkuqthinLw1Zg6zA9Ep3sZBMqf4HFEqhcEyUxM2k2lvkIgN7dMeb2hTINOBW0cC3fEJRDA8Y6tZxxR5g6Xc1-Rm2NnO3QhUAZUZySJRORlB22KZIWdlJCB3Y6RONV9emlkpxb56VvmJMk8RX_QwbUXd1jk46QvbIGBpWM80gtZE_g",
        "social_links": {
            "linkedin": "https://linkedin.com/in/kailafiorenza",
            "email": "kaila@ngeaplikasiyuk.com",
        },
    },
]

TESTIMONIALS = [
    {
        "id": 1,
        "name": "Budi Santoso",
        "company": "PT DataKita",
        "position": "CEO",
        "content": "ngeaplikasiyuk berhasil mentransformasi sistem analitik kami dari nol menjadi platform enterprise yang solid. Tim mereka sangat profesional dan responsif.",
        "avatar_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuCUa7E_QyS0zTo5yis11P80RoCd9kYtHOKWHAqSzbxR_AEe-C8YQtN6uADDI4saAbuVOYWGqTUyW1YWciAllFVvnBhZZin0kxbgAxx2Mbu0T-pTakpTuZ_vGTQuaScvPhhRqlW8rzIzA6RoMkV7LQYEx0BtHB-xc9ilMwX4Owbpkuh-jHy3cmM-eYTmsr8WXmDxyxXPWniK_u0opGTIvpQ1RLlKc6udLADctSmlHn8jzrhAkVJwyJ8l-cut7e3xtAgus3jpXq2aJaY",
        "rating": 5,
    },
    {
        "id": 2,
        "name": "Diana Kusuma",
        "company": "Bank Nusantara",
        "position": "VP of Digital",
        "content": "Kualitas desain UI/UX dari ngeaplikasiyuk benar-benar di level yang berbeda. Aplikasi mobile banking kami mendapat rating 4.8 di Play Store sejak peluncuran.",
        "avatar_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuB9cqe6x1Z6SwL4WXBtjH8BB7J9vs_kIyC21wJVaVHl19oWd-NFvouech92kOcpFXFegmAgzC1OQnIR5XKp6x0qzD0y5EdB4JFiPquajtZeidKzDwx88T1C-xCnPu4RCHTXjQi6k3YPxnQvU-hsKFHAuZIip9oATqvTXhYZeZ_lq_9l9XT84Z2TuVLAavBpS7-qm5SQnpKOd8IaMTwFbvg6AsKq8IFILmNcYz8b9hRFM85-alOfCUXfRJx9vhVyLbdyrC0CKRyHzg4",
        "rating": 5,
    },
    {
        "id": 3,
        "name": "Hendra Wijaya",
        "company": "Startup Hub ID",
        "position": "Founder",
        "content": "Kolaborasi dengan ngeaplikasiyuk sangat menyenangkan. Mereka tidak hanya membangun aplikasi, tapi juga memberikan insight strategis yang sangat berharga.",
        "avatar_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuCTyDCmEcZZeW6jlj0cRm18xCCRPYLCCKOlKCXCA_Sk_Zuy6c-m6Ei8m35F2uu84s5zCNzYqKdNxOUZftMvJBW1oqCKTZqGNDxUJD89Z7LIyFbaoB7WQtqb_LM0pod8uEI89X88hk1BxkaARVKot99R7M4b7WKJETzTIcIIRYwzT3_D8AYEmmOtsz6mjWd8VKP7zrPiAQcLyNYx6qtBLDMJQ_3787PCZ_fo29Rx-XoKxsQyqwwmrOJE_3eppod8gE4TYOjXNWUGHlQ",
        "rating": 5,
    },
]

FAQS = [
    {
        "id": 1,
        "question": "Berapa lama pengerjaan?",
        "answer": "Estimasi pengerjaan bervariasi mulai dari 4 minggu hingga 4 bulan, tergantung pada kompleksitas fitur dan lingkup proyek.",
    },
    {
        "id": 2,
        "question": "Biaya maintenance?",
        "answer": "Kami menawarkan paket maintenance bulanan yang mencakup perbaikan bug, pembaruan keamanan, dan dukungan teknis 24/7.",
    },
    {
        "id": 3,
        "question": "Apakah ada garansi bug?",
        "answer": "Tentu, kami memberikan masa garansi perbaikan bug gratis selama 3 bulan setelah peluncuran aplikasi Anda.",
    },
    {
        "id": 4,
        "question": "Teknologi apa yang digunakan?",
        "answer": "Kami menggunakan stack modern seperti React, Flutter, Node.js, dan cloud native infrastructure untuk hasil optimal.",
    },
]

CONTACT_INFO = {
    "address": "Jl. Teknologi No. 42, Bandung, Indonesia",
    "email": "hello@ngeaplikasiyuk.com",
    "phone": "+62 812 3456 7890",
    "hours": "Senin - Jumat, 09:00 - 18:00 WIB",
}

TECH_STACK = {
    "items": ["React", "HTML5", "CSS3", "JS/TS", "Python", "Golang", "C++", "Node.js", "Vue", "DLL"]
}
