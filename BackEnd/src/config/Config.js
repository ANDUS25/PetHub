import { Title } from "../utils/strings.js";

if (!process.env.PORT) {
  throw new Error(Title.PORT_MUST_BE_SET);
}
if (!process.env.DB_CONNECTION) {
  throw new Error(Title.MONGO_DB_URL_MUST_BE_SET);
}
if (!process.env.JWT_SECRET) {
  throw new Error(Title.JWT_MUST_BE_SET);
}
if (!process.env.GOOGLE_CLIENT_ID) {
  throw new Error(Title.GOOGLE_CLIENT_ID_MUST_BE_SET);
}
if (!process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error(Title.GOOGLE_CLIENT_SECRET_MUST_BE_SET);
}
if (!process.env.GOOGLE_REFRESH_TOKEN) {
  throw new Error(Title.GOOGLE_REFRESH_TOKEN_MUST_BE_SET);
}
if (!process.env.GOOGLE_USER) {
  throw new Error(Title.GOOGLE_USER_MUST_BE_SET);
}

const Config = {
  PORT: process.env.PORT,
  MONGO_URL: process.env.DB_CONNECTION,
  JWT_SECRET: process.env.JWT_SECRET,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN,
  GOOGLE_USER: process.env.GOOGLE_USER,
};

export default Config;
