import { Schema } from "mongoose";

export const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});
