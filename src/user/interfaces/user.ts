import { UserDetails } from "src/utils/types";

export interface IUserService {
    createUser(details: UserDetails);
    findUser(discordId: string);
}