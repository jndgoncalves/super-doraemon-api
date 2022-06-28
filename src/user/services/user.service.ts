import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/utils/typeorm/entities/User";
import { Repository } from "typeorm";
import { IUserService } from "../interfaces/user";

@Injectable()
export class UserService implements IUserService {
    constructor(
        @InjectRepository(User) private readonly
        userRepository: Repository<User>,
    ) { }

    createUser() { }

    findUser() { }
}