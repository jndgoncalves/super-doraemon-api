import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { SERVICES } from 'src/utils/constants';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { DiscordStrategy } from './utils/DiscordStrategy';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [
    /* if you just add the class instead of using the token, you wouldn't be able to program down to the interface */
    DiscordStrategy,
    {
      provide: SERVICES.AUTH,
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
