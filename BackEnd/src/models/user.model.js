import mongoose from "mongoose";
import { Title } from "../utils/strings.js";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, Title.USER_NAME_REQUIRED],
    unique: [true, Title.USER_NAME_UNIQUE],
  },
  email: {
    type: String,
    required: [true, Title.EMAIL_REQUIRED],
    unique: [true, Title.EMAIL_UNIQUE],
  },
  password: {
    type: String,
    required: [true, Title.PASSWORD_REQUIRED],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
