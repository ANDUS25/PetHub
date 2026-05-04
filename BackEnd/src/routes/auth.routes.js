import { Router } from "express";
import register from "../controller/auth/auth.register.js";
import getMe from "../controller/auth/auth.get-me.js";
import login from "../controller/auth/auth.login.js";
import logOut from "../controller/auth/auth.logOut.js";
import logOutAll from "../controller/auth/auth.logOutAll.js";
import refreshToken from "../controller/auth/auth.refreshToken.js";
import verifyEmail from "../controller/auth/auth.verifyEmail.js";

const authRouter = Router();

// full URL will be http://localhost:3000/api/auth/register
authRouter.post("/register", register);

authRouter.get("/get-me", getMe);

authRouter.get("/refresh-token", refreshToken);

authRouter.get("/logout", logOut);

authRouter.get("/logout-all", logOutAll);

authRouter.post("/login", login);

authRouter.post("/verify-email", verifyEmail);

export default authRouter;
