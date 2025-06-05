
import { getResponsiveClasses } from "@/utils/responsiveUtils";

export const LimitsSection = () => {
  const limitsData = [
    { 
      label: "Global", 
      percentage: 30,
      used: "R$0,00",
      total: "R$90,00"
    },
    { 
      label: "EP", 
      percentage: 100,
      used: "R$0,00",
      total: "R$90,00"
    },
    { 
      label: "Over", 
      percentage: 50,
      used: "R$0,00",
      total: "R$90,00"
    },
    { 
      label: "Loja", 
      percentage: 75,
      used: "R$0,00",
      total: "R$90,00"
    }
  ];

  return (
    <div className={`bg-white rounded-lg shadow-sm ${getResponsiveClasses.padding.md}`}>
      <h3 className={`font-semibold text-gray-900 mb-6 ${getResponsiveClasses.textSize.base}`}>
        Limites
      </h3>
      
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span></span>
          <span>Utilizado</span>
          <span>Total</span>
        </div>
        
        {limitsData.map((limit, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className={`font-medium text-gray-900 ${getResponsiveClasses.textSize.sm}`}>
                {limit.label}
              </span>
              <span className={`text-gray-600 ${getResponsiveClasses.textSize.sm}`}>
                {limit.used}
              </span>
              <span className={`text-gray-600 ${getResponsiveClasses.textSize.sm}`}>
                {limit.total}
              </span>
            </div>
            
            <div className="relative h-6 bg-gray-200 rounded">
              <div 
                className="h-full bg-yellow-400 rounded transition-all duration-300"
                style={{ width: `${limit.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
