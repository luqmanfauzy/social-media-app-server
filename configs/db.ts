import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log("MongoDB connected successfully.");
  } catch (error) {
    if (error instanceof Error) console.error("DB Error:", error.message);
    else console.error(error);
  }
};

export default connectDB;
