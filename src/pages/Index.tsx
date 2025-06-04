
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { UserProfile } from "@/components/dashboard/UserProfile";
import { AccountStats } from "@/components/dashboard/AccountStats";
import { LimitsSection } from "@/components/dashboard/LimitsSection";
import { InvoiceSection } from "@/components/dashboard/InvoiceSection";
import { RecentMovements } from "@/components/dashboard/RecentMovements";
import { ActivityList } from "@/components/dashboard/ActivityList";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-system">
      <div className="max-w-7xl mx-auto p-4 space-y-6">
        <DashboardHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <UserProfile />
            <AccountStats />
            <LimitsSection />
            <InvoiceSection />
            <RecentMovements />
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <ActivityList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
