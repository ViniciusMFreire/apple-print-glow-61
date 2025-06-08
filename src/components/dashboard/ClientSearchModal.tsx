
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, User, Phone, FileText, CreditCard } from 'lucide-react';
import { useClient } from '@/presentation/hooks/useClient';
import { ClientSearchCriteria, Client } from '@/domain/entities/Client';
import { ResponsiveText } from '@/components/ui/responsive-text';
import { useIsMobile } from '@/hooks/use-mobile';

interface ClientSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectClient: (client: Client) => void;
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'cpf':
    case 'cnpj':
      return <User className="h-4 w-4" />;
    case 'telefone':
      return <Phone className="h-4 w-4" />;
    case 'contrato':
    case 'pedido':
      return <FileText className="h-4 w-4" />;
    case 'conta':
      return <CreditCard className="h-4 w-4" />;
    default:
      return <Search className="h-4 w-4" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'cpf':
      return 'bg-blue-100 text-blue-800';
    case 'cnpj':
      return 'bg-purple-100 text-purple-800';
    case 'telefone':
      return 'bg-green-100 text-green-800';
    case 'contrato':
      return 'bg-orange-100 text-orange-800';
    case 'pedido':
      return 'bg-red-100 text-red-800';
    case 'conta':
      return 'bg-indigo-100 text-indigo-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const ClientSearchModal = ({ isOpen, onClose, onSelectClient }: ClientSearchModalProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const { clients, loading, error, searchClients } = useClient();
  const isMobile = useIsMobile();

  const detectSearchType = (value: string) => {
    const cleanValue = value.replace(/\D/g, '');
    if (cleanValue.length === 11) return 'CPF';
    if (cleanValue.length === 14) return 'CNPJ';
    if (cleanValue.length >= 10 && cleanValue.length <= 11) return 'Telefone';
    if (/^CT-/.test(value.toUpperCase())) return 'Contrato';
    if (/^PD-/.test(value.toUpperCase())) return 'Pedido';
    if (cleanValue.length === 8) return 'Conta';
    return 'Texto';
  };

  const mapSearchTypeToEnum = (type: string): 'cpf' | 'account' | 'phone' | 'contract' => {
    switch (type.toLowerCase()) {
      case 'cpf':
      case 'cnpj':
        return 'cpf';
      case 'telefone':
        return 'phone';
      case 'contrato':
      case 'pedido':
        return 'contract';
      case 'conta':
        return 'account';
      default:
        return 'cpf';
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    const searchType = detectSearchType(searchTerm);
    const criteria: ClientSearchCriteria = {
      value: searchTerm,
      type: mapSearchTypeToEnum(searchType)
    };

    try {
      await searchClients(criteria);
      setShowResults(true);
    } catch (err) {
      console.error('Erro na busca:', err);
    }
  };

  const handleSelectClient = (client: Client) => {
    onSelectClient(client);
    onClose();
    setSearchTerm('');
    setShowResults(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Pesquisar Cliente</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder={isMobile ? "Ex: CPF, Conta, Telefone..." : "Ex: 02358458090, 77933224, CT-2024-001, (51) 9 99364-7444..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-10 h-12 text-base border-2 border-gray-200 focus:border-verde-dark rounded-xl"
                disabled={loading}
              />
            </div>

            {searchTerm && (
              <div className="mt-2">
                <Badge variant="outline" className={getTypeColor(detectSearchType(searchTerm).toLowerCase())}>
                  {getTypeIcon(detectSearchType(searchTerm).toLowerCase())}
                  <span className="ml-1">{detectSearchType(searchTerm)}</span>
                </Badge>
              </div>
            )}
          </div>

          <Button 
            onClick={handleSearch}
            disabled={!searchTerm || loading}
            className="w-full h-12 bg-verde-dark hover:bg-verde-dark/90 text-white font-semibold rounded-xl"
          >
            <Search className="h-5 w-5 mr-2" />
            {loading ? 'Buscando...' : 'Buscar Cliente'}
          </Button>

          {error && (
            <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
              <ResponsiveText size="sm" className="text-red-800">{error}</ResponsiveText>
            </div>
          )}

          {showResults && (
            <div className="border border-verde-dark/20 rounded-lg">
              <div className="p-4 border-b">
                <ResponsiveText size="lg" weight="semibold" className="text-gray-800">
                  Resultados da Busca ({clients.length})
                </ResponsiveText>
              </div>
              <ScrollArea className="h-64 md:h-96">
                {clients.length > 0 ? (
                  <div className="space-y-3 p-3">
                    {clients.map((client) => (
                      <div key={client.id} className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer" onClick={() => handleSelectClient(client)}>
                        <div className="space-y-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <ResponsiveText size="sm" weight="semibold">{client.name}</ResponsiveText>
                              <ResponsiveText size="xs" color="muted">Conta: {client.account}</ResponsiveText>
                            </div>
                            <Badge 
                              variant="outline" 
                              className={client.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                            >
                              {client.status}
                            </Badge>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center space-x-1">
                              <User className="h-3 w-3" />
                              <ResponsiveText size="xs">{client.cpf}</ResponsiveText>
                            </div>
                            <ResponsiveText size="xs" color="muted">{client.phone}</ResponsiveText>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <ResponsiveText size="base" weight="medium" className="mb-2">Nenhum resultado encontrado</ResponsiveText>
                    <ResponsiveText size="sm" color="muted">Tente ajustar os termos da sua busca.</ResponsiveText>
                  </div>
                )}
              </ScrollArea>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
