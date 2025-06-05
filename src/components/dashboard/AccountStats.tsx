
import { getResponsiveClasses, getGridClasses } from "@/utils/responsiveUtils";

export const AccountStats = () => {
  const stats = [
    { title: "Bloqueio", value: "0", color: "red" },
    { title: "Atraso", value: "0", color: "orange" },
    { title: "Cartão Ativo", value: "2", color: "green" }
  ];

  return (
    <div className={getGridClasses.cards}>
      {stats.map((stat, index) => (
        <div key={index} className={`bg-white rounded-lg shadow-sm text-center ${getResponsiveClasses.padding.sm}`}>
          <div className={`w-8 h-8 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-2`}>
            <div className={`w-4 h-4 bg-${stat.color}-500 ${stat.color === 'orange' ? 'rounded' : 'rounded-full'}`}></div>
          </div>
          <h3 className={`font-medium text-gray-900 ${getResponsiveClasses.textSize.sm}`}>
            {stat.title}
          </h3>
          <p className={`font-bold text-gray-900 ${getResponsiveClasses.textSize.xl}`}>
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
};
