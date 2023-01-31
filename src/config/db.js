import mongoose from "mongoose";

//Established mongooes database connection

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  try {
    const dbOptions = {
      dbName: process.env.DB_NAME, //Database name
    };
    await mongoose.connect(process.env.DATABASE_URL, dbOptions);
    console.log("Database connected successfully...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
