
import { Client } from '../../domain/entities/Client';

export interface ClientSearchState {
  clients: Client[];
  loading: boolean;
  error: string | null;
  showResults: boolean;
}

export class ClientSearchPresenter {
  getTypeIcon(type: string): string {
    switch (type) {
      case 'cpf':
      case 'cnpj':
        return 'User';
      case 'telefone':
        return 'Phone';
      case 'contrato':
      case 'pedido':
        return 'FileText';
      case 'conta':
        return 'CreditCard';
      default:
        return 'Search';
    }
  }

  getTypeColor(type: string): string {
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
  }

  getStatusBadgeColor(status: string): string {
    return status === 'Ativo' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-red-100 text-red-800';
  }

  formatClientForDisplay(client: Client) {
    return {
      ...client,
      displayName: client.name,
      displayCpf: client.cpf,
      displayAccount: client.account,
      displayPhone: client.phone || 'Não informado',
      statusColor: this.getStatusBadgeColor(client.status)
    };
  }
}
