import express, { Router, Request, Response } from "express";
import { ctrlAddUser } from "../../controllers/users/userController";

const addUsers: Router = express.Router();

addUsers.post("/", async (req: Request, res: Response) => {
  const result = await ctrlAddUser(req.body);
  return result;
});

export default addUsers;
