
import { Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ResponsiveContainer } from "@/components/ui/responsive-container";

export const DashboardHeader = () => {
  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-card rounded-lg shadow-sm gap-4">
      <ResponsiveContainer variant="header">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Menu className="text-muted-foreground flex-shrink-0 h-5 w-5 md:h-6 md:w-6" />
          <div className="relative flex-1 sm:flex-none w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Pesquise por conta, CPF, CNPJ, telefone, contrato ou pedido..." 
              className="pl-10 w-full sm:w-80 md:w-96 lg:w-[500px] bg-muted border border-border text-sm hover:border-2 hover:border-primary focus-visible:border-2 focus-visible:border-primary transition-all duration-200"
            />
          </div>
        </div>
      </ResponsiveContainer>
    </header>
  );
};
