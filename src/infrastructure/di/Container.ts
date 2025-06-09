
import { AuthUseCase } from '../../application/usecases/AuthUseCase';
import { ClientUseCase } from '../../application/usecases/ClientUseCase';
import { ClientSearchUseCase } from '../../application/usecases/ClientSearchUseCase';
import { LocalAuthRepository } from '../repositories/LocalAuthRepository';
import { MockClientRepository } from '../repositories/MockClientRepository';

class Container {
  private static instance: Container;
  
  private _authRepository = new LocalAuthRepository();
  private _clientRepository = new MockClientRepository();
  
  private _authUseCase = new AuthUseCase(this._authRepository);
  private _clientUseCase = new ClientUseCase(this._clientRepository);
  private _clientSearchUseCase = new ClientSearchUseCase(this._clientRepository);

  static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container();
    }
    return Container.instance;
  }

  get authUseCase(): AuthUseCase {
    return this._authUseCase;
  }

  get clientUseCase(): ClientUseCase {
    return this._clientUseCase;
  }

  get clientSearchUseCase(): ClientSearchUseCase {
    return this._clientSearchUseCase;
  }

  get clientRepository() {
    return this._clientRepository;
  }
}

export default Container;
