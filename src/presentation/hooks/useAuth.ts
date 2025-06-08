
import { useState, useEffect } from 'react';
import Container from '../../infrastructure/di/Container';
import { User } from '../../domain/entities/User';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const authUseCase = Container.getInstance().authUseCase;

  useEffect(() => {
    const currentUser = authUseCase.getCurrentUser();
    setIsAuthenticated(authUseCase.isAuthenticated());
    setUser(currentUser);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const result = await authUseCase.login({ email, password });
    if (result.success && result.user) {
      setIsAuthenticated(true);
      setUser(result.user);
      return true;
    }
    return false;
  };

  const logout = async () => {
    await authUseCase.logout();
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isAuthenticated,
    user,
    login,
    logout
  };
};
