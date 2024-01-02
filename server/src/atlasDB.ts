import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
const dbUri =
  process.env.DB_URI ||
  "http://localhost:4444";

async function connectToMongo() {
  try {
    await mongoose.connect(dbUri);
    console.log(dbUri);

    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("An error occurred while connecting to MongoDB:", err);
  }
}

connectToMongo();
