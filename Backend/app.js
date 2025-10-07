import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import gameRoutes from "./routes/gameRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/arcade");

app.use("/api/game", gameRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));