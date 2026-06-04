"use client";

import { useState } from "react";
import { AFTERNOON, EVENING, MORNING } from "../mocks/time";
import { ButtonComponent, Text, DatePicker, TimeSelector } from "../common";
import { UserRectangleIcon } from "@phosphor-icons/react";

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

      <form className="flex-1 flex flex-col gap-5">
        <DatePicker />

        <TimeSelector
          array={MORNING}
          timeZone="morning"
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
        <TimeSelector
          array={AFTERNOON}
          timeZone="evening"
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
        <TimeSelector
          array={EVENING}
          timeZone="night"
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />

        <div className="flex flex-col gap-2">
          <Text as="label" size="titleMedium">
            Cliente
          </Text>

          <label
            className="flex items-center gap-2 px-3 border rounded-md cursor-text focus-within:border-yellow-300 focus-within:ring-1 focus-within:ring-yellow-300 transition-all duration-300"
            id="customer"
          >
            <span className="sr-only">Nome do cliente</span>
            <UserRectangleIcon
              className="size-6 text-yellow-300"
              aria-hidden="true"
            />
            <input
              required
              type="text"
              placeholder="Nome do cliente"
              className="w-full py-3 bg-transparent outline-none"
            />
          </label>
        </div>
      </form>

      <ButtonComponent type="submit">Agendar</ButtonComponent>
    </div>
  );
}
