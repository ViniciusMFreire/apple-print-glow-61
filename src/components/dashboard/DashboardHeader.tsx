
import { Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { getResponsiveClasses } from "@/utils/responsiveUtils";

export const DashboardHeader = () => {
  return (
    <header className={`flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white rounded-lg shadow-sm gap-4 ${getResponsiveClasses.padding.sm}`}>
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <Menu className={`text-gray-600 flex-shrink-0 ${getResponsiveClasses.iconSize.md}`} />
        <div className="relative flex-1 sm:flex-none w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Pesquise por conta, CPF, CNPJ, telefone, contrato ou pedido..." 
            className="pl-10 w-full sm:w-80 md:w-96 lg:w-[500px] bg-gray-50 border border-gray-200 text-sm hover:border-2 hover:border-verde-dark focus-visible:border-2 focus-visible:border-verde-dark transition-all duration-200"
          />
        </div>
      </div>
    </header>
  );
};
