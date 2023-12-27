import fs from "fs";
import { User } from "../../types/User";

export const handleGetUsers = (): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    try {
      // Read the JSON file
      const rawData = fs.readFileSync("../db/users.json", "utf-8");
      const users = JSON.parse(rawData);

      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};
