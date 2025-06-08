
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, AuthCredentials } from '@/domain/entities/User';
import { container } from '@/infrastructure/di/Container';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: AuthCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const authUseCase = container.getAuthUseCase();

  const login = async (credentials: AuthCredentials) => {
    const loggedInUser = await authUseCase.login(credentials);
    setUser(loggedInUser);
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
