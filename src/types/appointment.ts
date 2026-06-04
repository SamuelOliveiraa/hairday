export interface Appointment {
  id: string;
  customer: {
    id: string;
    name: string;
  };
  dateAppointment: string;
  hourAppointment: string;
}
