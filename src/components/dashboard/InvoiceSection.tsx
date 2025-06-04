
export const InvoiceSection = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Fatura</h3>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
          </div>
          <p className="text-sm text-gray-600">Vencimento</p>
          <p className="font-semibold text-gray-900">31/12/2022</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
          </div>
          <p className="text-sm text-gray-600">Corte</p>
          <p className="font-semibold text-gray-900">31/12/2022</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
            <span className="text-green-600 font-bold">$</span>
          </div>
          <p className="text-sm text-gray-600">Valor</p>
          <p className="font-semibold text-gray-900">R$ 1.000,00</p>
        </div>
      </div>
    </div>
  );
};
