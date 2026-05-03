import { Router } from "express";
import register from "../controller/auth.controller.js";

const authRouter = Router();

// full URL will be http://localhost:3000/api/auth/register
authRouter.post("/register", (req, res) => register(req, res));

export default authRouter;
