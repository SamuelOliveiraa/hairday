"use client";

import { useState } from "react";
import {
  ButtonComponent,
  Text,
  DatePicker,
  TimeSelector,
  AppointmentHeader
} from "../common";
import { UserRectangleIcon } from "@phosphor-icons/react";
import { AFTERNOON, EVENING, MORNING } from "@/mocks/time-slots";

export default function AppointmentForm() {
  const [selectedTime, setSelectedTime] = useState("09:00");

  return (
    <div className="max-w-125 max-h-225 flex-1 bg-gray-700 rounded-lg flex flex-col gap-4 px-4 md:px-20 py-16 mx-auto">
      <AppointmentHeader />

      <form
        id="appointment-form"
        className="flex-1 flex flex-col gap-5"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <label htmlFor="date-picker">
          <Text size="titleMedium">Data</Text>
        </label>

        <DatePicker />

        <TimeSelector
          timeSlots={MORNING}
          period="morning"
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />

        <TimeSelector
          timeSlots={AFTERNOON}
          period="evening"
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
        <TimeSelector
          timeSlots={EVENING}
          period="night"
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
              type="text"
              placeholder="Nome do cliente"
              className="w-full py-3 bg-transparent outline-none"
            />
          </label>
        </div>
      </form>

      <ButtonComponent form="appointment-form" type="submit" className="mt-10">
        Agendar
      </ButtonComponent>
    </div>
  );
}
