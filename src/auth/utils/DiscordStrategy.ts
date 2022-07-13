import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-discord';
import { SERVICES } from 'src/utils/constants';
import { IAuthService } from '../interfaces/auth';

/* Handles the user that's login in (access login route) by invoking DiscordStrategy*/
@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(SERVICES.AUTH) private readonly authService: IAuthService,
  ) {
    super({
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: process.env.DISCORD_REDIRECT_URL,
      /* Passport generates que correct URL for the user to login */
      scope: ['identify', 'email', 'guilds'],
    });
  }

  /* Validate is invoked when user click authorize on discord platform */
  async validate(acessToken: string, refreshToken: string, profile: Profile) {
    console.log(
      profile.username,
      ' Username at DiscordStrategy Validate Method',
    );
    return this.authService.validateUser({ discordId: profile.id });
  }
}
