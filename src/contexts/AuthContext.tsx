
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, AuthCredentials } from '@/domain/entities/User';
import Container from '@/infrastructure/di/Container';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: AuthCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const authUseCase = Container.getInstance().authUseCase;

  const login = async (credentials: AuthCredentials) => {
    const result = await authUseCase.login(credentials);
    if (result.success && result.user) {
      setUser(result.user);
    }
  };

  const logout = () => {
    authUseCase.logout();
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
