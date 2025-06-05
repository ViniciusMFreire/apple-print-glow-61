
import { Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const DashboardHeader = () => {
  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white rounded-lg p-3 md:p-4 shadow-sm gap-3 sm:gap-4">
      <div className="flex items-center gap-3 md:gap-4 w-full sm:w-auto">
        <Menu className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
        <div className="relative flex-1 sm:flex-none">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="pesquisar cliente..." 
            className="pl-10 w-full sm:w-60 md:w-80 bg-gray-50 border-0 text-sm"
          />
        </div>
      </div>
      
      <div className="text-base md:text-lg font-semibold text-gray-900 self-end sm:self-auto">
        GUILHERME
      </div>
    </header>
  );
};
