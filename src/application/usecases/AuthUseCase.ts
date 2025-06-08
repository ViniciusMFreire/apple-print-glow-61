
import { IAuthRepository } from '../../domain/repositories/IAuthRepository';
import { AuthCredentials, User } from '../../domain/entities/User';

export class AuthUseCase {
  constructor(private authRepository: IAuthRepository) {}

  async login(credentials: AuthCredentials): Promise<{ success: boolean; user?: User }> {
    try {
      const result = await this.authRepository.login(credentials);
      return { success: true, user: result.user };
    } catch (error) {
      console.error('Login failed:', error);
      return { success: false };
    }
  }

  async logout(): Promise<void> {
    await this.authRepository.logout();
  }

  getCurrentUser(): User | null {
    return this.authRepository.getCurrentUser();
  }

  isAuthenticated(): boolean {
    return this.authRepository.isAuthenticated();
  }
}
