import nodemailer from "nodemailer";
import Config from "../config/Config.js";
import { CommonENum, Title } from "../utils/strings.js";

const transporter = nodemailer.createTransport({
  service: CommonENum.gmail,
  auth: {
    type: CommonENum.OAuth2,
    user: Config.GOOGLE_USER,
    clientId: Config.GOOGLE_CLIENT_ID,
    clientSecret: Config.GOOGLE_CLIENT_SECRET,
    refreshToken: Config.GOOGLE_REFRESH_TOKEN,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error(Title.ERROR_OCCURRED_WHILE_CONNECTING_TO_THE_MAIL_SERVICE);
  } else {
    console.error(Title.MAIL_SERVICE_READY_TO_SEND_MAIL);
  }
});

const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: Config.GOOGLE_USER,
      to: to,
      subject: subject,
      text: text,
      html: html,
    });
  } catch (error) {
    console.error(Title.ERROR_OCCURRED_WHILE_SENDING_MAIL);
  }
};

export { sendEmail };
