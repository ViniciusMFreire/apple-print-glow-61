
import { getResponsiveClasses } from "@/utils/responsiveUtils";

const CircularProgress = ({ label, percentage = 30 }: { label: string; percentage?: number }) => {
  const radius = 40; // mobile
  const radiusDesktop = 60; // desktop
  const circumference = 2 * Math.PI * radius;
  const circumferenceDesktop = 2 * Math.PI * radiusDesktop;
  
  return (
    <div className="text-center">
      <div className={`mx-auto mb-4 relative ${getResponsiveClasses.circle.md}`}>
        <svg className="w-24 h-24 md:w-32 md:h-32 transform -rotate-90">
          {/* Mobile circles */}
          <circle
            cx="48" cy="48" r={radius}
            stroke="#e5e7eb" strokeWidth="6" fill="none"
            className="md:hidden"
          />
          <circle
            cx="48" cy="48" r={radius}
            stroke="#10b981" strokeWidth="6" fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - percentage / 100)}
            className="transition-all duration-300 md:hidden"
          />
          
          {/* Desktop circles */}
          <circle
            cx="64" cy="64" r={radiusDesktop}
            stroke="#e5e7eb" strokeWidth="8" fill="none"
            className="hidden md:block"
          />
          <circle
            cx="64" cy="64" r={radiusDesktop}
            stroke="#10b981" strokeWidth="8" fill="none"
            strokeDasharray={circumferenceDesktop}
            strokeDashoffset={circumferenceDesktop * (1 - percentage / 100)}
            className="transition-all duration-300 hidden md:block"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`font-bold text-gray-900 ${getResponsiveClasses.textSize.sm}`}>
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

export const LimitsSection = () => {
  const limitsData = [
    { 
      label: "GLOBAL", 
      percentage: 30,
      taken: "R$ 1.445,00",
      available: "R$ 6.645,25"
    },
    { 
      label: "EP", 
      percentage: 0,
      taken: "R$ 6.645,61",
      available: "R$ 0,00"
    }
  ];

  return (
    <div className={`bg-white rounded-lg shadow-sm ${getResponsiveClasses.padding.md}`}>
      <h3 className={`font-semibold text-gray-900 mb-4 ${getResponsiveClasses.textSize.base}`}>
        Limites
      </h3>
      
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${getResponsiveClasses.gap.lg}`}>
        {limitsData.map((limit, index) => (
          <div key={index}>
            <CircularProgress label={limit.label} percentage={limit.percentage} />
            <div className={`space-y-1 ${getResponsiveClasses.textSize.xs}`}>
              <p className="text-gray-600">Tomado: {limit.taken}</p>
              <p className="text-gray-600">Disponível: {limit.available}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
