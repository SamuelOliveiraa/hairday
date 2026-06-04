"use client";

import { CalendarBlankIcon, CalendarXIcon } from "@phosphor-icons/react";
import { Text, DatePicker, ScheduleContainer } from "../common";
import { schedulesArray } from "@/mocks/schedules-array";
import Image from "next/image";

export default function ScheduleSection() {
  const morningSchedules = schedulesArray.filter(
    (schedule) => schedule.hourAppointment < "12:00"
  );
  const eveningSchedules = schedulesArray.filter(
    (schedule) =>
      schedule.hourAppointment >= "12:00" && schedule.hourAppointment < "18:00"
  );
  const nightSchedules = schedulesArray.filter(
    (schedule) => schedule.hourAppointment >= "18:00"
  );

  // const morningSchedules = [];
  // const eveningSchedules = [];
  // const nightSchedules = [];

  const isSchedulesEmpty =
    morningSchedules.length === 0 &&
    eveningSchedules.length === 0 &&
    nightSchedules.length === 0;

  return (
    <div className="flex flex-col flex-1 gap-8 py-4 md:p-20 md:py-10">
      <div className="max-w-4xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <Text size="titleLarge" className="text-gray-100">
            Sua agenda
          </Text>

          <Text size="textMedium" className="text-gray-300">
            Consulte os seus cortes de cabelo agendados por dia
          </Text>
        </div>

        <DatePicker />
      </div>

      <div className="max-w-4xl flex flex-col gap-4">
        {isSchedulesEmpty ? (
          <div className="w-full flex flex-col gap-4 items-center mt-10">
            <Image width={140} height={140} alt="Check List" src="/notes.png" />

            <Text size="titleMedium" className="text-gray-400 font-normal">
              Nenhum agendamento localizado. Por favor, agende um horário.
            </Text>
          </div>
        ) : (
          <>
            <ScheduleContainer period="morning" schedules={morningSchedules} />
            <ScheduleContainer period="evening" schedules={eveningSchedules} />
            <ScheduleContainer period="night" schedules={nightSchedules} />
          </>
        )}
      </div>
    </div>
  );
}
