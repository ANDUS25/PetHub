import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    // there on connected and error are event listeners of the node js
    mongoose.connection.on("connected", () => {
      console.log("App is connected to the mongo DB database");
    });
    mongoose.connection.on("error", () => {
      console.log("Error occurred while connecting to the mongo db database.");
    });

    await mongoose.connect(process.env.DB_CONNECTION);
  } catch (error) {
    console.log("This error occur from the database connection");
    process.exit(1);
  }
};

export default connectToDatabase;
