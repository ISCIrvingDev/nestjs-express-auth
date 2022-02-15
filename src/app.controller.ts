import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './application/auth/auth.service';
import { LocalAuthGuard } from './application/auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly _appService: AppService,
    private readonly _authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this._appService.getHello();
  }

  @Post('auth/login')
  // Aunque funciona de esta manera, NestJS recomienda crear una clase que se encargue de esto. En este caso seria la clase -> "LocalAuthGuard"
  // @UseGuards(AuthGuard('local'))
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this._authService.login(req.user);
  }
}
