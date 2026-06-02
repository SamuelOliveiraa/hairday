"use client";

import { useState } from "react";
import { AFTERNOON, EVENING, MORNING } from "../mocks/time";
import { Button, Text, Badge } from "../ui";
import TimeSelector from "../ui/time-selector";

export default function AppointmentForm() {
  const [selectedTime, setSelectedTime] = useState("09:00");

  return (
    <div className="max-w-125 flex-1 bg-gray-700 rounded-lg flex flex-col gap-4 px-4 md:px-20 py-16 mx-auto">
      <div className="flex flex-col gap-2">
        <Text size="titleLarge" className="text-gray-100">
          Agende um atendimento
        </Text>

        <Text size="textMedium">
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </Text>
      </div>

      <form className="flex-1 flex flex-col gap-3">
        <Text size="titleMedium">Horarios</Text>

        <DatePicker/>

        <TimeSelector
          timeZone="morning"
          array={MORNING}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
        <TimeSelector
          timeZone="evening"
          array={AFTERNOON}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
        <TimeSelector
          timeZone="night"
          array={EVENING}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />

        <Button type="submit">Agendar</Button>
      </form>
    </div>
  );
}
