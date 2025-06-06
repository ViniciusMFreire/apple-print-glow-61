
import { getResponsiveClasses } from "@/utils/responsiveUtils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const LimitsSection = () => {
  const limitsData = [
    { 
      label: "Global", 
      percentage: 30,
      used: "R$0,00",
      total: "R$90,00",
      available: "R$90,00"
    },
    { 
      label: "EP", 
      percentage: 100,
      used: "R$0,00",
      total: "R$90,00",
      available: "R$0,00"
    },
    { 
      label: "Over", 
      percentage: 50,
      used: "R$0,00",
      total: "R$90,00",
      available: "R$45,00"
    },
    { 
      label: "Loja", 
      percentage: 75,
      used: "R$0,00",
      total: "R$90,00",
      available: "R$22,50"
    }
  ];

  return (
    <TooltipProvider>
      <div className={`bg-white rounded-lg shadow-sm ${getResponsiveClasses.padding.md}`}>
        <h3 className={`font-semibold text-gray-900 mb-6 ${getResponsiveClasses.textSize.base}`}>
          Limites
        </h3>
        
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span></span>
            <span>Disponível</span>
            <span>Total</span>
          </div>
          
          {limitsData.map((limit, index) => (
            <div key={index} className="space-y-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex justify-between items-center cursor-pointer">
                    <span className={`font-medium text-gray-900 ${getResponsiveClasses.textSize.sm}`}>
                      {limit.label}
                    </span>
                    <span className={`text-gray-600 ${getResponsiveClasses.textSize.sm}`}>
                      {limit.available}
                    </span>
                    <span className={`text-gray-600 ${getResponsiveClasses.textSize.sm}`}>
                      {limit.total}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">
                    <span className="font-medium text-verde-dark">Utilizado:</span> {limit.used}
                  </p>
                </TooltipContent>
              </Tooltip>
              
              <div className="relative h-6 bg-gray-200 rounded">
                <div 
                  className="h-full rounded transition-all duration-300"
                  style={{ 
                    width: `${limit.percentage}%`,
                    backgroundColor: '#007030'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};
