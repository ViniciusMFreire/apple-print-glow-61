
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { UserProfile } from "@/components/dashboard/UserProfile";
import { AccountStats } from "@/components/dashboard/AccountStats";
import { LimitsSection } from "@/components/dashboard/LimitsSection";
import { InvoiceSection } from "@/components/dashboard/InvoiceSection";
import { RecentMovements } from "@/components/dashboard/RecentMovements";
import { ActivityList } from "@/components/dashboard/ActivityList";
import { getResponsiveClasses, getGridClasses } from "@/utils/responsiveUtils";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-system">
      <div className={`max-w-7xl mx-auto space-y-4 md:space-y-6 ${getResponsiveClasses.padding.sm}`}>
        <DashboardHeader />
        
        <div className={`${getGridClasses.layout} ${getResponsiveClasses.gap.md}`}>
          {/* Left Column */}
          <div className="space-y-4 md:space-y-6">
            <UserProfile />
            <AccountStats />
            
            {/* Mobile: Stack limits and invoice vertically */}
            <div className={`grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 ${getResponsiveClasses.gap.md}`}>
              <LimitsSection />
              <InvoiceSection />
            </div>
            
            <RecentMovements />
          </div>
          
          {/* Right Column */}
          <div className="space-y-4 md:space-y-6">
            <ActivityList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
