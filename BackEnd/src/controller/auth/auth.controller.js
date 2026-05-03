import User from "../../models/user.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { Title } from "../../utils/strings.js";
import sessionModel from "../../models/session.model.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  // Checking that user is already registered or not by using $or operator to check both name and email
  const isUserAlreadyRegistered = await User.findOne({
    $or: [{ name: name }, { email: email }],
  });

  if (isUserAlreadyRegistered) {
    // 409 means conflict, which is appropriate for this case when user with same name or email already exists
    return res.status(409).json({
      message: Title.USER_EXISTS,
    });
  }

  // This is used for the hashing password
  const hashPassword = await crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  try {
    const newUser = await User.create({
      name: name,
      email: email,
      password: hashPassword,
    });

    // First we create a refresh token and then we create an access token.
    const refreshToken = jwt.sign(
      { id: newUser?._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    const refreshTokenHash = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    // we are creating session to logout user from all the devices which user is currently login
    const session = await sessionModel.create({
      user: newUser?._id,
      refreshTokenHash,
      ip: req.ip,
      userAgent: req.headers["user-agent"],
    });

    console.log("session", session);

    const accessToken = jwt.sign(
      { id: newUser?._id, sessionId: session._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "15m",
      },
    );

    return res.status(201).json({
      status: Title.SUCCESS,
      message: Title.USER_REGISTERED_SUCCESSFULLY,
      userInfo: {
        name: newUser?.name,
        email: newUser?.email,
        password: newUser?.password,
      },
      accessToken,
    });
  } catch (error) {
    console.error("Error occurred while registering user:", error);
    return res.status(500).json({
      message: Title.INTERNAL_SERVER_ERROR,
    });
  }
};

export default register;
