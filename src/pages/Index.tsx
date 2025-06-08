
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { UserProfile } from "@/components/dashboard/UserProfile";
import { AccountStats } from "@/components/dashboard/AccountStats";
import { InvoiceSection } from "@/components/dashboard/InvoiceSection";
import { LimitsSection } from "@/components/dashboard/LimitsSection";
import { RecentMovements } from "@/components/dashboard/RecentMovements";
import { ActivityList } from "@/components/dashboard/ActivityList";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { ResponsiveContainer } from "@/components/ui/responsive-container";
import { ResponsiveGrid } from "@/components/ui/responsive-grid";
import { ResponsiveText } from "@/components/ui/responsive-text";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const clientData = location.state?.client;

  return (
    <div className="min-h-screen bg-background">
      <ResponsiveContainer variant="dashboard">
        {/* Header com botão de logout */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <ResponsiveText size="2xl" weight="bold" color="default">
            Dashboard
          </ResponsiveText>
          <LogoutButton />
        </div>

        {/* Dashboard Header com busca */}
        <div className="mb-6">
          <DashboardHeader />
        </div>
        
        {/* Layout seguindo exatamente a imagem anexa */}
        <div className="space-y-6">
          {/* Perfil do usuário - largura total */}
          <UserProfile clientData={clientData} />
          
          {/* Stats da conta - 3 colunas horizontais */}
          <AccountStats />
          
          {/* Grid principal com 2 colunas */}
          <ResponsiveGrid variant="dashboard" gap="lg">
            {/* Coluna esquerda - 2/3 da largura */}
            <div className="lg:col-span-2 space-y-6">
              {/* Seção de fatura */}
              <InvoiceSection />
              
              {/* Lista de atividades/eventos */}
              <ActivityList />
            </div>
            
            {/* Coluna direita - 1/3 da largura */}
            <div className="lg:col-span-1 space-y-6">
              {/* Limites */}
              <LimitsSection />
              
              {/* Movimentações recentes */}
              <RecentMovements />
            </div>
          </ResponsiveGrid>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default Index;
