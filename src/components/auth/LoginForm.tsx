
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Eye, EyeOff } from 'lucide-react';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular delay de autenticação
    setTimeout(() => {
      const success = login(email, password);
      
      if (success) {
        toast.success('Login realizado com sucesso!');
      } else {
        toast.error('Credenciais inválidas. Tente novamente.');
      }
      
      setIsLoading(false);
    }, 1000);
  };

  const handleForgotPassword = () => {
    toast.info('Funcionalidade de recuperação de senha será implementada em breve.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-verde-dark via-green-600 to-green-500 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-amarela-normal rounded-full blur-lg"></div>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md relative z-10">
        <Card className="bg-white shadow-2xl border-0 rounded-2xl overflow-hidden">
          <CardHeader className="text-center py-8 px-8">
            <div className="mb-6">
              {/* Logos - VerdeCard e Quero Quero */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-verde-dark rounded-xl">
                  <span className="text-white font-bold text-xl">VC</span>
                </div>
                <div className="text-2xl font-bold text-gray-400">+</div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-xl">
                  <span className="text-white font-bold text-xl">QQ</span>
                </div>
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
              Por favor, informe seus dados.
            </CardTitle>
            <p className="text-gray-500 text-sm">v2.0.2</p>
          </CardHeader>
          
          <CardContent className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Usuário
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-verde-dark focus:ring-0 px-0 placeholder:text-gray-400"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Senha
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-12 border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-verde-dark focus:ring-0 px-0 pr-10 placeholder:text-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Esqueci minha senha */}
              <div className="text-right">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-verde-dark hover:text-verde-dark/80 transition-colors underline"
                >
                  Esqueci minha senha
                </button>
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-verde-dark hover:bg-verde-dark/90 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
                  disabled={isLoading}
                >
                  {isLoading ? 'Entrando...' : 'Entrar'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
