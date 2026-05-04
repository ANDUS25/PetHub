import crypto from "crypto";
import OTPModel from "../../models/otp.model.js";
import { Title } from "../../utils/strings.js";
import User from "../../models/user.model.js";

const verifyEmail = async (req, res) => {
  const { otp, email } = req.body;

  const otpHash = crypto.createHash("sha256").update(otp).digest("hex");

  const otpDoc = await OTPModel.findOne({
    otpHash,
    email,
  });

  if (!otpDoc) {
    return res.status(400).json({
      status: Title.ERROR,
      message: Title.INVALID_OTP_MESSAGE,
    });
  }

  const updateUserData = await User.findByIdAndUpdate(otpDoc.user, {
    verify: true,
  });

  const deleteUserOtp = await OTPModel.deleteMany({ email });

  return res.status(200).json({
    status: Title.SUCCESS,
    message: Title.USER_VERIFIED_SUCCESSFULLY,
  });
};

export default verifyEmail;
