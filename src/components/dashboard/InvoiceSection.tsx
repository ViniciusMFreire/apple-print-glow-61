
import { Calendar, Scissors, DollarSign } from "lucide-react";

export const InvoiceSection = () => {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Fatura Resumida</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        <div className="text-center">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
            <Calendar className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </div>
          <p className="text-xs md:text-sm text-gray-600">Vencimento</p>
          <p className="font-semibold text-gray-900 text-sm md:text-base">01/06/2024</p>
        </div>
        
        <div className="text-center">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
            <Scissors className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </div>
          <p className="text-xs md:text-sm text-gray-600">Corte</p>
          <p className="font-semibold text-gray-900 text-sm md:text-base">20/05/2024</p>
        </div>
        
        <div className="text-center">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
            <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
          </div>
          <p className="text-xs md:text-sm text-gray-600">Valor</p>
          <p className="font-semibold text-gray-900 text-sm md:text-base">R$ 3.630,30</p>
        </div>
      </div>
    </div>
  );
};
