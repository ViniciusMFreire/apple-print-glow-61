
export const AccountStats = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white rounded-lg p-4 shadow-sm text-center">
        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
        </div>
        <h3 className="font-medium text-gray-900">Bloqueio</h3>
        <p className="text-2xl font-bold text-gray-900">1</p>
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-sm text-center">
        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
          <div className="w-4 h-4 bg-orange-500 rounded"></div>
        </div>
        <h3 className="font-medium text-gray-900">Atraso</h3>
        <p className="text-2xl font-bold text-gray-900">2</p>
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-sm text-center">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
        </div>
        <h3 className="font-medium text-gray-900">Cartão Ativo</h3>
        <p className="text-2xl font-bold text-gray-900">1</p>
      </div>
    </div>
  );
};
