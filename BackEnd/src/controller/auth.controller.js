import User from "../models/user.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  console.log("req.body", req.body);

  // Checking that user is already registered or not by using $or operator to check both name and email
  const isUserAlreadyRegistered = await User.findOne({
    $or: [{ name: name }, { email: email }],
  });

  if (isUserAlreadyRegistered) {
    // 409 means conflict, which is appropriate for this case when user with same name or email already exists
    return res.status(409).json({
      message: "User with this name or email already exists",
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

    const token = jwt.sign({ id: newUser?._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(201).json({
      message: "User registered successfully",
      userInfo: {
        name: newUser?.name,
        email: newUser?.email,
        password: newUser?.password,
      },
      token: token,
    });
  } catch (error) {
    console.error("Error occurred while registering user:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default register;
