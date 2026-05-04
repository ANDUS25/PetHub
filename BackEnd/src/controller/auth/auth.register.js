import crypto from "crypto";
import jwt from "jsonwebtoken";
import sessionModel from "../../models/session.model.js";
import User from "../../models/user.model.js";
import { Title } from "../../utils/strings.js";
import { sendEmail } from "../../services/email.service.js";
import { generateOtp, getMailContent } from "../../utils/commonUtils.js";
import OTPModel from "../../models/otp.model.js";

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

    const otp = generateOtp();
    const otpHtmlContent = getMailContent(otp);

    const otpHash = crypto.createHash("sha256").update(otp).digest("hex");

    await OTPModel.create({
      user: newUser._id,
      email,
      otpHash,
    });

    await sendEmail(
      email,
      "OTP Verification",
      "Welcome onboard",
      otpHtmlContent,
    );

    return res.status(201).json({
      status: Title.SUCCESS,
      message: Title.USER_REGISTERED_SUCCESSFULLY,
      userInfo: {
        name: newUser?.name,
        email: newUser?.email,
        password: newUser?.password,
        verified: newUser?.verify,
      },
    });
  } catch (error) {
    console.error(Title.ERROR_OCCURRED_WHILE_REGISTERING_USER, error);
    return res.status(500).json({
      message: Title.INTERNAL_SERVER_ERROR,
    });
  }
};

export default register;
