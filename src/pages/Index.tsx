
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
      <div className="container mx-auto px-4 py-6">
        {/* Header com botão de logout */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-verde-dark">Dashboard</h1>
          <LogoutButton />
        </div>

        <DashboardHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 space-y-6">
            <UserProfile />
            <AccountStats />
            <InvoiceSection />
          </div>
          
          <div className="space-y-6">
            <LimitsSection />
            <RecentMovements />
          </div>
        </div>
        
        <ActivityList />
      </div>
    </div>
  );
};

export default Index;
