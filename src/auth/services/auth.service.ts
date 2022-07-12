import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from 'src/user/interfaces/user';
import { SERVICES } from 'src/utils/constants';

@Injectable()
export class AuthService {
    constructor(
        @Inject(SERVICES.USER) private readonly userService: IUserService,
    ) { }
}
