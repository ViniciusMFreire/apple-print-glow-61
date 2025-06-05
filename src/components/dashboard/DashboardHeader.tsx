
import { Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { getResponsiveClasses } from "@/utils/responsiveUtils";

export const DashboardHeader = () => {
  const filters = [
    "Cadastro",
    "Cartão", 
    "Mercantil",
    "Conta digital",
    "Atendimento",
    "Atendimento crítico",
    "APP QQ PAG"
  ];

  return (
    <header className={`flex flex-col bg-white rounded-lg shadow-sm gap-3 sm:gap-4 ${getResponsiveClasses.padding.sm}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3 md:gap-4 w-full sm:w-auto">
          <Menu className={`text-gray-600 ${getResponsiveClasses.iconSize.md}`} />
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Pesquise por conta, CPF, CNPJ, Telefone, Contrato ou Pedido." 
              className="pl-10 w-full sm:w-60 md:w-80 bg-gray-50 border-0 text-sm"
            />
          </div>
        </div>
        
        <div className={`font-semibold text-gray-900 self-end sm:self-auto ${getResponsiveClasses.textSize.base}`}>
          GUILHERME
        </div>
      </div>

      {/* Filters Section */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
        {filters.map((filter, index) => (
          <button
            key={index}
            className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors font-system"
          >
            {filter}
          </button>
        ))}
      </div>
    </header>
  );
};
