import { UserModel } from "@/models/User";

export class UserService {
  async create(input: IUser) {
    const user = await UserModel.create(input);
    return user;
  }

  async findAll() {
    return await UserModel.find();
  }
}
