import jwt from "jsonwebtoken";
import sessionModel from "../../models/session.model.js";
import { Title } from "../../utils/strings.js";
import { log } from "console";
import { createToken } from "../../utils/commonUtils.js";

const logOutAll = async (req, res) => {
  const getRefreshToken = req.cookies.refreshToken;

  try {
    if (!getRefreshToken) {
      return res.status(401).json({
        message: Title.ERROR,
      });
    }

    const decodeRefreshToken = createToken(getRefreshToken);

    await sessionModel.updateMany(
      {
        user: decodeRefreshToken.id,
        revoked: false,
      },
      { revoked: true },
    );

    res.clearCookie("refreshToken");

    res.status(200).json({
      status: Title.SUCCESS,
      message: Title.USER_LOGOUT_FROM_ALL_DEVICES,
    });
  } catch (error) {
    console.error(Title.ERROR_OCCURRED_IN_LOGOUT_ALL_CONTROLLER, error);
    return res.status(500).json({
      message: Title.INTERNAL_SERVER_ERROR,
    });
  }
};

export default logOutAll;
