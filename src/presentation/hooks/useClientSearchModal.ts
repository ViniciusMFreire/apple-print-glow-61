
import { useState } from 'react';
import { useClientSearch } from './useClientSearch';
import { Client } from '../../domain/entities/Client';

export const useClientSearchModal = (onSelectClient: (client: Client) => void) => {
  const [searchTerm, setSearchTerm] = useState('');
  const clientSearch = useClientSearch();

  const handleSearch = async () => {
    await clientSearch.searchClients(searchTerm);
  };

  const handleSelectClient = (client: Client) => {
    onSelectClient(client);
    resetModal();
  };

  const resetModal = () => {
    setSearchTerm('');
    clientSearch.cancelTypeSelection();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !clientSearch.showTypeSelector) {
      handleSearch();
    }
  };

  return {
    searchTerm,
    setSearchTerm,
    handleSearch,
    handleSelectClient,
    handleKeyPress,
    resetModal,
    ...clientSearch
  };
};
