
export interface ValidationResult {
  isValid: boolean;
  type: 'cpf' | 'phone' | 'cnpj' | 'account' | 'contract' | 'order' | 'text';
}

export interface AmbiguityCheck {
  isCpf: boolean;
  isPhone: boolean;
  isCnpj: boolean;
  isAmbiguous: boolean;
  possibleTypes: string[];
}

export class DocumentValidator {
  static validateCPF(cpf: string): boolean {
    const cleanCpf = cpf.replace(/\D/g, '');
    
    console.log('Validando CPF:', cleanCpf);
    
    if (cleanCpf.length !== 11) {
      console.log('CPF inválido: não tem 11 dígitos');
      return false;
    }
    
    if (/^(\d)\1{10}$/.test(cleanCpf)) {
      console.log('CPF inválido: todos os dígitos são iguais');
      return false;
    }
    
    // Validação do primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cleanCpf[i]) * (10 - i);
    }
    let remainder = sum % 11;
    let firstDigit = remainder < 2 ? 0 : 11 - remainder;
    
    console.log('Primeiro dígito calculado:', firstDigit, 'Dígito no CPF:', parseInt(cleanCpf[9]));
    
    if (parseInt(cleanCpf[9]) !== firstDigit) {
      console.log('CPF inválido: primeiro dígito verificador incorreto');
      return false;
    }
    
    // Validação do segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cleanCpf[i]) * (11 - i);
    }
    remainder = sum % 11;
    let secondDigit = remainder < 2 ? 0 : 11 - remainder;
    
    console.log('Segundo dígito calculado:', secondDigit, 'Dígito no CPF:', parseInt(cleanCpf[10]));
    
    const isValid = parseInt(cleanCpf[10]) === secondDigit;
    console.log('CPF válido:', isValid);
    
    return isValid;
  }

  static validatePhone(phone: string): boolean {
    const cleanPhone = phone.replace(/\D/g, '');
    console.log('Validando telefone:', cleanPhone);
    
    // Celular brasileiro: 11 dígitos (DDD + 9 + 8 dígitos)
    const isValid = cleanPhone.length === 11 && cleanPhone[2] === '9';
    console.log('Telefone válido:', isValid);
    
    return isValid;
  }

  static validateCNPJ(cnpj: string): boolean {
    const cleanCnpj = cnpj.replace(/\D/g, '');
    return cleanCnpj.length === 14;
  }

  static checkAmbiguity(value: string): AmbiguityCheck {
    const cleanValue = value.replace(/\D/g, '');
    
    console.log('Verificando ambiguidade para:', value, 'Limpo:', cleanValue);
    
    const isCpf = cleanValue.length === 11 && this.validateCPF(cleanValue);
    const isPhone = cleanValue.length === 11 && this.validatePhone(cleanValue);
    const isCnpj = cleanValue.length === 14 && this.validateCNPJ(cleanValue);
    
    const possibleTypes: string[] = [];
    if (isCpf) possibleTypes.push('CPF');
    if (isPhone) possibleTypes.push('Telefone');
    if (isCnpj) possibleTypes.push('CNPJ');
    
    const isAmbiguous = possibleTypes.length > 1;
    
    console.log('É CPF válido:', isCpf);
    console.log('É telefone válido:', isPhone);
    console.log('É CNPJ válido:', isCnpj);
    console.log('É ambíguo:', isAmbiguous);
    console.log('Tipos possíveis:', possibleTypes);
    
    return {
      isCpf,
      isPhone,
      isCnpj,
      isAmbiguous,
      possibleTypes
    };
  }

  static detectPrimaryType(value: string): string {
    const cleanValue = value.replace(/\D/g, '');
    
    console.log('Detectando tipo primário para:', value, 'Limpo:', cleanValue);
    
    // Verifica padrões específicos primeiro
    if (/^CT-/.test(value.toUpperCase())) return 'Contrato';
    if (/^PD-/.test(value.toUpperCase())) return 'Pedido';
    if (cleanValue.length === 8) return 'Conta';
    
    // Para números de 11 dígitos, verifica ambiguidade
    if (cleanValue.length === 11) {
      const ambiguity = this.checkAmbiguity(value);
      
      if (ambiguity.isAmbiguous) {
        // Retorna o primeiro tipo válido, mas a ambiguidade será tratada separadamente
        return ambiguity.possibleTypes[0];
      }
      
      if (ambiguity.isCpf) return 'CPF';
      if (ambiguity.isPhone) return 'Telefone';
    }
    
    // Verifica CNPJ
    if (cleanValue.length === 14) return 'CNPJ';
    
    return 'Texto';
  }
}
