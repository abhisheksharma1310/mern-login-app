import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to DB: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Conncection to DB Fail: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
