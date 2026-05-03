import jwt from "jsonwebtoken";
import { Title } from "../../utils/strings.js";

const refreshToken = async (req, res) => {
  const getRefreshToken = req.cookies.refreshToken;

  if (!getRefreshToken) {
    return res.status(401).json({
      message: Title.REFRESH_TOKEN_NOT_FOUND,
    });
  }

  const getUserInfo = await jwt.verify(getRefreshToken, process.env.JWT_SECRET);

  const accessToken = jwt.sign(
    { id: getUserInfo?.id },
    process.env.JWT_SECRET,
    {
      expiresIn: "15m",
    },
  );

  // we are checking this because we want to make sure that user can not used the expired refresh token to get a new access token and also we want to make sure that user can not used the revoked refresh token to get a new access token because if we do not check this then user can used the expired or revoked refresh token to get a new access token and then user can use that access token to access the protected routes which is not good for security.
  const refreshTokenHash = await crypto
    .createHash("sha256")
    .update(getRefreshToken)
    .digest("hex");

  const session = await sessionModel.findOne({
    refreshTokenHash: refreshTokenHash,
    revoked: false,
  });

  if (!session) {
    return res.status(401).json({
      status: Title.ERROR,
      message: Title.INVALID_REFRESH_TOKEN,
    });
  }

  // We are creating thi new refresh token because if we want to invalidate the old refresh token then we can do that by not sending this new refresh token to the client and also we can set the expiry time of this new refresh token to be longer than the access token so that the user can use this new refresh token to get a new access token when the old access token expires without having to login again. This is a common practice in authentication systems to enhance security and user experience.
  const newRefreshToken = jwt.sign(
    { id: getUserInfo?.id },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  const newRefreshTokenHash = await crypto
    .createHash("sha256")
    .update(newRefreshToken)
    .digest("hex");

  session.refreshTokenHash = newRefreshTokenHash;

  await session.save();

  res.cookie("refreshToken", newRefreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.status(200).json({
    message: Title.ACCESS_TOKEN_REFRESHED_SUCCESSFULLY,
    accessToken,
  });
};

export default refreshToken;
