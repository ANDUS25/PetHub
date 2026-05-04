import { Router } from "express";
import getMe from "../controller/auth/auth.get-me.js";
import login from "../controller/auth/auth.login.js";
import logOut from "../controller/auth/auth.logOut.js";
import logOutAll from "../controller/auth/auth.logOutAll.js";
import refreshToken from "../controller/auth/auth.refreshToken.js";
import register from "../controller/auth/auth.register.js";
import verifyEmail from "../controller/auth/auth.verifyEmail.js";
import { EndPoint } from "../utils/strings.js";

const authRouter = Router();

// full URL will be http://localhost:3000/api/auth/register
authRouter.post(EndPoint.REGISTER, register);

authRouter.get(EndPoint.GET_ME, getMe);

authRouter.get(EndPoint.REFRESH_TOKEN, refreshToken);

authRouter.get(EndPoint.LOGOUT, logOut);

authRouter.get(EndPoint.LOGOUT_ALL, logOutAll);

authRouter.post(EndPoint.LOGIN, login);

authRouter.post(EndPoint.VERIFY_EMAIL, verifyEmail);

export default authRouter;
