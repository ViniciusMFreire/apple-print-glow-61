
import { getResponsiveClasses } from "@/utils/responsiveUtils";

export const UserProfile = () => {
  const hasDigitalAccount = true;

  return (
    <div className={`bg-white rounded-lg shadow-sm ${getResponsiveClasses.padding.md} w-full`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
          A
        </div>
        <div className="flex-1 min-w-0 w-full">
          <h2 className={`font-semibold text-gray-900 truncate ${getResponsiveClasses.textSize.lg} mb-1`}>
            ADRIANO FAGUNDES AVANCINI
          </h2>
          <p className={`text-gray-600 ${getResponsiveClasses.textSize.sm} mb-3`}>
            CPF: 953.267.400-44 | Conta: 123456
          </p>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 ${getResponsiveClasses.textSize.xs}`}>
            <div className="flex flex-col">
              <span className="text-gray-500">Aniversário</span>
              <span className="text-green-600 font-bold">Hoje</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500">Tipo Cliente</span>
              <span className="text-orange-500 font-bold">Colaborador</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500">Categoria</span>
              <span className="text-gray-600 font-medium">Pessoa Física</span>
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
