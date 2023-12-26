import fs from "fs";
import { User } from "../../types/User";

export const handleGetUsers = (age: number): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    try {
      // Read the JSON file
      const rawData = fs.readFileSync("../db/users.json", "utf-8");
      const users = JSON.parse(rawData);
      const filteredUsers = users.filter((user: User) => {
        return user.age > age;
      });
      //   console.log(filteredUsers);

      resolve(filteredUsers);
    } catch (error) {
      reject(error);
    }
  });
};
