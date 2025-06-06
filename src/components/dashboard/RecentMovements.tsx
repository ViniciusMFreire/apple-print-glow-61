
import { getResponsiveClasses } from "@/utils/responsiveUtils";

export const RecentMovements = () => {
  const movements = [
    { type: "Atualização cadastro", date: "09/01/2024" },
    { type: "Compra On-us", date: "25/09/2024" },
    { type: "Última compra Off-us", date: "02/01/2024" },
    { type: "Cliente desde", date: "25/09/2024" }
  ];

  return (
    <div className={`bg-white rounded-lg shadow-sm ${getResponsiveClasses.padding.md}`}>
      <h3 className={`font-semibold text-gray-900 mb-4 ${getResponsiveClasses.textSize.base}`}>
        Últimas Transações
      </h3>
      
      <div className="space-y-3">
        {movements.map((movement, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
            <span className={`text-gray-600 ${getResponsiveClasses.textSize.sm}`}>
              {movement.type}:
            </span>
            <span className={`font-medium text-gray-900 ${getResponsiveClasses.textSize.sm}`}>
              {movement.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
