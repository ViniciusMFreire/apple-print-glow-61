
import { IAuthRepository } from '../../domain/repositories/IAuthRepository';
import { AuthCredentials, User } from '../../domain/entities/User';

export class LocalAuthRepository implements IAuthRepository {
  private readonly STORAGE_KEY = 'auth';

  async login(credentials: AuthCredentials): Promise<{ user: User; token?: string }> {
    // Simulação de autenticação - aceita qualquer combinação válida
    if (credentials.email && credentials.password) {
      const user: User = { email: credentials.email };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify({ user }));
      return { user };
    }
    throw new Error('Credenciais inválidas');
  }

  async logout(): Promise<void> {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  getCurrentUser(): User | null {
    const savedAuth = localStorage.getItem(this.STORAGE_KEY);
    if (savedAuth) {
      const authData = JSON.parse(savedAuth);
      return authData.user;
    }
    return null;
  }

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }
}
