
export const UserProfile = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-2xl">
          1
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">ADRIANO FAGUNDES AVANCINI</h2>
          <p className="text-gray-600">123.456.789-00</p>
          <div className="flex gap-4 mt-2 text-sm">
            <span className="text-black">Aniversário <span className="text-green-600 font-bold">Hoje</span></span>
            <span className="text-black">Cliente <span className="text-orange-500 font-bold">Colaborador</span></span>
            <span className="text-black">Pessoa Física</span>
            <span className="text-black">Pessoa Física</span>
          </div>
        </div>
      </div>
    </div>
  );
};
