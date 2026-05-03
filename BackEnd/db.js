import mongoose from "mongoose";
import { Title } from "./src/utils/strings.js";

const connectToDatabase = async () => {
  try {
    // there on connected and error are event listeners of the node js
    mongoose.connection.on(Title.CONNECTED, () => {
      console.log(Title.APP_IS_CONNECTED);
    });
    mongoose.connection.on(Title.ERRORl, () => {
      console.log(Title.ERROR_OCCURRED);
    });

    await mongoose.connect(process.env.DB_CONNECTION);
  } catch (error) {
    console.log(Title.ERROR_OCCUR_FROM_DATABASE);
    process.exit(1);
  }
};

export default connectToDatabase;
