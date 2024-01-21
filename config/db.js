import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `MongoDB CONNECTED SUCCESSFULLY :: ${conn.connection.host}`.red.bold
        .underline
    );
  } catch (error) {
    console.log(
      `Error while connecting to mongoDB database:: ${error}`.bgRed.underline
    );
  }
};

export default connectDB;
