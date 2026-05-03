import morgan from "morgan";
import connectToDatabase from "../db.js";
import { Title } from "./utils/strings.js";
import express from "express";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(express.json());
//This is logging purpose only and "dev" fro the development environment
app.use(morgan("dev"));

// main router
app.use("/api/auth", authRouter);

export default app;
