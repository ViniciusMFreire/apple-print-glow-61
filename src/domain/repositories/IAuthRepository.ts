
import { User, AuthCredentials } from '../entities/User';

export interface IAuthRepository {
  login(credentials: AuthCredentials): Promise<{ user: User; token?: string }>;
  logout(): Promise<void>;
  getCurrentUser(): User | null;
  isAuthenticated(): boolean;
}
