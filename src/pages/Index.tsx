
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { UserProfile } from "@/components/dashboard/UserProfile";
import { AccountStats } from "@/components/dashboard/AccountStats";
import { InvoiceSection } from "@/components/dashboard/InvoiceSection";
import { LimitsSection } from "@/components/dashboard/LimitsSection";
import { RecentMovements } from "@/components/dashboard/RecentMovements";
import { ActivityList } from "@/components/dashboard/ActivityList";
import { LogoutButton } from "@/components/auth/LogoutButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header com botão de logout */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-verde-dark">Dashboard</h1>
          <LogoutButton />
        </div>

        {/* Dashboard Header com busca */}
        <div className="mb-6">
          <DashboardHeader />
        </div>
        
        {/* Layout principal em grid responsivo */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mb-6">
          {/* Coluna principal esquerda */}
          <div className="xl:col-span-3 space-y-6">
            {/* Perfil do usuário - largura total */}
            <UserProfile />
            
            {/* Stats da conta - 3 colunas */}
            <AccountStats />
            
            {/* Seção de fatura */}
            <InvoiceSection />
          </div>
          
          {/* Sidebar direita */}
          <div className="xl:col-span-1 space-y-6">
            <LimitsSection />
            <RecentMovements />
          </div>
        </div>
        
        {/* Lista de atividades - largura total */}
        <div className="w-full">
          <ActivityList />
        </div>
      </div>
    </div>
  );
};

export default Index;
