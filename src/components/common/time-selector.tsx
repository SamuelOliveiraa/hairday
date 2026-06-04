import { Text, Badge } from "@/components/common";

interface TimeSelectorProps {
  timeSlots: TimeSlot[];
  period: DayPeriod;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

type DayPeriod = "morning" | "evening" | "night";

const PERIOD_LABELS: Record<DayPeriod, string> = {
  morning: "Manhã",
  evening: "Tarde",
  night: "Noite"
};

export default function TimeSelector({
  timeSlots,
  period,
  selectedTime,
  setSelectedTime
}: TimeSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <Text size="titleMedium" className="text-gray-300">
        {PERIOD_LABELS[period]}
      </Text>

      <div className="flex items-center gap-3 flex-wrap">
        {timeSlots.map(({ time, available }) => (
          <Badge
            key={`time-${time}`}
            onClick={() => available && setSelectedTime(time)}
            disabled={!available}
            selected={selectedTime === time}
          >
            {time}
          </Badge>
        ))}
      </div>
    </div>
  );
}
