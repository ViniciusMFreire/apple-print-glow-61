import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAuth } from '@/contexts/AuthContext';
import { Search, User, Phone, FileText, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchSuggestion {
  id: string;
  value: string;
  type: 'conta' | 'cpf' | 'cnpj' | 'telefone' | 'contrato' | 'pedido';
  name?: string;
  status?: string;
  conta?: string;
  telefone?: string;
}

const mockSuggestions: SearchSuggestion[] = [
  { id: '1', value: '12345678901', type: 'cpf', name: 'João Silva', status: 'Ativo', conta: '0001234567', telefone: '(11) 99999-1111' },
  { id: '2', value: '98765432100012', type: 'cnpj', name: 'Empresa ABC Ltda', status: 'Ativo', conta: '0001234568', telefone: '(11) 99999-2222' },
  { id: '3', value: '11987654321', type: 'telefone', name: 'Maria Santos', status: 'Ativo', conta: '0001234569', telefone: '(11) 99999-3333' },
  { id: '4', value: 'CT-2024-001', type: 'contrato', name: 'Contrato Cartão Verde', status: 'Vigente', conta: '0001234570', telefone: '(11) 99999-4444' },
  { id: '5', value: 'PD-2024-456', type: 'pedido', name: 'Pedido Cartão Adicional', status: 'Processando', conta: '0001234571', telefone: '(11) 99999-5555' },
  { id: '6', value: '0001234567', type: 'conta', name: 'Ana Costa', status: 'Ativo', conta: '0001234572', telefone: '(11) 99999-6666' },
  { id: '7', value: '11122233344', type: 'cpf', name: 'Pedro Oliveira', status: 'Ativo', conta: '0001234573', telefone: '(11) 99999-7777' },
  { id: '8', value: '55566677788', type: 'cpf', name: 'Carla Mendes', status: 'Ativo', conta: '0001234574', telefone: '(11) 99999-8888' },
  { id: '9', value: '99988877766', type: 'cpf', name: 'Roberto Silva', status: 'Inativo', conta: '0001234575', telefone: '(11) 99999-9999' },
  { id: '10', value: '12312312345', type: 'cpf', name: 'Fernanda Lima', status: 'Ativo', conta: '0001234576', telefone: '(11) 99999-0000' },
  { id: '11', value: '45645645678', type: 'cpf', name: 'Marcus Vinicius', status: 'Ativo', conta: '0001234577', telefone: '(11) 88888-1111' },
  { id: '12', value: '78978978901', type: 'cpf', name: 'Juliana Santos', status: 'Ativo', conta: '0001234578', telefone: '(11) 88888-2222' },
  { id: '13', value: '12345678000123', type: 'cnpj', name: 'Tech Solutions Ltda', status: 'Ativo', conta: '0001234579', telefone: '(11) 88888-3333' },
  { id: '14', value: '98765432000134', type: 'cnpj', name: 'Inovação Digital ME', status: 'Ativo', conta: '0001234580', telefone: '(11) 88888-4444' },
  { id: '15', value: '11223344000156', type: 'cnpj', name: 'Consultoria Estratégica SA', status: 'Ativo', conta: '0001234581', telefone: '(11) 88888-5555' },
];

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

export const ClientSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedClient, setSelectedClient] = useState<SearchSuggestion | null>(null);
  const [searchResults, setSearchResults] = useState<SearchSuggestion[]>([]);
  const [showResults, setShowResults] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.length >= 2) {
      const filtered = mockSuggestions.filter(
        suggestion =>
          suggestion.value.toLowerCase().includes(searchTerm.toLowerCase()) ||
          suggestion.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          suggestion.conta?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          suggestion.telefone?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setSearchTerm(suggestion.value);
    setSelectedClient(suggestion);
    setShowSuggestions(false);
  };

  const handleSearch = () => {
    if (selectedClient || searchTerm) {
      console.log('Buscando cliente:', selectedClient || searchTerm);
      
      // Filtrar resultados baseados no termo de busca
      const filtered = mockSuggestions.filter(
        suggestion =>
          suggestion.value.toLowerCase().includes(searchTerm.toLowerCase()) ||
          suggestion.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          suggestion.conta?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          suggestion.telefone?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      setSearchResults(filtered);
      setShowResults(true);
    }
  };

  const handleSelectClient = (client: SearchSuggestion) => {
    navigate('/dashboard', { state: { client } });
  };

  const detectSearchType = (value: string) => {
    if (/^\d{11}$/.test(value)) return 'CPF';
    if (/^\d{14}$/.test(value)) return 'CNPJ';
    if (/^\d{10,11}$/.test(value) || /^\(\d{2}\)\s?\d{4,5}-?\d{4}$/.test(value)) return 'Telefone';
    if (/^CT-/.test(value.toUpperCase())) return 'Contrato';
    if (/^PD-/.test(value.toUpperCase())) return 'Pedido';
    if (/^\d{10}$/.test(value)) return 'Conta';
    return 'Texto';
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/lovable-uploads/03754d9e-44f9-4110-bb6d-0939e1f70005.png')`
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="w-full max-w-6xl relative z-10">
        <Card className="bg-white shadow-2xl border-0 rounded-2xl overflow-hidden">
          <CardHeader className="text-center py-8 px-8">
            <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
              Buscar Cliente
            </CardTitle>
            <p className="text-gray-600">
              Digite Conta, CPF, CNPJ, Telefone, Contrato ou Pedido
            </p>
          </CardHeader>
          
          <CardContent className="px-8 pb-8">
            <div className="space-y-6">
              <div className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Ex: 12345678901, CT-2024-001, (11) 99999-9999..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => searchTerm.length >= 2 && setShowSuggestions(true)}
                    className="pl-10 h-14 text-lg border-2 border-gray-200 focus:border-verde-dark rounded-xl"
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

                {showSuggestions && suggestions.length > 0 && !showResults && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                    {suggestions.map((suggestion) => (
                      <div
                        key={suggestion.id}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0 flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          {getTypeIcon(suggestion.type)}
                          <div>
                            <div className="font-medium text-gray-900">
                              {suggestion.name || suggestion.value}
                            </div>
                            <div className="text-sm text-gray-500">
                              {suggestion.value}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className={getTypeColor(suggestion.type)}>
                            {suggestion.type.toUpperCase()}
                          </Badge>
                          {suggestion.status && (
                            <Badge variant="outline" className="bg-green-100 text-green-800">
                              {suggestion.status}
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex space-x-3">
                <Button 
                  onClick={handleSearch}
                  disabled={!searchTerm}
                  className="flex-1 h-12 bg-verde-dark hover:bg-verde-dark/90 text-white font-semibold rounded-xl"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Buscar Cliente
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={logout}
                  className="h-12 px-6 border-2 border-gray-300 hover:bg-gray-50 rounded-xl"
                >
                  Sair
                </Button>
              </div>

              {selectedClient && !showResults && (
                <Card className="border-verde-dark/20 bg-verde-dark/5">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {selectedClient.name || selectedClient.value}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {selectedClient.value}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Badge className={getTypeColor(selectedClient.type)}>
                          {selectedClient.type.toUpperCase()}
                        </Badge>
                        {selectedClient.status && (
                          <Badge className="bg-green-100 text-green-800">
                            {selectedClient.status}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {showResults && searchResults.length > 0 && (
                <Card className="border-verde-dark/20">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-gray-800">
                      Resultados da Busca ({searchResults.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ScrollArea className="h-96">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Conta</TableHead>
                            <TableHead>CPF/CNPJ</TableHead>
                            <TableHead>Nome</TableHead>
                            <TableHead>Telefone</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Ação</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {searchResults.map((result) => (
                            <TableRow key={result.id} className="hover:bg-gray-50">
                              <TableCell className="font-medium">
                                {result.conta || result.value}
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center space-x-2">
                                  {getTypeIcon(result.type)}
                                  <span>{result.value}</span>
                                </div>
                              </TableCell>
                              <TableCell>{result.name}</TableCell>
                              <TableCell>{result.telefone}</TableCell>
                              <TableCell>
                                <Badge 
                                  variant="outline" 
                                  className={result.status === 'Ativo' || result.status === 'Vigente' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                                >
                                  {result.status}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Button
                                  onClick={() => handleSelectClient(result)}
                                  size="sm"
                                  className="bg-verde-dark hover:bg-verde-dark/90 text-white"
                                >
                                  Selecionar
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </ScrollArea>
                  </CardContent>
                </Card>
              )}

              {showResults && searchResults.length === 0 && (
                <Card className="border-gray-200">
                  <CardContent className="p-8 text-center">
                    <div className="text-gray-500">
                      <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <h3 className="text-lg font-medium mb-2">Nenhum resultado encontrado</h3>
                      <p>Tente ajustar os termos da sua busca.</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
