import connectToDatabase from "./db.js";
import { app } from "./route.js";
import { Title } from "./utils/stings.js";

(async function () {
  app.listen(process.env.PORT, async () => {
    console.log(`${Title.SERVER_RUNNING_ON_PORT} ${process.env.PORT}`);
    await connectToDatabase();
  });
})();
