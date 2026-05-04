import mongoose from "mongoose";
import { Title } from "../utils/strings.js";

const OTPSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, Title.EMAIL_REQUIRED],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, Title.USER_IS_REQUIRED],
    },
    otpHash: {
      type: String,
      required: [true, Title.OTP_HASH_IS_REQUIRED],
    },
  },
  { timestamps: true },
);

const OTPModel = mongoose.model("otps", OTPSchema);

export default OTPModel;
