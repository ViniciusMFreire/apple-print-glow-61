
import { getResponsiveClasses } from "@/utils/responsiveUtils";

export const UserProfile = () => {
  return (
    <div className={`bg-white rounded-lg shadow-sm ${getResponsiveClasses.padding.md}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
          A
        </div>
        <div className="flex-1 min-w-0">
          <h2 className={`font-semibold text-gray-900 truncate ${getResponsiveClasses.textSize.lg}`}>
            ADRIANO FAGUNDES AVANCINI
          </h2>
          <p className={`text-gray-600 ${getResponsiveClasses.textSize.sm}`}>
            953.267.400-44
          </p>
          <div className={`flex flex-wrap gap-2 md:gap-4 mt-2 ${getResponsiveClasses.textSize.xs}`}>
            <span className="text-black">
              Aniversário <span className="text-green-600 font-bold">Hoje</span>
            </span>
            <span className="text-black">
              Cliente <span className="text-orange-500 font-bold">Colaborador</span>
            </span>
            <span className="text-gray-600">Pessoa Física</span>
          </div>
        </div>
      </div>
    </div>
  );
};
