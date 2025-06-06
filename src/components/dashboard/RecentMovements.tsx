
import { getResponsiveClasses } from "@/utils/responsiveUtils";

export const RecentMovements = () => {
  const movements = [
    { type: "Atualização cadastral", date: "09/01/2024" },
    { type: "Compra em loja", date: "25/09/2024" },
    { type: "Compra e-commerce", date: "02/01/2024" },
    { type: "Pagamento de fatura", date: "15/12/2024" },
    { type: "Transação conta digital", date: "28/11/2024" },
    { type: "Total de compras LQQ nos últimos 2 anos", date: "156" },
    { type: "Movimentações suspeitas (se sim)", date: "Não" },
    { type: "Cliente prestador de serviços (se sim)", date: "Sim" }
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
