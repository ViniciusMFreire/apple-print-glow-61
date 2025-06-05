
export const LimitsSection = () => {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Limites</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        <div className="text-center">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 relative">
            <svg className="w-24 h-24 md:w-32 md:h-32 transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="#e5e7eb"
                strokeWidth="6"
                fill="none"
                className="md:hidden"
              />
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="#10b981"
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * 0.7}`}
                className="transition-all duration-300 md:hidden"
              />
              <circle
                cx="64"
                cy="64"
                r="60"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
                className="hidden md:block"
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
                className="transition-all duration-300 hidden md:block"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-sm md:text-lg font-bold text-gray-900">GLOBAL</span>
            </div>
          </div>
          <div className="space-y-1 text-xs md:text-sm">
            <p className="text-gray-600">Tomado: R$ 1.445,00</p>
            <p className="text-gray-600">Disponível: R$ 6.645,25</p>
          </div>
        </div>
        
        <div className="text-center">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 relative">
            <svg className="w-24 h-24 md:w-32 md:h-32 transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="#e5e7eb"
                strokeWidth="6"
                fill="none"
                className="md:hidden"
              />
              <circle
                cx="64"
                cy="64"
                r="60"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
                className="hidden md:block"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-sm md:text-lg font-bold text-gray-900">EP</span>
            </div>
          </div>
          <div className="space-y-1 text-xs md:text-sm">
            <p className="text-gray-600">Tomado: R$ 6.645,61</p>
            <p className="text-gray-600">Disponível: R$ 0,00</p>
          </div>
        </div>
      </div>
    </div>
  );
};
