import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAuth } from '@/contexts/AuthContext';
import { Search, User, Phone, FileText, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ResponsiveContainer } from '@/components/ui/responsive-container';
import { ResponsiveText } from '@/components/ui/responsive-text';
import { useIsMobile } from '@/hooks/use-mobile';
import { useClientSearch } from '@/presentation/hooks/useClientSearch';
import { SearchTypeSelector } from '@/components/dashboard/SearchTypeSelector';
import { DocumentValidator } from '@/lib/validators';

const iconMap = {
  User,
  Phone,
  FileText,
  CreditCard,
  Search
};

export const ClientSearch = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const { logout } = useAuth();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const {
    clients,
    loading,
    error,
    showResults,
    showTypeSelector,
    ambiguousValue,
    searchClients,
    detectSearchType,
    getTypeIcon,
    getTypeColor,
    formatClientForDisplay,
    handleTypeSelection,
    cancelTypeSelection
  } = useClientSearch();

  const handleSearch = async () => {
    await searchClients(searchTerm);
  };

  const handleSelectClient = (client: any) => {
    navigate('/dashboard', { state: { client } });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !showTypeSelector) {
      handleSearch();
    }
  };

  const getSearchTypeBadges = (searchValue: string) => {
    if (!searchValue) return [];
    
    const ambiguity = DocumentValidator.checkAmbiguity(searchValue);
    const primaryType = DocumentValidator.detectPrimaryType(searchValue);
    
    if (ambiguity.isAmbiguous) {
      return ambiguity.possibleTypes.map(type => ({
        type: type.toLowerCase(),
        label: type
      }));
    }
    
    return [{
      type: primaryType.toLowerCase(),
      label: primaryType
    }];
  };

  const searchTypeBadges = getSearchTypeBadges(searchTerm);

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/lovable-uploads/03754d9e-44f9-4110-bb6d-0939e1f70005.png')`
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <ResponsiveContainer className="relative z-10 max-w-6xl">
        <Card className="bg-white shadow-2xl border-0 rounded-2xl overflow-hidden">
          <CardHeader className="text-center py-6 md:py-8 px-4 md:px-8">
            <ResponsiveText size="2xl" weight="bold" className="text-gray-800 mb-2 md:mb-4">
              Buscar Cliente
            </ResponsiveText>
            <ResponsiveText size="sm" color="muted">
              Digite Conta, CPF, CNPJ, Telefone, Contrato ou Pedido
            </ResponsiveText>
          </CardHeader>
          
          <CardContent className="px-4 md:px-8 pb-6 md:pb-8">
            <div className="space-y-4 md:space-y-6">
              <div className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder={isMobile ? "Ex: CPF, Conta, Telefone..." : "Ex: 02358458090, 77933224, CT-2024-001, (51) 9 99364-7444..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="pl-8 md:pl-10 h-12 md:h-14 text-base md:text-lg border-2 border-gray-200 focus:border-verde-dark rounded-xl"
                    disabled={loading}
                  />
                </div>

                {searchTerm && !showTypeSelector && searchTypeBadges.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {searchTypeBadges.map((badge, index) => {
                      const IconComponent = iconMap[getTypeIcon(badge.type) as keyof typeof iconMap] || Search;
                      return (
                        <Badge key={index} variant="outline" className={getTypeColor(badge.type)}>
                          <IconComponent className="h-4 w-4" />
                          <span className="ml-1">{badge.label}</span>
                        </Badge>
                      );
                    })}
                  </div>
                )}
              </div>

              {showTypeSelector && (
                <SearchTypeSelector
                  searchValue={ambiguousValue}
                  onSelectType={handleTypeSelection}
                  onCancel={cancelTypeSelection}
                />
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleSearch}
                  disabled={!searchTerm || loading || showTypeSelector}
                  className="flex-1 h-10 md:h-12 bg-verde-dark hover:bg-verde-dark/90 text-white font-semibold rounded-xl"
                >
                  <Search className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  {loading ? 'Buscando...' : 'Buscar Cliente'}
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={logout}
                  className="h-10 md:h-12 px-4 md:px-6 border-2 border-gray-300 hover:bg-gray-50 rounded-xl"
                >
                  Sair
                </Button>
              </div>

              {error && (
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-3 md:p-4">
                    <ResponsiveText size="sm" className="text-red-800">{error}</ResponsiveText>
                  </CardContent>
                </Card>
              )}

              {showResults && clients.length > 0 && (
                <Card className="border-verde-dark/20">
                  <CardHeader className="pb-3 md:pb-4 px-3 md:px-6 pt-3 md:pt-6">
                    <ResponsiveText size="lg" weight="semibold" className="text-gray-800">
                      Resultados da Busca ({clients.length})
                    </ResponsiveText>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ScrollArea className="h-64 md:h-96">
                      {isMobile ? (
                        <div className="space-y-3 p-3">
                          {clients.map((client) => {
                            const formattedClient = formatClientForDisplay(client);
                            return (
                              <Card key={client.id} className="p-3 hover:bg-gray-50">
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
                                  <Button
                                    onClick={() => handleSelectClient(client)}
                                    size="sm"
                                    className="w-full bg-verde-dark hover:bg-verde-dark/90 text-white"
                                  >
                                    Selecionar
                                  </Button>
                                </div>
                              </Card>
                            );
                          })}
                        </div>
                      ) : (
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Conta</TableHead>
                              <TableHead>CPF</TableHead>
                              <TableHead>Nome</TableHead>
                              <TableHead>Telefone</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Ação</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {clients.map((client) => {
                              const formattedClient = formatClientForDisplay(client);
                              return (
                                <TableRow key={client.id} className="hover:bg-gray-50">
                                  <TableCell className="font-medium">{formattedClient.displayAccount}</TableCell>
                                  <TableCell>
                                    <div className="flex items-center space-x-2">
                                      <User className="h-4 w-4" />
                                      <span>{formattedClient.displayCpf}</span>
                                    </div>
                                  </TableCell>
                                  <TableCell>{formattedClient.displayName}</TableCell>
                                  <TableCell>{formattedClient.displayPhone}</TableCell>
                                  <TableCell>
                                    <Badge variant="outline" className={formattedClient.statusColor}>
                                      {client.status}
                                    </Badge>
                                  </TableCell>
                                  <TableCell>
                                    <Button
                                      onClick={() => handleSelectClient(client)}
                                      size="sm"
                                      className="bg-verde-dark hover:bg-verde-dark/90 text-white"
                                    >
                                      Selecionar
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      )}
                    </ScrollArea>
                  </CardContent>
                </Card>
              )}

              {showResults && clients.length === 0 && !loading && (
                <Card className="border-gray-200">
                  <CardContent className="p-6 md:p-8 text-center">
                    <div className="text-gray-500">
                      <Search className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-gray-300" />
                      <ResponsiveText size="base" weight="medium" className="mb-2">Nenhum resultado encontrado</ResponsiveText>
                      <ResponsiveText size="sm" color="muted">Tente ajustar os termos da sua busca.</ResponsiveText>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </CardContent>
        </Card>
      </ResponsiveContainer>
    </div>
  );
};
