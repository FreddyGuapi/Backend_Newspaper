import mongoose from "mongoose";
import "dotenv/config";

const MONGODB_URI = process.env.MONGODB_URI;

export const connectToDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Mongodb connected...");
  } catch (error) {
    console.error(error);
  }
};
