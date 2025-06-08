
import { getResponsiveClasses } from "@/utils/responsiveUtils";
import { Client } from "@/domain/entities/Client";

interface UserProfileProps {
  clientData?: Client;
}

export const UserProfile = ({ clientData }: UserProfileProps) => {
  const hasDigitalAccount = clientData?.hasDigitalAccount ?? true;

  return (
    <div className={`bg-white rounded-lg shadow-sm ${getResponsiveClasses.padding.md} w-full`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
          {clientData?.name ? clientData.name.charAt(0) : 'A'}
        </div>
        <div className="flex-1 min-w-0 w-full">
          <h2 className={`font-semibold text-gray-900 truncate ${getResponsiveClasses.textSize.lg} mb-1`}>
            {clientData?.name || 'ADRIANO FAGUNDES AVANCINI'}
          </h2>
          <p className={`text-gray-600 ${getResponsiveClasses.textSize.sm} mb-3`}>
            CPF: {clientData?.cpf || '953.267.400-44'} | Conta: {clientData?.account || '123456'}
          </p>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 ${getResponsiveClasses.textSize.xs}`}>
            <div className="flex flex-col">
              <span className="text-gray-500">Aniversário</span>
              <span className="text-green-600 font-bold">{clientData?.birthDate || 'Hoje'}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500">Tipo Cliente</span>
              <span className="text-orange-500 font-bold">{clientData?.clientType || 'Colaborador'}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500">Categoria</span>
              <span className="text-gray-600 font-medium">{clientData?.category || 'Pessoa Física'}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500">Conta Digital</span>
              {hasDigitalAccount ? (
                <span className="text-green-600 font-bold">Possui</span>
              ) : (
                <span className="text-red-600 font-bold">Não possui</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
