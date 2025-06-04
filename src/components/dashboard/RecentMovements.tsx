
export const RecentMovements = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Últimas movimentações</h3>
      
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Compra em loja:</span>
          <span className="font-medium">31/12/2022</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Pagamento de fatura:</span>
          <span className="font-medium">31/12/2022</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Transferência:</span>
          <span className="font-medium">31/12/2022</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Saque:</span>
          <span className="font-medium">31/12/2022</span>
        </div>
      </div>
    </div>
  );
};
