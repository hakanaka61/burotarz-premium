Burotarz - Premium Fullstack (Demo)
==================================

Bu paket demo amaçlı premium fullstack proje iskeletidir. İçerisinde:

- backend (FastAPI + SQLAlchemy + Alembic hazır yeri)
- frontend (React + Vite + Recharts demo)
- docker-compose (Postgres + backend)

Lokal çalıştırma:
1. docker-compose up --build
2. Backend: http://localhost:8000
3. Frontend: cd frontend && npm install && npm run dev (veya build/preview)

Not: Bu paket üretime hazır olmak üzere tasarlandı, ancak gerçek bir deploy
öncesi ek güvenlik, migration ve CI/CD ayarları yapılmalıdır.


## Deploy on Render (detailed)
1. Create a new Postgres database on Render (Managed Postgres).
2. Add `DATABASE_URL` env var to Render service or use render.yaml with fromDatabase.
3. Create two services: API (Docker) and Frontend (Static). Use dockerfilePath and build commands from this repo.

If you want, provide GitHub access and I can perform the deployment steps for you (requires repo access).
