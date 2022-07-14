/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { ROUTES } from 'src/utils/constants';
import { AuthenticatedGuard, DiscordAuthGuard } from '../utils/Guards';

@Controller(ROUTES.AUTH)
export class AuthController {
  @Get('login')
  /* UseGuards to invoke passport */
  @UseGuards(DiscordAuthGuard)
  login() {}

  @Get('redirect')
  @UseGuards(DiscordAuthGuard)
  redirect(@Res() res: Response) {
    res.redirect('http://localhost:3000/menu');
  }

  @Get('status')
  @UseGuards(AuthenticatedGuard)
  status() {
    return {
      message: 'Authenticated',
    };
  }

  @Post('logout')
  logout() {}
}
