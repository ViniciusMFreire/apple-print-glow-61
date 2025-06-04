
import { Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <Menu className="h-6 w-6 text-gray-600" />
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="pesquisar evento..." 
            className="pl-10 w-80 bg-gray-50 border-0 text-sm"
          />
        </div>
      </div>
      
      <div className="text-lg font-semibold text-gray-900">
        GUILHERME
      </div>
    </header>
  );
};
