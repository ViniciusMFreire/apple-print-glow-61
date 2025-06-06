
import { Search, CreditCard, ShoppingBag, Headphones, Bell, Calendar, Clock, DollarSign, Users, Smartphone, Info, MessageCircle, Grid3X3, CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { getResponsiveClasses } from "@/utils/responsiveUtils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const ActivityList = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const eventTypes = [
    "Ligação [regua]",
    "Voll_WhatsApp SAC_Receptivo",
    "Voll_WhatsApp SAC_7449",
    "Voll_Telegram SAC",
    "Voll_Faceb",
    "Voll_Insta",
    "Pesquisa de satisfação Voll",
    "SMS [regua]",
    "Retorno SMS [regua]",
    "Voll_WhatsApp SAC_Receptivo [acaobot]",
    "Email [regua]",
    "Push APP [regua] QQ PAG",
    "Acionamento Assessorias [cob]",
    "Compra cartão de débito",
    "Saída PIX",
    "Recebimento PIX",
    "Pagamento boleto",
    "Receber boleto (Depositar)",
    "Saque agendado [num filial]",
    "Saque efetivado[num filial]",
    "Saque efetivado em caixa 24h",
    "Recarga de celular",
    "AR Hub - Email",
    "AR Hub - WhatsApp",
    "Captura externa",
    "Compra realizada",
    "Devolução mercantil",
    "Compra realizada no mercado livre QQ",
    "Produto que foi comprado",
    "Nota de pesquisa NPS mercantil",
    "Colaborador",
    "Id positiva_whatsapp",
    "Inclusão de registro órgãos de proteção ao crédito",
    "Fatura cortada",
    "Gestor de contatos_carga [regua]",
    "Gestor de contatos_efetivos [regua]",
    "Compra cartão de crédito off-us",
    "Compra cartão de crédito on-us",
    "Empréstimo pessoal - depósito em conta",
    "Empréstimo pessoal - saque em loja [filial]",
    "Empréstimo pessoal - PIX Parcelado",
    "Pagamentos Cartão QQ",
    "Adesão PF",
    "Adesão PT",
    "Adesão PA",
    "Adesão RN",
    "Alteração limite automatica",
    "Redução de limite automatica",
    "Cadastro de chave PIX",
    "Saque cancelado",
    "Portal de negociação - login",
    "Portal de negociação - simulação",
    "Tarefa VerdeCob [nome_Tarefa]",
    "Troca de medalha",
    "Inclusão de bloqueio [nome_bloqueio]",
    "Retirada de bloqueio [nome_bloqueio]"
  ];

  // Mock data generator for search results
  const generateSearchResults = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    // Filter events that match the search term
    const matchingEvents = eventTypes.filter(event => 
      event.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Generate mock results with dates (most recent first)
    const results = matchingEvents.flatMap(eventType => {
      const numResults = Math.floor(Math.random() * 3) + 1; // 1-3 results per matching event
      return Array.from({ length: numResults }, (_, index) => {
        const daysAgo = Math.floor(Math.random() * 15); // Within last 15 days
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);
        
        return {
          id: `${eventType}-${index}-${Date.now()}`,
          type: eventType,
          date: date,
          time: `${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
          description: `${eventType} realizado em ${format(date, "dd/MM/yyyy", { locale: ptBR })}`,
          details: `Detalhes do evento ${eventType} ocorrido em ${format(date, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}`
        };
      });
    });

    // Sort by date (most recent first)
    results.sort((a, b) => b.date.getTime() - a.date.getTime());

    // Filter by date range if both dates are selected
    let filteredResults = results;
    if (startDate && endDate) {
      filteredResults = results.filter(result => {
        const resultDate = result.date;
        return resultDate >= startDate && resultDate <= endDate;
      });
    }

    setSearchResults(filteredResults);
  };

  const handleSearch = () => {
    generateSearchResults(searchTerm);
  };

  const activities = [
    {
      id: 1,
      type: "Cartão",
      icon: CreditCard,
      title: "Cartão de Débito",
      subtitle: "Final 1234",
      time: "14:30",
      amount: "-R$ 45,00",
      status: "completed",
      details: {
        description: "Compra no Cartão 5091.51**.****.0430 no Valor de R$ 45,00 realizado nas Lojas Quero Quero em 29/05/2025"
      }
    },
    {
      id: 2,
      type: "Compras",
      icon: ShoppingBag,
      title: "Mercado São João",
      subtitle: "Compra aprovada",
      time: "12:15",
      amount: "-R$ 127,50",
      status: "completed",
      details: {
        description: "Compra no estabelecimento Mercado São João no valor de R$ 127,50 realizada em 29/05/2025"
      }
    },
    {
      id: 3,
      type: "Atendimento",
      icon: Headphones,
      title: "Suporte técnico",
      subtitle: "Chamado #12345",
      time: "10:45",
      amount: "",
      status: "pending",
      details: {
        description: "Atendimento de suporte técnico - Chamado #12345 aberto em 29/05/2025"
      }
    }
  ];

  return (
    <div className={`bg-white rounded-lg shadow-sm ${getResponsiveClasses.padding.md}`}>
      <div className="flex flex-col space-y-4">
        <h3 className={`font-semibold text-gray-900 ${getResponsiveClasses.textSize.lg}`}>
          Painéis Quero Quero
        </h3>

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
          
          <div className="flex flex-col items-center p-3 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors cursor-pointer">
            <MessageCircle className={`text-cyan-600 mb-2 ${getResponsiveClasses.iconSize.md}`} />
            <span className={`text-cyan-700 font-medium text-center ${getResponsiveClasses.textSize.xs}`}>
              Atendimento
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 md:gap-4">
          <div className="flex flex-col items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">
            <Headphones className={`text-purple-600 mb-2 ${getResponsiveClasses.iconSize.md}`} />
            <span className={`text-purple-700 font-medium text-center ${getResponsiveClasses.textSize.xs}`}>
              Atendimento Canais Críticos
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h3 className={`font-semibold text-gray-900 ${getResponsiveClasses.textSize.lg}`}>
            Eventos
          </h3>
          <Bell className={`text-gray-400 ${getResponsiveClasses.iconSize.md}`} />
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <label className={`text-gray-700 font-medium ${getResponsiveClasses.textSize.sm}`}>
                Data Início <span className="text-red-500">*</span>
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !startDate && "text-muted-foreground border-red-200"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "dd/MM/yy", { locale: ptBR }) : "dd/mm/aa"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className={`text-gray-700 font-medium ${getResponsiveClasses.textSize.sm}`}>
                Data Fim <span className="text-red-500">*</span>
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !endDate && "text-muted-foreground border-red-200"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "dd/MM/yy", { locale: ptBR }) : "dd/mm/aa"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            Limite máximo entre datas informadas não pode ser superior a 30 dias.
          </p>

          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Pesquisar evento..." 
                className="pl-10 bg-gray-50 border border-gray-200 text-sm hover:border-2 hover:border-verde-dark focus-visible:border-2 focus-visible:border-verde-dark transition-all duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button 
              variant="outline" 
              className="px-6 text-sm hover:bg-verde-dark hover:text-white transition-colors"
              onClick={handleSearch}
            >
              Pesquisar
            </Button>
          </div>

          {searchResults.length > 0 && (
            <div className="space-y-2">
              <h4 className={`font-medium text-gray-900 ${getResponsiveClasses.textSize.sm}`}>
                Resultados da Pesquisa ({searchResults.length})
              </h4>
              <ScrollArea className="h-64 w-full border rounded-md p-3">
                <div className="space-y-2">
                  {searchResults.map((result) => (
                    <Popover key={result.id}>
                      <PopoverTrigger asChild>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                              <Info className="h-4 w-4 text-gray-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={`font-medium text-gray-900 truncate ${getResponsiveClasses.textSize.sm}`}>
                                {result.type}
                              </p>
                              <p className={`text-gray-600 truncate ${getResponsiveClasses.textSize.xs}`}>
                                {format(result.date, "dd/MM/yyyy", { locale: ptBR })}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3 text-gray-400" />
                            <span className={`text-gray-500 ${getResponsiveClasses.textSize.xs}`}>
                              {result.time}
                            </span>
                          </div>
                        </div>
                      </PopoverTrigger>
                      <PopoverContent className="w-80 p-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-verde-dark text-lg">
                            {result.type}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {result.details}
                          </p>
                        </div>
                      </PopoverContent>
                    </Popover>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}
        </div>

        <h3 className={`font-semibold text-gray-900 ${getResponsiveClasses.textSize.lg}`}>
          Últimos Eventos
        </h3>

        <p className="text-sm text-gray-600">
          Eventos dos últimos 15 dias
        </p>

        <div className="space-y-3">
          {activities.map((activity) => {
            const IconComponent = activity.icon;
            return (
              <Popover key={activity.id}>
                <PopoverTrigger asChild>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
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
                </PopoverTrigger>
                <PopoverContent className="w-80 p-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-verde-dark text-lg">
                      {activity.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {activity.details.description}
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            );
          })}
        </div>
      </div>
    </div>
  );
};
