
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer } from "@/components/ui/responsive-container";

interface DashboardHeaderProps {
  onSearchUser: () => void;
}

export const DashboardHeader = ({ onSearchUser }: DashboardHeaderProps) => {
  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-card rounded-lg shadow-sm gap-4">
      <ResponsiveContainer variant="header">
        <div className="flex items-center justify-between gap-3 w-full">
          <Menu className="text-muted-foreground flex-shrink-0 h-5 w-5 md:h-6 md:w-6" />
          <Button 
            onClick={onSearchUser}
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 border-2 border-border hover:border-primary transition-all duration-200"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Pesquisar outro Cliente</span>
            <span className="sm:hidden">Pesquisar Cliente</span>
          </Button>
        </div>
      </ResponsiveContainer>
    </header>
  );
};
