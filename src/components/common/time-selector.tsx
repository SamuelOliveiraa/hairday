import { Text, Badge } from "@/components/common";

interface TimeSelectorProps {
  array: { time: string; available: boolean }[];
  timeZone: "morning" | "evening" | "night";
  selectedTime: string;
  setSelectedTime: (time: string) => void;
}

export default function TimeSelector({
  array,
  timeZone,
  selectedTime,
  setSelectedTime
}: TimeSelectorProps) {
  const time = {
    morning: "Manhã",
    evening: "Tarde",
    night: "Noite"
  };
  return (
    <div className="flex flex-col gap-2">
      <Text size="titleMedium" className="text-gray-300">
        {time[timeZone]}
      </Text>

      <div className="flex items-center gap-3 flex-wrap">
        {array.map(item => (
          <Badge
            key={`item-${item.time}`}
            onClick={() => item.available && setSelectedTime(item.time)}
            disabled={!item.available}
            selected={selectedTime === item.time}
          >
            {item.time}
          </Badge>
        ))}
      </div>
    </div>
  );
}
