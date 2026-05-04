import crypto from "crypto";
import { Title } from "../../utils/strings.js";
import sessionModel from "../../models/session.model.js";

const logOut = async (req, res) => {
  const getRefreshToken = req.cookies?.refreshToken;
  try {
    if (!getRefreshToken) {
      return res.status(401).json({
        status: Title.ERROR,
        message: Title.REFRESH_TOKEN_NOT_FOUND,
      });
    }

    const decodeRefreshToken = await crypto
      .createHash("sha256")
      .update(getRefreshToken)
      .digest("hex");

    const session = await sessionModel.findOne({
      refreshTokenHash: decodeRefreshToken,
      revoked: false,
    });

    if (!session) {
      return res.status(401).json({
        status: Title.ERROR,
        message: Title.INVALID_REFRESH_TOKEN,
      });
    }

    session.revoked = true;

    await session.save();

    res.clearCookie("refreshToken");

    res.status(200).json({
      status: Title.SUCCESS,
      message: Title.LOGGED_OUT_SUCCESSFULLY,
    });
  } catch (error) {
    console.error(Title.ERROR_OCCURRED_IN_LOGOUT_CONTROLLER, error);
    res.status(500).json({ message: Title.INTERNAL_SERVER_ERROR });
  }
};

export default logOut;
