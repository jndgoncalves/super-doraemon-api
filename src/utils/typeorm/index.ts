import { GuildConfiguration } from 'src/utils/typeorm/entities/GuildConfiguration';
import { Session } from 'src/utils/typeorm/entities/Session';
import { User } from 'src/utils/typeorm/entities/User';

export const entities = [User, GuildConfiguration, Session];
