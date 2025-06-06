
import { ShoppingCart, CreditCard, DollarSign, MessageSquare, Phone, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const ActivityList = () => {
  const activities = [
    {
      icon: CreditCard,
      title: "Cartão",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: ShoppingCart,
      title: "Compras",
      color: "text-blue-600", 
      bg: "bg-blue-50"
    },
    {
      icon: CreditCard,
      title: "Atendimento",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: ShoppingCart,
      title: "Compra On Us",
      subtitle: "Compra de R$ 150,00 nas Lojas OQ 265",
      date: "31/12/2022",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: CreditCard,
      title: "Compra Off Us", 
      subtitle: "Compra de R$ 85,50 nas Lojas ABC 123",
      date: "31/12/2022",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: DollarSign,
      title: "Pagamento Fatura",
      subtitle: "Pagamento de fatura",
      date: "31/12/2022",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: MessageSquare,
      title: "Atendimento WhatsApp",
      subtitle: "Atendimento WhatsApp",
      date: "31/12/2022",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: Phone,
      title: "Atendimento Telefônico",
      subtitle: "Atendimento telefônico", 
      date: "31/12/2022",
      color: "text-blue-600",
      bg: "bg-blue-50"
    }
  ];

  return (
    <div className="space-y-4">
      {/* Campo de busca para eventos */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input 
          placeholder="pesquisar evento..." 
          className="pl-10 bg-white border border-gray-200 text-sm"
        />
      </div>

      {/* Ações Rápidas */}
      <div className="grid grid-cols-3 gap-3">
        {activities.slice(0, 3).map((activity, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-sm text-center">
            <div className={`w-8 h-8 ${activity.bg} rounded-lg flex items-center justify-center mx-auto mb-2`}>
              <activity.icon className={`h-4 w-4 ${activity.color}`} />
            </div>
            <p className="text-sm font-medium text-gray-900">{activity.title}</p>
          </div>
        ))}
      </div>

      {/* Lista de Atividades */}
      <div className="bg-white rounded-lg shadow-sm">
        {activities.slice(3).map((activity, index) => (
          <div key={index} className="flex items-center gap-4 p-4 border-b last:border-b-0">
            <div className={`w-10 h-10 ${activity.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <activity.icon className={`h-5 w-5 ${activity.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900">{activity.title}</h4>
              {activity.subtitle && (
                <p className="text-sm text-gray-600 truncate">{activity.subtitle}</p>
              )}
            </div>
            {activity.date && (
              <span className="text-sm text-gray-500 flex-shrink-0">{activity.date}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
