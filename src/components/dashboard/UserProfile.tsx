
import { ResponsiveContainer } from "@/components/ui/responsive-container";
import { ResponsiveGrid } from "@/components/ui/responsive-grid";
import { ResponsiveText } from "@/components/ui/responsive-text";
import { Client } from "@/domain/entities/Client";

interface UserProfileProps {
  clientData?: Client;
}

export const UserProfile = ({ clientData }: UserProfileProps) => {
  const hasDigitalAccount = clientData?.hasDigitalAccount ?? true;

  return (
    <div className="bg-card rounded-lg shadow-sm border w-full">
      <ResponsiveContainer variant="card">
        <div className="flex flex-col space-y-4 w-full">
          {/* Header com avatar e informações principais */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
              {clientData?.name ? clientData.name.charAt(0) : 'V'}
            </div>
            <div className="flex-1 min-w-0 w-full">
              <ResponsiveText size="lg" weight="semibold" className="truncate mb-1">
                {clientData?.name || 'VINICIUS MARTINS FREIRE'}
              </ResponsiveText>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <ResponsiveText size="sm" color="muted">
                  CPF: {clientData?.cpf || '086.358.74960'}
                </ResponsiveText>
                <ResponsiveText size="sm" color="muted">
                  Conta: {clientData?.account || '13729431'}
                </ResponsiveText>
              </div>
            </div>
          </div>
          
          {/* Grid de informações adicionais */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full">
            <div className="flex flex-col space-y-1 min-w-0">
              <ResponsiveText size="xs" color="muted" className="truncate">Aniversário</ResponsiveText>
              <ResponsiveText size="xs" weight="bold" color="success" className="truncate">
                {clientData?.birthDate || '08/01/1995'}
              </ResponsiveText>
            </div>
            <div className="flex flex-col space-y-1 min-w-0">
              <ResponsiveText size="xs" color="muted" className="truncate">Tipo Cliente</ResponsiveText>
              <ResponsiveText size="xs" weight="bold" color="warning" className="truncate">
                {clientData?.clientType || 'Cliente'}
              </ResponsiveText>
            </div>
            <div className="flex flex-col space-y-1 min-w-0">
              <ResponsiveText size="xs" color="muted" className="truncate">Categoria</ResponsiveText>
              <ResponsiveText size="xs" weight="medium" className="truncate">
                {clientData?.category || 'Pessoa Física'}
              </ResponsiveText>
            </div>
            <div className="flex flex-col space-y-1 min-w-0">
              <ResponsiveText size="xs" color="muted" className="truncate">Conta Digital</ResponsiveText>
              {hasDigitalAccount ? (
                <ResponsiveText size="xs" weight="bold" color="success" className="truncate">Possui</ResponsiveText>
              ) : (
                <ResponsiveText size="xs" weight="bold" color="error" className="truncate">Não possui</ResponsiveText>
              )}
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
};
