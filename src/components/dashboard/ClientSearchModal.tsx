
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, User, Phone, FileText, CreditCard } from 'lucide-react';
import { Client } from '@/domain/entities/Client';
import { ResponsiveText } from '@/components/ui/responsive-text';
import { useIsMobile } from '@/hooks/use-mobile';
import { useClientSearchModal } from '@/presentation/hooks/useClientSearchModal';

interface ClientSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectClient: (client: Client) => void;
}

const iconMap = {
  User,
  Phone,
  FileText,
  CreditCard,
  Search
};

export const ClientSearchModal = ({ isOpen, onClose, onSelectClient }: ClientSearchModalProps) => {
  const isMobile = useIsMobile();
  
  const {
    searchTerm,
    setSearchTerm,
    handleSearch,
    handleSelectClient,
    handleKeyPress,
    clients,
    loading,
    error,
    showResults,
    detectSearchType,
    getTypeIcon,
    getTypeColor,
    formatClientForDisplay
  } = useClientSearchModal((client: Client) => {
    onSelectClient(client);
    onClose();
  });

  const searchType = searchTerm ? detectSearchType(searchTerm) : '';
  const IconComponent = searchType ? iconMap[getTypeIcon(searchType.toLowerCase()) as keyof typeof iconMap] : Search;

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
                <Badge variant="outline" className={getTypeColor(searchType.toLowerCase())}>
                  <IconComponent className="h-4 w-4" />
                  <span className="ml-1">{searchType}</span>
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
                    {clients.map((client) => {
                      const formattedClient = formatClientForDisplay(client);
                      return (
                        <div key={client.id} className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer" onClick={() => handleSelectClient(client)}>
                          <div className="space-y-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <ResponsiveText size="sm" weight="semibold">{formattedClient.displayName}</ResponsiveText>
                                <ResponsiveText size="xs" color="muted">Conta: {formattedClient.displayAccount}</ResponsiveText>
                              </div>
                              <Badge variant="outline" className={formattedClient.statusColor}>
                                {client.status}
                              </Badge>
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center space-x-1">
                                <User className="h-3 w-3" />
                                <ResponsiveText size="xs">{formattedClient.displayCpf}</ResponsiveText>
                              </div>
                              <ResponsiveText size="xs" color="muted">{formattedClient.displayPhone}</ResponsiveText>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
