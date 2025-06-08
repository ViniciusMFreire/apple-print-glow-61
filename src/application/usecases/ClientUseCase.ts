
import { IClientRepository } from '../../domain/repositories/IClientRepository';
import { Client, ClientSearchCriteria } from '../../domain/entities/Client';

export class ClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async searchClients(criteria: ClientSearchCriteria): Promise<Client[]> {
    if (!criteria.value.trim()) {
      throw new Error('Critério de busca não pode estar vazio');
    }
    
    return await this.clientRepository.search(criteria);
  }

  async getClientById(id: string): Promise<Client | null> {
    if (!id) {
      throw new Error('ID do cliente é obrigatório');
    }
    
    return await this.clientRepository.getById(id);
  }
}
