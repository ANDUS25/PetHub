import connectToDatabase from "./db.js";
import app from "./src/app.js";
import Config from "./src/config/Config.js";
import { generateOtp } from "./src/utils/commonUtils.js";
import { Title } from "./src/utils/strings.js";

app.listen(Config.PORT, async () => {
  console.log(`${Title.SERVER_RUNNING_ON_PORT} ${Config.PORT}`);
  await connectToDatabase();
});
