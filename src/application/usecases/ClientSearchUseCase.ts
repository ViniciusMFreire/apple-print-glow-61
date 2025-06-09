
import { IClientRepository } from '../../domain/repositories/IClientRepository';
import { Client, ClientSearchCriteria } from '../../domain/entities/Client';
import { validateCPF, validatePhone } from '../../utils/cpfValidator';

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
    const cleanValue = value.replace(/\D/g, '');
    
    // Verifica se é um CPF válido
    if (cleanValue.length === 11 && validateCPF(cleanValue)) {
      return 'CPF';
    }
    
    // Verifica se é um celular válido
    if (cleanValue.length === 11 && validatePhone(cleanValue)) {
      return 'Telefone';
    }
    
    // Verifica CNPJ
    if (cleanValue.length === 14) return 'CNPJ';
    
    // Verifica outros padrões
    if (/^CT-/.test(value.toUpperCase())) return 'Contrato';
    if (/^PD-/.test(value.toUpperCase())) return 'Pedido';
    if (cleanValue.length === 8) return 'Conta';
    
    return 'Texto';
  }

  checkAmbiguousSearch(value: string): { isCpf: boolean; isPhone: boolean } {
    const cleanValue = value.replace(/\D/g, '');
    
    if (cleanValue.length === 11) {
      const isCpf = validateCPF(cleanValue);
      const isPhone = validatePhone(cleanValue);
      return { isCpf, isPhone };
    }
    
    return { isCpf: false, isPhone: false };
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
