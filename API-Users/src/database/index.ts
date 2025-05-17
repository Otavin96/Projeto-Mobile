import mongoose from "mongoose";

export const ConnectMongoDB = async () => {
  // await mongoose.connect("mongodb://localhost:27017/Users");
  await mongoose.connect("mongodb+srv://root:root@cluster0.gbqyj0m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
};
