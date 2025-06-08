
import { Client, ClientSearchCriteria } from '../entities/Client';

export interface IClientRepository {
  search(criteria: ClientSearchCriteria): Promise<Client[]>;
  getById(id: string): Promise<Client | null>;
}
