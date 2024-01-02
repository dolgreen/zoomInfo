import { Controller, Get } from '@nestjs/common';
import * as fs from 'fs';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    const filePath = '../db/users.json';
    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const users = JSON.parse(fileContent);
      return users;
    } catch (error) {
      console.error('Error reading file:', error);
      return -1;
    }
  }
}
