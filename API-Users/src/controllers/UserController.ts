import { Request, Response } from "express";
import { UserService } from "../services/UserService";
const userService = new UserService();

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const user = await userService.create(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao criar usuário" });
    }
  }

  async index(req: Request, res: Response) {
    const users = await userService.findAll();
    return res.json(users);
  }
}
