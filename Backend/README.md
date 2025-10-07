# Backend (Express + MongoDB)

This service exposes simple endpoints to store and read arcade game results in MongoDB.

## Prerequisites

- Node.js 18+
- MongoDB running locally and accessible at `mongodb://localhost:27017/arcade` (default used in `app.js`)

## Install & run

```bash
npm install
node app.js
```

The server starts on port `5000` by default.

## Environment

The current code connects directly to `mongodb://localhost:27017/arcade` in `app.js`. For custom configs, consider extracting this to an environment variable, for example:

```bash
export MONGODB_URI="mongodb://localhost:27017/arcade"
export PORT=5000
```

And update the code to read from `process.env`.

## API

Base URL: `http://localhost:5000/api/game`

- POST `/saveResult`
  - Body: `{ "username": string, "score": number }`
  - Response: `{ message: "Result saved!" }`

- GET `/getResults`
  - Response: `Array<{ _id, username, score, date }>` sorted by newest first

## Files

- `app.js` — Express app, MongoDB connection, mounts routes
- `routes/gameRoutes.js` — `saveResult` and `getResults` endpoints
- `models/GameResult.js` — Mongoose model for results

## CORS

`cors()` is enabled globally. The frontend (Vite dev server) can call the API from another port during development.

## Notes

- For production, add validation, error handling, and rate limiting.
- Consider using a `.env` file and a process manager like PM2.

