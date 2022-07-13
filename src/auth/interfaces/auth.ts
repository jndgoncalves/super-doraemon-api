import { User } from 'src/utils/typeorm/entities/User';
import { UserDetails } from 'src/utils/types';

export interface IAuthService {
  /* Return user or create one */
  validateUser(details: UserDetails): Promise<User>;
}
