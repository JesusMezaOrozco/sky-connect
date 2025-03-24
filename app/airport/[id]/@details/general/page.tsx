"use client";
import { useParams } from "next/navigation";
import { useAirport } from "@/hooks/useAirport";
import AirportInfoCard from "@/components/AirportInfoCard";

export default function Details() {
  const { id } = useParams();
  const airport = useAirport(String(id));
  return (
    <AirportInfoCard
      title="General Information"
      iconTitle="/icons/info.svg"
      data={{
        "Airport Name": airport.airport_name,
        ["IATA Code"]: airport.iata_code,
        ["ICAO Code"]: airport.icao_code,
        Country: airport.country_name || "-",
        ["IATA City"]: airport.city_iata_code,
        Telephone: airport.phone_number || "-",
      }}
    />
  );
}
