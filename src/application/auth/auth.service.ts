// Falta implmentar:
// "bcrypt" para
//   * Encriptar la contraseña
//   * Comparar la contraseña encriptada
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/modules/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private _userService: UsersService,
    private _jwtService: JwtService,
  ) {}

  async validateUser(userName: string, pass: string) {
    const user = await this._userService.findOne(userName);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };

    return this._jwtService.sign(payload);
  }
}
