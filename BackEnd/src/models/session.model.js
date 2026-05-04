import mongoose from "mongoose";
import { Title } from "../utils/strings.js";

const sessionSchema = new mongoose.Schema(
  {
    user: {
      // type will be the objectId of the user document in the users collection
      type: mongoose.Schema.Types.ObjectId,

      // ref will be the name of the model that we want to reference, in this case it is the User model
      ref: "User",
      required: [true, Title.USER_REFERENCE_IS_REQUIRED_FOR_SESSION],
    },

    refreshTokenHash: {
      type: String,
      required: [true, Title.REFRESH_TOKEN_HASH_REQUIRED],
    },
    ip: {
      type: String,
      required: [true, Title.IP_ADDRESS_REQUIRED],
    },

    // userAgent to recognize which browser user is using to login, it will be useful for security reasons, for example if we detect that the user is logging in from a different browser than usual, we can send an email to the user to notify him about this suspicious activity
    userAgent: {
      type: String,
      required: [true, Title.USER_AGENT_REQUIRED],
    },
    revoked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const sessionModel = mongoose.model("Session", sessionSchema);

export default sessionModel;
