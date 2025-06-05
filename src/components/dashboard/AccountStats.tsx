
export const AccountStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
      <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm text-center">
        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
        </div>
        <h3 className="font-medium text-gray-900 text-sm md:text-base">Bloqueio</h3>
        <p className="text-xl md:text-2xl font-bold text-gray-900">0</p>
      </div>
      
      <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm text-center">
        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
          <div className="w-4 h-4 bg-orange-500 rounded"></div>
        </div>
        <h3 className="font-medium text-gray-900 text-sm md:text-base">Atraso</h3>
        <p className="text-xl md:text-2xl font-bold text-gray-900">0</p>
      </div>
      
      <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm text-center">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
        </div>
        <h3 className="font-medium text-gray-900 text-sm md:text-base">Cartão Ativo</h3>
        <p className="text-xl md:text-2xl font-bold text-gray-900">2</p>
      </div>
    </div>
  );
};
