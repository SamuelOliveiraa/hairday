import { AppointmentForm, Header, ScheduleSection } from "@/components/layout";

export default function Home() {
  return (
    <div className="h-full relative flex flex-col items-stretch p-5 lg:flex-row ">
      <Header />
      <AppointmentForm />
      <ScheduleSection />
    </div>
  );
}
