
import { useState } from 'react';
import { ClientSearchUseCase } from '../../application/usecases/ClientSearchUseCase';
import { ClientSearchPresenter, ClientSearchState } from '../presenters/ClientSearchPresenter';
import { Client, ClientSearchCriteria } from '../../domain/entities/Client';
import Container from '../../infrastructure/di/Container';

interface ExtendedClientSearchState extends ClientSearchState {
  showTypeSelector: boolean;
  ambiguousValue: string;
}

export const useClientSearch = () => {
  const [state, setState] = useState<ExtendedClientSearchState>({
    clients: [],
    loading: false,
    error: null,
    showResults: false,
    showTypeSelector: false,
    ambiguousValue: ''
  });

  const clientSearchUseCase = new ClientSearchUseCase(Container.getInstance().clientRepository);
  const presenter = new ClientSearchPresenter();

  const searchClients = async (searchTerm: string, forceType?: 'cpf' | 'phone') => {
    if (!searchTerm.trim()) return;

    // Verifica se há ambiguidade apenas se não foi forçado um tipo
    if (!forceType) {
      const { isCpf, isPhone } = clientSearchUseCase.checkAmbiguousSearch(searchTerm);
      
      if (isCpf && isPhone) {
        setState(prev => ({
          ...prev,
          showTypeSelector: true,
          ambiguousValue: searchTerm,
          showResults: false
        }));
        return;
      }
    }

    setState(prev => ({ 
      ...prev, 
      loading: true, 
      error: null, 
      showTypeSelector: false,
      ambiguousValue: ''
    }));

    try {
      let searchType: string;
      
      if (forceType) {
        searchType = forceType === 'cpf' ? 'CPF' : 'Telefone';
      } else {
        searchType = clientSearchUseCase.detectSearchType(searchTerm);
      }
      
      const criteria: ClientSearchCriteria = {
        value: searchTerm,
        type: clientSearchUseCase.mapSearchTypeToEnum(searchType)
      };

      const results = await clientSearchUseCase.searchClients(criteria);
      
      setState(prev => ({
        ...prev,
        clients: results,
        loading: false,
        showResults: true
      }));
    } catch (err) {
      setState(prev => ({
        ...prev,
        error: err instanceof Error ? err.message : 'Erro ao buscar clientes',
        clients: [],
        loading: false,
        showResults: true
      }));
    }
  };

  const handleTypeSelection = (type: 'cpf' | 'phone') => {
    searchClients(state.ambiguousValue, type);
  };

  const cancelTypeSelection = () => {
    setState(prev => ({
      ...prev,
      showTypeSelector: false,
      ambiguousValue: ''
    }));
  };

  const getClientById = async (id: string): Promise<Client | null> => {
    try {
      return await clientSearchUseCase.getClientById(id);
    } catch (err) {
      console.error('Erro ao buscar cliente:', err);
      return null;
    }
  };

  const detectSearchType = (value: string) => {
    return clientSearchUseCase.detectSearchType(value);
  };

  const getTypeIcon = (type: string) => {
    return presenter.getTypeIcon(type);
  };

  const getTypeColor = (type: string) => {
    return presenter.getTypeColor(type);
  };

  const formatClientForDisplay = (client: Client) => {
    return presenter.formatClientForDisplay(client);
  };

  return {
    ...state,
    searchClients,
    getClientById,
    detectSearchType,
    getTypeIcon,
    getTypeColor,
    formatClientForDisplay,
    handleTypeSelection,
    cancelTypeSelection
  };
};
