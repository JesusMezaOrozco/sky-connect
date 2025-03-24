"use client";
import AirportInfoCard from "@/components/AirportInfoCard";
import { useAirportDetail } from "@/hooks/useAirport";
import { useParams } from "next/navigation";

export default function TimePage() {
  const { id } = useParams();
  const airport = useAirportDetail(String(id));
  return (
    <div className="flex flex-col gap-10">
      <AirportInfoCard
        title="Time Zone"
        iconTitle="/icons/world_wide.svg"
        data={{
          "Time Zone": airport.timezone,
          GMT: airport.gmt,
        }}
      />
      <AirportInfoCard
        title="Local Time"
        iconTitle="/icons/world_wide.svg"
        subTitle={new Date().toLocaleString("en-CO", {
          timeZone: airport.timezone,
          year: "2-digit",
          month: "2-digit",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        })}
      />
    </div>
  );
}
