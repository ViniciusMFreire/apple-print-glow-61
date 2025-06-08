
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export const LogoutButton = () => {
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success('Logout realizado com sucesso!');
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-600">
        Bem-vindo, {user?.email}
      </span>
      <Button 
        onClick={handleLogout}
        variant="outline"
        size="sm"
        className="border-verde-dark text-verde-dark hover:bg-verde-dark hover:text-white"
      >
        Sair
      </Button>
    </div>
  );
};
