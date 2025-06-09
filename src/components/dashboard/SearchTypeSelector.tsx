
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Phone } from 'lucide-react';
import { ResponsiveText } from '@/components/ui/responsive-text';

interface SearchTypeSelectorProps {
  searchValue: string;
  onSelectType: (type: 'cpf' | 'phone') => void;
  onCancel: () => void;
}

export const SearchTypeSelector = ({ searchValue, onSelectType, onCancel }: SearchTypeSelectorProps) => {
  return (
    <Card className="border-orange-200 bg-orange-50">
      <CardHeader className="pb-3">
        <CardTitle className="text-orange-800 flex items-center gap-2">
          <User className="h-5 w-5" />
          Selecionar Tipo de Busca
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ResponsiveText size="sm" className="text-orange-700">
          O valor "{searchValue}" pode ser tanto um CPF quanto um número de celular válido. 
          Como você gostaria de pesquisar?
        </ResponsiveText>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={() => onSelectType('cpf')}
            variant="outline"
            className="flex-1 h-12 border-blue-300 bg-blue-50 hover:bg-blue-100 text-blue-800"
          >
            <User className="h-4 w-4 mr-2" />
            Buscar como CPF
          </Button>
          
          <Button
            onClick={() => onSelectType('phone')}
            variant="outline"
            className="flex-1 h-12 border-green-300 bg-green-50 hover:bg-green-100 text-green-800"
          >
            <Phone className="h-4 w-4 mr-2" />
            Buscar como Celular
          </Button>
        </div>
        
        <Button
          onClick={onCancel}
          variant="ghost"
          className="w-full text-gray-600"
        >
          Cancelar
        </Button>
      </CardContent>
    </Card>
  );
};
