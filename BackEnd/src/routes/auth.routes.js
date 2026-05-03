import { Router } from "express";
import register from "../controller/auth/auth.controller.js";
import getMe from "../controller/auth/auth.get-me.js";
import logOut from "../controller/auth/auth.logOut.js";
import refreshToken from "../controller/auth/auth.refreshToken.js";

const authRouter = Router();

// full URL will be http://localhost:3000/api/auth/register
authRouter.post("/register", register);

authRouter.get("/get-me", getMe);

authRouter.get("/refresh-token", refreshToken);

authRouter.get("/logout", logOut);

export default authRouter;
