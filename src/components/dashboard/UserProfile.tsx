
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
    <div className="bg-card rounded-lg shadow-sm w-full">
      <ResponsiveContainer variant="card">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
            {clientData?.name ? clientData.name.charAt(0) : 'A'}
          </div>
          <div className="flex-1 min-w-0 w-full">
            <ResponsiveText size="lg" weight="semibold" className="truncate mb-1">
              {clientData?.name || 'ADRIANO FAGUNDES AVANCINI'}
            </ResponsiveText>
            <ResponsiveText size="sm" color="muted" className="mb-3">
              CPF: {clientData?.cpf || '953.267.400-44'} | Conta: {clientData?.account || '123456'}
            </ResponsiveText>
            <ResponsiveGrid variant="auto" gap="sm" className="text-xs md:text-sm">
              <div className="flex flex-col">
                <ResponsiveText size="xs" color="muted">Aniversário</ResponsiveText>
                <ResponsiveText size="xs" weight="bold" color="success">
                  {clientData?.birthDate || 'Hoje'}
                </ResponsiveText>
              </div>
              <div className="flex flex-col">
                <ResponsiveText size="xs" color="muted">Tipo Cliente</ResponsiveText>
                <ResponsiveText size="xs" weight="bold" color="warning">
                  {clientData?.clientType || 'Colaborador'}
                </ResponsiveText>
              </div>
              <div className="flex flex-col">
                <ResponsiveText size="xs" color="muted">Categoria</ResponsiveText>
                <ResponsiveText size="xs" weight="medium">
                  {clientData?.category || 'Pessoa Física'}
                </ResponsiveText>
              </div>
              <div className="flex flex-col">
                <ResponsiveText size="xs" color="muted">Conta Digital</ResponsiveText>
                {hasDigitalAccount ? (
                  <ResponsiveText size="xs" weight="bold" color="success">Possui</ResponsiveText>
                ) : (
                  <ResponsiveText size="xs" weight="bold" color="error">Não possui</ResponsiveText>
                )}
              </div>
            </ResponsiveGrid>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
};
