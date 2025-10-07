import mongoose from "mongoose";

const gameResultSchema = new mongoose.Schema({
  username: String,
  score: Number,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("GameResult", gameResultSchema);
