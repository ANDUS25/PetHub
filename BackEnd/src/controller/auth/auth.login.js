import User from "../../models/user.model.js";
import { Title } from "../../utils/strings.js";
import crypto from "crypto";
import sessionModel from "../../models/session.model.js";
import jwt from "jsonwebtoken";
import { createCryptoHash, signToken } from "../../utils/commonUtils.js";

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userInfo = await User.findOne({ email });

    if (!userInfo) {
      return res.status(401).json({
        status: Title.ERROR,
        message: Title.WRONG_USER_CREDENTIALS,
      });
    }

    if (!user.verify) {
      return res(401).json({
        status: Title.ERROR,
        message: Title.USER_MAIL_ADDRESS_IS_NOT_VERIFIED,
      });
    }

    const checkUserPassword = createCryptoHash(password);

    if (!checkUserPassword) {
      return res.status(401).json({
        status: Title.ERROR,
        message: Title.WRONG_USER_PASSWORD,
      });
    }

    const refreshToken = signToken({ id: userInfo._id }, "7d");

    const refreshTokenHash = createCryptoHash(refreshToken);

    const session = await sessionModel.create({
      user: userInfo._id,
      refreshTokenHash,
      ip: req.ip,
      userAgent: req.headers["user-agent"],
    });

    const accessToken = signToken(
      {
        id: userInfo._id,
        sessionId: session.id,
      },
      "15m",
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.status(200).json({
      user: userInfo.email,
      status: Title.SUCCESS,
      message: Title.USER_LOGIN_SUCCESSFULLY,
    });
  } catch (error) {
    console.error(Title.ERROR_OCCURRED_IN_LOGIN_CONTROLLER, error);
    res.status(500).json({ message: Title.INTERNAL_SERVER_ERROR });
  }
};

export default login;
