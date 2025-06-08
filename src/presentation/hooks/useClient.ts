
import { useState } from 'react';
import Container from '../../infrastructure/di/Container';
import { Client, ClientSearchCriteria } from '../../domain/entities/Client';

export const useClient = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const clientUseCase = Container.getInstance().clientUseCase;

  const searchClients = async (criteria: ClientSearchCriteria) => {
    setLoading(true);
    setError(null);
    try {
      const results = await clientUseCase.searchClients(criteria);
      setClients(results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao buscar clientes');
      setClients([]);
    } finally {
      setLoading(false);
    }
  };

  const getClientById = async (id: string): Promise<Client | null> => {
    try {
      return await clientUseCase.getClientById(id);
    } catch (err) {
      console.error('Erro ao buscar cliente:', err);
      return null;
    }
  };

  return {
    clients,
    loading,
    error,
    searchClients,
    getClientById
  };
};
