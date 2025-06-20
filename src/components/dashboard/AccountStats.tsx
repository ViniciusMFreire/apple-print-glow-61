import { useState } from "react";
import { getResponsiveClasses } from "@/utils/responsiveUtils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Ban, Clock, CreditCard } from "lucide-react";

export const AccountStats = () => {
  const [openPopover, setOpenPopover] = useState<string | null>(null);

  const stats = [
    { 
      title: "Bloqueio", 
      value: "3", 
      color: "red",
      bgColor: "bg-red-100",
      iconColor: "text-red-500",
      icon: Ban,
      details: "Cliente possui 3 tipos de bloqueios ativos.",
      blockDetails: [
        "BB - Bloqueio de Inatividade",
        "BL - Bloqueio por Erro de Logradouro", 
        "NE - B.Cartão Não Entregue"
      ]
    },
    { 
      title: "Atraso", 
      value: "5468 Dias", 
      color: "orange",
      bgColor: "bg-orange-100", 
      iconColor: "text-orange-500",
      icon: Clock,
      details: "Cliente possui débitos em atraso há 5468 dias.",
      delayDetails: {
        status: "Em ABERTO - FATURA SALDO CONGELADO - CONTRATO",
        date: "10/06/2010",
        installment: "Parcela 1",
        totalValue: "R$ 145,90",
        openValue: "R$ 90,81",
        delayValue: "R$ 90,81"
      }
    },
    { 
      title: "Cartão Ativo", 
      value: "5091.51**.****.0430", 
      color: "green",
      bgColor: "bg-green-100",
      iconColor: "text-green-500",
      icon: CreditCard,
      details: "Cliente possui 2 cartões ativos no momento.",
      cardDetails: [
        {
          number: "5091.51**.****.6917",
          type: "TITULAR",
          status: "EMBOSSING",
          features: "CHIP",
          company: "LOJAS QUERO-QUERO S/A 263",
          category: "MULTIPLO",
          brand: "ELO"
        },
        {
          number: "6278.94**.****.4696",
          type: "AMIGO(A)",
          status: "BLOQUEADO",
          features: "VIRTUAL",
          company: "LOJAS QUERO-QUERO S/A 263",
          category: "CHIP",
          brand: "VERDECARD"
        }
      ]
    }
  ];

  const handlePopoverToggle = (statTitle: string) => {
    setOpenPopover(openPopover === statTitle ? null : statTitle);
  };

  return (
    <TooltipProvider>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Popover key={index} open={openPopover === stat.title} onOpenChange={() => handlePopoverToggle(stat.title)}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <PopoverTrigger asChild>
                    <div className="bg-white rounded-lg shadow-sm text-center cursor-pointer hover:shadow-md transition-shadow p-3 sm:p-4 h-full flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px] w-full overflow-hidden">
                      <div className={`w-10 h-10 sm:w-14 sm:h-14 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 flex-shrink-0`}>
                        <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 ${stat.iconColor}" />
                      </div>
                      <h3 className="font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base truncate w-full">
                        {stat.title}
                      </h3>
                      <p className="font-bold text-gray-900 text-xs sm:text-sm break-words px-1 sm:px-2 text-center leading-tight w-full">
                        {stat.value}
                      </p>
                    </div>
                  </PopoverTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Clique para fixar informações</p>
                </TooltipContent>
              </Tooltip>
              
              <PopoverContent className="w-80 sm:w-96 max-w-[calc(100vw-2rem)]">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">{stat.title}</h4>
                  <p className="text-sm text-gray-600">{stat.details}</p>
                  
                  {stat.title === "Bloqueio" && stat.blockDetails ? (
                    <div className="space-y-3 mt-4">
                      {stat.blockDetails.map((block, blockIndex) => (
                        <div key={blockIndex} className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                          <p className="text-sm font-medium text-red-800">
                            {block}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : stat.title === "Cartão Ativo" && stat.cardDetails ? (
                    <div className="space-y-3 mt-4">
                      {stat.cardDetails.map((card, cardIndex) => (
                        <div key={cardIndex} className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                          <div className="space-y-2">
                            <p className="text-sm font-semibold text-green-800">
                              {card.number}
                            </p>
                            <p className="text-sm text-gray-700">
                              <span className="font-medium">Tipo:</span> {card.type}
                            </p>
                            <div className="grid grid-cols-1 gap-2 text-sm">
                              <p className="text-gray-700">
                                <span className="font-medium">Status:</span> {card.status}
                              </p>
                              <p className="text-gray-700">
                                <span className="font-medium">Características:</span> {card.features}
                              </p>
                              <p className="text-gray-700">
                                <span className="font-medium">Empresa:</span> {card.company}
                              </p>
                              <p className="text-gray-700">
                                <span className="font-medium">Categoria:</span> {card.category}
                              </p>
                              <p className="text-green-700 font-semibold">
                                <span className="font-medium">Bandeira:</span> {card.brand}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : stat.title === "Atraso" && stat.delayDetails ? (
                    <div className="space-y-3 mt-4">
                      <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-orange-800">
                            {stat.delayDetails.status}
                          </p>
                          <p className="text-sm text-gray-700">
                            <span className="font-medium">Data:</span> {stat.delayDetails.date}
                          </p>
                          <div className="grid grid-cols-1 gap-2 text-sm">
                            <p className="text-gray-700">
                              <span className="font-medium">{stat.delayDetails.installment}</span>
                            </p>
                            <p className="text-gray-700">
                              <span className="font-medium">Valor Total:</span> {stat.delayDetails.totalValue}
                            </p>
                            <p className="text-gray-700">
                              <span className="font-medium">Valor em Aberto:</span> {stat.delayDetails.openValue}
                            </p>
                            <p className="text-orange-700 font-semibold">
                              <span className="font-medium">Atraso:</span> {stat.delayDetails.delayValue}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={`text-2xl font-bold text-${stat.color}-600`}>
                      {stat.value}
                    </div>
                  )}
                </div>
              </PopoverContent>
            </Popover>
          );
        })}
      </div>
    </TooltipProvider>
  );
};
