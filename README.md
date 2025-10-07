# ArcadeGame-mlsc

A full‑stack arcade mini‑game built with a React + Vite frontend and an Express + MongoDB backend. New contributors can use this README to get the whole project running end‑to‑end in a few minutes.

### Monorepo layout

```
ArcadeGame-mlsc/
  Backend/        # Express API + MongoDB models and routes
  frontend/       # React + Vite app with the game and pages
```

### Prerequisites

- Node.js 18+ and npm
- MongoDB running locally (defaults to `mongodb://localhost:27017/arcade`)

### Quick start

1) Install dependencies (run once per workspace):

```bash
cd Backend && npm install
cd ../frontend && npm install
```

2) Start the backend API (port 5000):

```bash
cd Backend && node app.js
```

3) Start the frontend dev server (default Vite port, typically 5173):

```bash
cd frontend && npm run dev
```

4) Open the app in your browser (Vite will print the exact URL), then navigate to the game from the landing page.

### Backend API overview

- Base URL: `http://localhost:5000/api/game`
- Endpoints:
  - `POST /saveResult` → persist `{ username, score }` to MongoDB
  - `GET /getResults` → fetch recent game results (sorted by newest)

See detailed setup and API examples in `Backend/README.md`.

### Frontend overview

- React + Vite app with routes for landing, game canvas, and final links page.
- Uses assets and simple canvas rendering for the arcade gameplay.

See usage, routes, and integration notes in `frontend/README.md`.

### Useful links

- Backend docs: `Backend/README.md`
- Frontend docs: `frontend/README.md`
- Vite: `https://vite.dev`
- Express: `https://expressjs.com/`
- MongoDB: `https://www.mongodb.com/`