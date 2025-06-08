
import { IClientRepository } from '../../domain/repositories/IClientRepository';
import { Client, ClientSearchCriteria } from '../../domain/entities/Client';

export class MockClientRepository implements IClientRepository {
  private mockClients: Client[] = [
    {
      id: "1",
      name: "ADRIANO FAGUNDES AVANCINI",
      cpf: "953.267.400-44",
      account: "123456",
      phone: "(48) 99999-9999",
      birthDate: "15/03/1985",
      status: "Ativo",
      clientType: "Colaborador",
      category: "Pessoa Física",
      hasDigitalAccount: true
    },
    {
      id: "2",
      name: "VINICIUS MARTINS FREIRE",
      cpf: "08635874960",
      account: "13729431",
      phone: "(48) 99622-8318",
      birthDate: "08/01/1995",
      status: "Ativo",
      clientType: "Cliente",
      category: "Pessoa Física",
      hasDigitalAccount: true
    }
  ];

  async search(criteria: ClientSearchCriteria): Promise<Client[]> {
    // Simula delay de rede
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const searchValue = criteria.value.toLowerCase().replace(/\D/g, '');
    
    return this.mockClients.filter(client => {
      switch (criteria.type) {
        case 'cpf':
          return client.cpf.replace(/\D/g, '').includes(searchValue);
        case 'account':
          return client.account.includes(searchValue);
        case 'phone':
          return client.phone?.replace(/\D/g, '').includes(searchValue);
        default:
          return (
            client.name.toLowerCase().includes(criteria.value.toLowerCase()) ||
            client.cpf.replace(/\D/g, '').includes(searchValue) ||
            client.account.includes(searchValue)
          );
      }
    });
  }

  async getById(id: string): Promise<Client | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.mockClients.find(client => client.id === id) || null;
  }
}
