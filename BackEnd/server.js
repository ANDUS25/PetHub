import connectToDatabase from "./db.js";
import app from "./src/app.js";
import { Title } from "./src/utils/strings.js";

// From here we are producing the error if variable not found in .env file

// Until and unless project doesn't find the DB URL it will throw this error
if (!process.env.DB_CONNECTION) {
  throw new Error(`${Title.CUSTOM_ERROR}:- ${Title.DB_CONNECTION_NOT_DEFINED}`);
}

if (!process.env.JWT_SECRET) {
  throw new Error(`${Title.CUSTOM_ERROR}:- ${Title.JWT_SECRET_NOT_DEFINED}`);
}

app.listen(process.env.PORT, async () => {
  console.log(`${Title.SERVER_RUNNING_ON_PORT} ${process.env.PORT}`);
  await connectToDatabase();
});
