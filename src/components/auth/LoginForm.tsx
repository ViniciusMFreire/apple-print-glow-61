
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login({ email, password });
      toast.success('Login realizado com sucesso!');
    } catch (error) {
      toast.error('Credenciais inválidas. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    toast.info('Funcionalidade de recuperação de senha será implementada em breve.');
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/lovable-uploads/03754d9e-44f9-4110-bb6d-0939e1f70005.png')`
      }}
    >
      {/* Overlay para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Login Card */}
      <div className="w-full max-w-md relative z-10">
        <Card className="bg-white shadow-2xl border-0 rounded-2xl overflow-hidden">
          <CardHeader className="text-center py-8 px-8">
            <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
              Feed do cliente
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
