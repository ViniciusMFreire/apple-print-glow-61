
export const validateCPF = (cpf: string): boolean => {
  // Remove caracteres não numéricos
  const cleanCpf = cpf.replace(/\D/g, '');
  
  console.log('Validando CPF:', cleanCpf);
  
  // Verifica se tem 11 dígitos
  if (cleanCpf.length !== 11) {
    console.log('CPF inválido: não tem 11 dígitos');
    return false;
  }
  
  // Verifica se todos os dígitos são iguais (ex: 111.111.111-11)
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
};

export const validatePhone = (phone: string): boolean => {
  const cleanPhone = phone.replace(/\D/g, '');
  console.log('Validando telefone:', cleanPhone);
  
  // Celular brasileiro: 11 dígitos (DDD + 9 + 8 dígitos)
  const isValid = cleanPhone.length === 11 && cleanPhone[2] === '9';
  console.log('Telefone válido:', isValid);
  
  return isValid;
};
