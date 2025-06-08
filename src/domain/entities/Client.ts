
export interface Client {
  id: string;
  name: string;
  cpf: string;
  account: string;
  phone?: string;
  birthDate?: string;
  status: 'Ativo' | 'Inativo' | 'Bloqueado';
  clientType?: string;
  category?: string;
  hasDigitalAccount?: boolean;
}

export interface ClientSearchCriteria {
  value: string;
  type: 'cpf' | 'account' | 'phone' | 'contract';
}
