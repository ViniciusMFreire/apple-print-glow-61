
import { useState } from 'react';
import { ClientSearchUseCase } from '../../application/usecases/ClientSearchUseCase';
import { ClientSearchPresenter, ClientSearchState } from '../presenters/ClientSearchPresenter';
import { Client, ClientSearchCriteria } from '../../domain/entities/Client';
import Container from '../../infrastructure/di/Container';

export const useClientSearch = () => {
  const [state, setState] = useState<ClientSearchState>({
    clients: [],
    loading: false,
    error: null,
    showResults: false
  });

  const clientSearchUseCase = new ClientSearchUseCase(Container.getInstance().clientRepository);
  const presenter = new ClientSearchPresenter();

  const searchClients = async (searchTerm: string) => {
    if (!searchTerm.trim()) return;

    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const searchType = clientSearchUseCase.detectSearchType(searchTerm);
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
    formatClientForDisplay
  };
};
