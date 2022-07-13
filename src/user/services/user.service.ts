import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/utils/typeorm/entities/User';
import { UserDetails } from 'src/utils/types';
import { Repository } from 'typeorm';
import { IUserService } from '../interfaces/user';

/* Take care of creating and searching for users */
@Injectable()
export class UserService implements IUserService {
  /* Connect to the database to access Users table, done by injecting the repo */
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  createUser(details: UserDetails) {
    console.log('user.service - create User');
    const newUser = this.userRepository.create(details);
    return this.userRepository.save(newUser);
  }

  findUser(discordId: string) {
    console.log('user.service - find User');
    return this.userRepository.findOneBy({ discordId });
  }
}
