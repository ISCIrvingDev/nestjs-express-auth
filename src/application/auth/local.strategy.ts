import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private _authService: AuthService) {
    super();
  }

  async validate(userName: string, pass: string): Promise<any> {
    const user = await this._authService.validateUser(userName, pass);

    if (!user) throw new UnauthorizedException();

    return user;
  }
}
