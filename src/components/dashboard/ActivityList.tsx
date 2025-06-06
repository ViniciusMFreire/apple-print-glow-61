
import { Search, CreditCard, ShoppingBag, Headphones, Bell, Calendar, Clock, DollarSign, Users, Smartphone, Info, MessageCircle, Grid3X3 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { getResponsiveClasses } from "@/utils/responsiveUtils";

export const ActivityList = () => {
  const activities = [
    {
      id: 1,
      type: "Cartão",
      icon: CreditCard,
      title: "Cartão de Débito",
      subtitle: "Final 1234",
      time: "14:30",
      amount: "-R$ 45,00",
      status: "completed"
    },
    {
      id: 2,
      type: "Compras",
      icon: ShoppingBag,
      title: "Mercado São João",
      subtitle: "Compra aprovada",
      time: "12:15",
      amount: "-R$ 127,50",
      status: "completed"
    },
    {
      id: 3,
      type: "Atendimento",
      icon: Headphones,
      title: "Suporte técnico",
      subtitle: "Chamado #12345",
      time: "10:45",
      amount: "",
      status: "pending"
    }
  ];

  return (
    <div className={`bg-white rounded-lg shadow-sm ${getResponsiveClasses.padding.md}`}>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h3 className={`font-semibold text-gray-900 ${getResponsiveClasses.textSize.lg}`}>
            Atividades Recentes
          </h3>
          <Bell className={`text-gray-400 ${getResponsiveClasses.iconSize.md}`} />
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Pesquisar evento..." 
            className="pl-10 bg-gray-50 border border-gray-200 text-sm hover:border-2 hover:border-verde-dark focus-visible:border-2 focus-visible:border-verde-dark transition-all duration-200"
          />
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-4">
          <div className="flex flex-col items-center p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors cursor-pointer">
            <Users className={`text-orange-600 mb-2 ${getResponsiveClasses.iconSize.md}`} />
            <span className={`text-orange-700 font-medium text-center ${getResponsiveClasses.textSize.xs}`}>
              Cadastro
            </span>
          </div>
          
          <div className="flex flex-col items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
            <CreditCard className={`text-blue-600 mb-2 ${getResponsiveClasses.iconSize.md}`} />
            <span className={`text-blue-700 font-medium text-center ${getResponsiveClasses.textSize.xs}`}>
              Cartão
            </span>
          </div>
          
          <div className="flex flex-col items-center p-3 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors cursor-pointer">
            <Grid3X3 className={`text-teal-600 mb-2 ${getResponsiveClasses.iconSize.md}`} />
            <span className={`text-teal-700 font-medium text-center ${getResponsiveClasses.textSize.xs}`}>
              Conta Digital
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-4">
          <div className="flex flex-col items-center p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors cursor-pointer">
            <Smartphone className={`text-indigo-600 mb-2 ${getResponsiveClasses.iconSize.md}`} />
            <span className={`text-indigo-700 font-medium text-center ${getResponsiveClasses.textSize.xs}`}>
              QQPAG
            </span>
          </div>
          
          <div className="flex flex-col items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors cursor-pointer">
            <ShoppingBag className={`text-green-600 mb-2 ${getResponsiveClasses.iconSize.md}`} />
            <span className={`text-green-700 font-medium text-center ${getResponsiveClasses.textSize.xs}`}>
              Mercantil
            </span>
          </div>
          
          <div className="flex flex-col items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">
            <Headphones className={`text-purple-600 mb-2 ${getResponsiveClasses.iconSize.md}`} />
            <span className={`text-purple-700 font-medium text-center ${getResponsiveClasses.textSize.xs}`}>
              Atendimento Canais Críticos
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {activities.map((activity) => {
            const IconComponent = activity.icon;
            return (
              <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <IconComponent className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className={`font-medium text-gray-900 truncate ${getResponsiveClasses.textSize.sm}`}>
                        {activity.title}
                      </p>
                      <Badge variant={activity.status === "completed" ? "default" : "secondary"} className="text-xs">
                        {activity.type}
                      </Badge>
                    </div>
                    <p className={`text-gray-600 truncate ${getResponsiveClasses.textSize.xs}`}>
                      {activity.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-gray-400" />
                    <span className={`text-gray-500 ${getResponsiveClasses.textSize.xs}`}>
                      {activity.time}
                    </span>
                  </div>
                  {activity.amount && (
                    <span className={`font-semibold ${activity.amount.includes('-') ? 'text-red-600' : 'text-green-600'} ${getResponsiveClasses.textSize.sm}`}>
                      {activity.amount}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
