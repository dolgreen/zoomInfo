import express, { Router, Request, Response } from "express";
import { ctrlGetUsers } from "../../controllers/users/userController";

const getUsers: Router = express.Router();

getUsers.get("/", async (req: Request, res: Response) => {
  const result = ctrlGetUsers();
  res.send(result);
});

export default getUsers;
