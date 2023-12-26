import { ResponseStatus } from '../enums/user.enum';

export interface User {
  id: number;
  name: string;
  age: number;
  company: string;
}

export interface UsersResponse {
  responseStatus: ResponseStatus;
  products?: User[];
}
