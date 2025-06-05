
import { useState } from "react";
import { getResponsiveClasses, getGridClasses } from "@/utils/responsiveUtils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const AccountStats = () => {
  const [openPopover, setOpenPopover] = useState<string | null>(null);

  const stats = [
    { 
      title: "Bloqueio", 
      value: "0", 
      color: "red",
      bgColor: "bg-red-100",
      iconColor: "bg-red-500",
      details: "Nenhum bloqueio ativo na conta do cliente."
    },
    { 
      title: "Atraso", 
      value: "0", 
      color: "orange",
      bgColor: "bg-orange-100", 
      iconColor: "bg-orange-500",
      details: "Nenhum dia de atraso nas faturas do cliente."
    },
    { 
      title: "Cartão Ativo", 
      value: "2", 
      color: "green",
      bgColor: "bg-green-100",
      iconColor: "bg-green-500",
      details: "Cliente possui 2 cartões ativos no momento."
    }
  ];

  const handlePopoverToggle = (statTitle: string) => {
    setOpenPopover(openPopover === statTitle ? null : statTitle);
  };

  return (
    <TooltipProvider>
      <div className={getGridClasses.cards}>
        {stats.map((stat, index) => (
          <Popover key={index} open={openPopover === stat.title} onOpenChange={() => handlePopoverToggle(stat.title)}>
            <Tooltip>
              <TooltipTrigger asChild>
                <PopoverTrigger asChild>
                  <div className={`bg-white rounded-lg shadow-sm text-center cursor-pointer hover:shadow-md transition-shadow ${getResponsiveClasses.padding.sm}`}>
                    <div className={`w-8 h-8 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-2`}>
                      <div className={`w-4 h-4 ${stat.iconColor} ${stat.color === 'orange' ? 'rounded' : 'rounded-full'}`}></div>
                    </div>
                    <h3 className={`font-medium text-gray-900 ${getResponsiveClasses.textSize.sm}`}>
                      {stat.title}
                    </h3>
                    <p className={`font-bold text-gray-900 ${getResponsiveClasses.textSize.xl}`}>
                      {stat.value}
                    </p>
                  </div>
                </PopoverTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Clique para fixar informações</p>
              </TooltipContent>
            </Tooltip>
            
            <PopoverContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">{stat.title}</h4>
                <p className="text-sm text-gray-600">{stat.details}</p>
                <div className={`text-2xl font-bold text-${stat.color}-600`}>
                  {stat.value}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </TooltipProvider>
  );
};
