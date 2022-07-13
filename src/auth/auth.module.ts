import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { SERVICES } from 'src/utils/constants';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [
    /* if you just add the class instead of using the token, you wouldn't be able to program down to the interface */
    {
      provide: SERVICES.AUTH,
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
