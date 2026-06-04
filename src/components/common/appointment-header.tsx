import { Text } from ".";

export default function AppointmentHeader() {
  return (
    <div className="flex flex-col gap-2">
      <Text size="titleLarge" className="text-gray-100">
        Agende um atendimento
      </Text>

      <Text size="textMedium">
        Selecione data, horário e informe o nome do cliente para criar o
        agendamento
      </Text>
    </div>
  );
}
