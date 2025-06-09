
import { IClientRepository } from '../../domain/repositories/IClientRepository';
import { Client, ClientSearchCriteria } from '../../domain/entities/Client';
import { DocumentValidator } from '../../lib/validators';

export class ClientSearchUseCase {
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

  detectSearchType(value: string): string {
    return DocumentValidator.detectPrimaryType(value);
  }

  checkAmbiguousSearch(value: string): { isCpf: boolean; isPhone: boolean } {
    const ambiguity = DocumentValidator.checkAmbiguity(value);
    return {
      isCpf: ambiguity.isCpf,
      isPhone: ambiguity.isPhone
    };
  }

  mapSearchTypeToEnum(type: string): 'cpf' | 'account' | 'phone' | 'contract' {
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
  }
}
