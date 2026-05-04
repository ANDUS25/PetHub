import mongoose from "mongoose";
import { Title } from "../utils/strings.js";

const OTPSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    otpHash: {
      type: String,
      required: [true, "OTp Hash is required"],
    },
  },
  { timestamps: true },
);

const OTPModel = mongoose.model("otps", OTPSchema);

export default OTPModel;
