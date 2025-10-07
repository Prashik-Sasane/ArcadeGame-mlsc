import express from "express";
import GameResult from "../models/GameResult.js";

const router = express.Router();

router.post("/saveResult", async (req, res) => {
  const { username, score } = req.body;
  const result = new GameResult({ username, score });
  await result.save();
  res.json({ message: "Result saved!" });
});

router.get("/getResults", async (_req, res) => {
  const results = await GameResult.find().sort({ date: -1 });
  res.json(results);
});

export default router;
