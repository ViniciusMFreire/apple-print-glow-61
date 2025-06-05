
export const RecentMovements = () => {
  const movements = [
    { type: "Atualização cadastro", date: "09/01/2024" },
    { type: "Compra On-us", date: "25/09/2024" },
    { type: "Última compra Off-us", date: "02/01/2024" },
    { type: "Cliente desde", date: "25/09/2024" }
  ];

  return (
    <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Últimas transações</h3>
      
      <div className="space-y-3">
        {movements.map((movement, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
            <span className="text-gray-600 text-sm md:text-base">{movement.type}:</span>
            <span className="font-medium text-gray-900 text-sm md:text-base">{movement.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
