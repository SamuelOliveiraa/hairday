"use client";

import * as React from "react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { CalendarBlankIcon, CaretDownIcon } from "@phosphor-icons/react";
import Text from "./text";
import { ptBR } from "date-fns/locale";

export default function DatePicker() {
  const [date, setDate] = React.useState<Date>(new Date());

  const startMonthOffset: Date = new Date();
  const endMonthOffset: Date = new Date(
    startMonthOffset.getFullYear(),
    startMonthOffset.getMonth() + 2,
    startMonthOffset.getDate()
  );

  return (
    <Field className="w-auto cursor-pointer">
      <Popover>
        <PopoverTrigger
          className="bg-transparent flex items-center justify-between cursor-pointer border border-gray-500 rounded-md px-3 py-2 focus-within:border-yellow-300 focus-within:ring-1 focus-within:ring-yellow-300"
          asChild
        >
          <div>
            <div className="flex items-center">
              <CalendarBlankIcon className="size-5 text-yellow-300 opacity-100" />

              <Button
                id="date-picker"
                className="justify-start font-normal bg-transparent hover:bg-transparent outline-none border-none border-transparent ring-0"
              >
                <Text
                  size="titleMedium"
                  className="font-normal outline-none cursor-pointer"
                >
                  {date
                    ? format(date, "dd/MM/yyyy", { locale: ptBR })
                    : "Escolha uma data"}
                </Text>
              </Button>
            </div>

            <CaretDownIcon className="size-5 text-gray-300" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 cursor-pointer" align="end">
          <Calendar
            required
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={[
              { before: startMonthOffset, after: endMonthOffset },
              startMonthOffset =>
                startMonthOffset.getDay() === 0 ||
                startMonthOffset.getDay() === 6 // Bloqueia sabados e domingos
            ]}
            startMonth={startMonthOffset}
            endMonth={endMonthOffset}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
