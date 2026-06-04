import {
  CloudSunIcon,
  MoonStarsIcon,
  SunHorizonIcon
} from "@phosphor-icons/react";
import Text from "../common/text";
import { Appointment } from "@/types/appointment";
import ScheduleItem from "./schedule-item";

interface ScheduleContainerProps {
  period: "morning" | "evening" | "night";
  schedules: Appointment[];
}

interface PeriodDetails {
  icon: React.ReactNode;
  name: string;
  hour: string;
}

const PERIOD_CONFIG: Record<"morning" | "evening" | "night", PeriodDetails> = {
  morning: {
    icon: <SunHorizonIcon className="size-6 text-yellow-300" />,
    name: "Manhã",
    hour: "09h-12h"
  },
  evening: {
    icon: <CloudSunIcon className="size-6 text-yellow-300" />,
    name: "Tarde",
    hour: "12h-18h"
  },
  night: {
    icon: <MoonStarsIcon className="size-6 text-yellow-300" />,
    name: "Noite",
    hour: "18h-09h"
  }
};

export default function ScheduleContainer({
  period,
  schedules
}: ScheduleContainerProps) {
  return (
    <div className="border border-gray-600 rounded-md">
      <header className="flex items-center gap-2 px-5 py-3">
        {PERIOD_CONFIG[period].icon}

        <Text size="textMedium">{PERIOD_CONFIG[period].name}</Text>

        <Text size="textMedium" className="ml-auto">
          {PERIOD_CONFIG[period].hour}
        </Text>
      </header>

      {schedules.map(appointment => (
        <ScheduleItem key={appointment.id} appointment={appointment} />
      ))}
    </div>
  );
}
