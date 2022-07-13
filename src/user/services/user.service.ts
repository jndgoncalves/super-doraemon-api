import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/utils/typeorm/entities/User";
import { Repository } from "typeorm";
import { IUserService } from "../interfaces/user";

/* Take care of creating and searching for users */
@Injectable()
export class UserService implements IUserService {
    /* Connect to the database to access Users table, done by injecting the repo */
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) { }

    createUser() {
        console.log("createUser");
    }

    findUser(discordId: string) {
        console.log("findUser");
        return this.userRepository.findOne({ discordId });
    }
}