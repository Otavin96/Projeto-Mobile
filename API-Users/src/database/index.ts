import mongoose from "mongoose";

export const ConnectMongoDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/Users");
};
