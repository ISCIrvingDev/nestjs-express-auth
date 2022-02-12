import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';

@Injectable()
export class AuthService {
  constructor(private _userService: UsersService) {}

  async validateUser(userName: string, pass: string) {
    const user = await this._userService.findOne(userName);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
