import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 102, name: 'dan', age: 0, company: 'a' },
    { id: 103, name: 'guy', age: 0, company: 'b' },
    { id: 104, name: 'roy', age: 0, company: 'c' },
  ];

  getUsers(company?: string) {
    if (company) {
      return this.users.filter((user) => user.company === company);
    }
    return this.users;
  }
}
