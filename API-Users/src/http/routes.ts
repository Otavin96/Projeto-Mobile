import { Router } from "express";
import { UserController } from "../controllers/UserController";

const routes = Router();
const userController = new UserController();

routes.get("/", async (req, res) => {
  res.send("Hello Word");
});

routes.post("/users/", async (req, res) => {
  userController.create(req, res);
});

routes.get("/users/", async (req, res) => {
  userController.index(req, res);
});

export default routes;
