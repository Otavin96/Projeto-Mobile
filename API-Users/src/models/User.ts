import { UserSchema } from "@/schemas/userSchema";
import { model } from "mongoose";

export const UserModel = model<IUser>("Users", UserSchema);
