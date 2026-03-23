import connectToDatabase from "./db.js";
import { app } from "./route.js";

(async function () {
  app.listen(process.env.PORT, async () => {
    console.log(`server running on port ${process.env.PORT}`);
    await connectToDatabase();
  });
})();
