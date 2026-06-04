import { TrashIcon } from "@phosphor-icons/react";
import Text from "./text";
import { Appointment } from "@/types/appointment";

interface ScheduleItemProps {
  appointment: Appointment;
}

export default function ScheduleItem({ appointment }: ScheduleItemProps) {
  return (
    <div className="flex items-center gap-4 px-5 py-3 border-t border-gray-600">
      <Text size="titleMedium">{appointment.hourAppointment}</Text>

      <Text size="textMedium">{appointment.customer.name}</Text>

      <button className="ml-auto">
        <TrashIcon className="text-yellow-500 size-5" />
      </button>
    </div>
  );
}
