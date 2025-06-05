
import { Calendar, Scissors, DollarSign } from "lucide-react";
import { getResponsiveClasses, getGridClasses } from "@/utils/responsiveUtils";

export const InvoiceSection = () => {
  const invoiceData = [
    { title: "Vencimento", value: "01/06/2024", icon: Calendar, bgColor: "bg-gray-100", iconColor: "text-gray-600" },
    { title: "Corte", value: "20/05/2024", icon: Scissors, bgColor: "bg-gray-100", iconColor: "text-gray-600" },
    { title: "Valor", value: "R$ 3.630,30", icon: DollarSign, bgColor: "bg-green-100", iconColor: "text-green-600" }
  ];

  return (
    <div className={`bg-white rounded-lg shadow-sm ${getResponsiveClasses.padding.md}`}>
      <h3 className={`font-semibold text-gray-900 mb-4 ${getResponsiveClasses.textSize.base}`}>
        Fatura Resumida
      </h3>
      
      <div className={`${getGridClasses.cards} ${getResponsiveClasses.gap.md}`}>
        {invoiceData.map((item, index) => (
          <div key={index} className="text-center">
            <div className={`${getResponsiveClasses.iconSize.xl} ${item.bgColor} rounded-lg flex items-center justify-center mx-auto mb-2`}>
              <item.icon className={`${getResponsiveClasses.iconSize.md} ${item.iconColor}`} />
            </div>
            <p className={`text-gray-600 ${getResponsiveClasses.textSize.xs}`}>
              {item.title}
            </p>
            <p className={`font-semibold text-gray-900 ${getResponsiveClasses.textSize.sm}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
