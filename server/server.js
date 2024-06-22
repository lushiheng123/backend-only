import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", userRouter);
app.use("/api/recipes", recipesRouter);
mongoose.connect(process.env.MONGO_URI);
app.listen(process.env.PORT, () => {
  console.log("server started");
});
