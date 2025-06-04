
export const LimitsSection = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Limites</h3>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-4 relative">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="60"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="64"
                cy="64"
                r="60"
                stroke="#10b981"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 60}`}
                strokeDashoffset={`${2 * Math.PI * 60 * 0.7}`}
                className="transition-all duration-300"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-bold text-gray-900">GLOBAL</span>
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <p className="text-gray-600">Tomado: R$ 650,00</p>
            <p className="text-gray-600">Disponível: R$ 3.350,00</p>
          </div>
        </div>
        
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-4 relative">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="60"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-bold text-gray-900">EP</span>
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <p className="text-gray-600">Tomado: R$ 0,00</p>
            <p className="text-gray-600">Disponível: R$ 8.000,00</p>
          </div>
        </div>
      </div>
    </div>
  );
};
