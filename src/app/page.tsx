import { AppointmentForm, Header, ScheduleList } from "@/components/layout";

export default function Home() {
  return (
    <div className="h-full relative flex flex-col items-stretch gap-10 p-5 lg:flex-row ">
      <Header />
      <AppointmentForm />
      <ScheduleList />
    </div>
  );
}
