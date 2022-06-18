import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import Strategy, { Profile } from "passport-discord";

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            clientID: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            callbackURL: process.env.DISCORD_CALLBACK_URL,
            scope: ['identity', 'email', 'guilds'],

        });
    }

    async validate(
        acessToken: string,
        refreshToken: string,
        profile: Profile,
    ) {
        console.log('DiscordStrategy Validate Method');
        console.log(profile.username);
    };
}