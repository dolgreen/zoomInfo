import {
  // Body,
  Controller,
  Delete,
  Get,
  Param,
  // Post,
  // Put,
  Query,
} from '@nestjs/common';
// import { CreateUserDto } from './types/create-user.dto';
// import { UpdateUserDto } from './types/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // get /users

  @Get()
  getUsers(@Query('company') company: string) {
    const service = new UsersService();
    return service.getUsers(company);
    // const filePath = '../db/users.json';
    // try {
    //   const fileContent = fs.readFileSync(filePath, 'utf-8');
    //   const users = JSON.parse(fileContent);
    //   return users;
    // } catch (error) {
    //   console.error('Error reading file:', error);
    //   return -1;
    // }
  }

  // get /user/:id
  @Get(':id')
  getOneUser(@Param('id') id: string) {
    return { id };
  }
  // post /user
  // @Post()
  // addUser(@Body() createUserDto: CreateUserDto) {
  //   return { name: createUserDto.name };
  // }
  // // put /user/:id
  // @Put(':id')
  // editUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return { id, name: updateUserDto.name };
  // }
  // delete /user/:id
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return { id };
  }
}
