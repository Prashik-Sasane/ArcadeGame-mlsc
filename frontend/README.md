# Frontend (React + Vite + TypeScript)

This is the arcade game's UI. It includes a landing page, the canvas-based game, and a final links page.

## Prerequisites

- Node.js 18+

## Install & run

```bash
npm install
npm run dev
```

The dev server starts on a Vite port (commonly `5173`); the terminal prints the exact URL.

## Available scripts

- `npm run dev` — start dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview built app

## Routes

Key pages live under `src/pages/`:

- `Landing.tsx` — entry page with event info and a link to `/game`
- `Game.tsx` — the canvas-based shooter game
- `Final.tsx` — links displayed after game completion

## Game controls

- Move: Arrow keys or WASD
- Shoot: Space bar (or mouse click on canvas)

## Backend integration

- Backend base URL during local dev: `http://localhost:5000/api/game`
- Endpoints:
  - `POST /saveResult` with `{ username, score }`
  - `GET /getResults` returns recent results

When running both servers locally, CORS is enabled in the backend, so the frontend can call it from a different port.

## Useful links

- Vite docs: `https://vite.dev`
- React docs: `https://react.dev`
- Router docs: `https://reactrouter.com/`
