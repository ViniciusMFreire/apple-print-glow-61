
import { getResponsiveClasses } from "@/utils/responsiveUtils";
import { Progress } from "@/components/ui/progress";

export const LimitsSection = () => {
  const limitsData = [
    { 
      label: "GLOBAL", 
      percentage: 30,
      taken: "R$ 1.445,00",
      available: "R$ 6.645,25",
      total: "R$ 8.090,25"
    },
    { 
      label: "EP", 
      percentage: 0,
      taken: "R$ 6.645,61",
      available: "R$ 0,00",
      total: "R$ 6.645,61"
    }
  ];

  return (
    <div className={`bg-white rounded-lg shadow-sm ${getResponsiveClasses.padding.md}`}>
      <h3 className={`font-semibold text-gray-900 mb-4 ${getResponsiveClasses.textSize.base}`}>
        Limites
      </h3>
      
      <div className={`space-y-6 ${getResponsiveClasses.gap.lg}`}>
        {limitsData.map((limit, index) => (
          <div key={index} className="space-y-3">
            <div className="flex justify-between items-center">
              <span className={`font-medium text-gray-900 ${getResponsiveClasses.textSize.sm}`}>
                {limit.label}
              </span>
              <span className={`text-gray-600 ${getResponsiveClasses.textSize.xs}`}>
                Utilizado
              </span>
              <span className={`text-gray-600 ${getResponsiveClasses.textSize.xs}`}>
                Total
              </span>
            </div>
            
            <div className="relative">
              <Progress 
                value={limit.percentage} 
                className="h-6 bg-gray-200"
              />
              <style jsx>{`
                .bg-primary {
                  background-color: #16a34a !important;
                }
              `}</style>
            </div>
            
            <div className={`flex justify-between items-center ${getResponsiveClasses.textSize.xs}`}>
              <span className="text-gray-600">
                {limit.taken}
              </span>
              <span className="text-gray-600">
                {limit.total}
              </span>
            </div>
            
            <div className={`text-center ${getResponsiveClasses.textSize.xs}`}>
              <p className="text-gray-600">Disponível: {limit.available}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
