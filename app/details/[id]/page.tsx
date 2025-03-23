"use client";

import { useStore } from "@/providers/Store";
import { IndexedAirports } from "@/store/airports";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Airport } from "@/types";

export default function Details() {
  const indexedAirports = useStore((state) => state.indexedAirports);
  const { id } = useParams();
  const [airport, setAirport] = useState<Airport | null>(null);

  useEffect(() => {
    if (id && indexedAirports) {
      const airportsById = indexedAirports as IndexedAirports;
      const airportData = airportsById[Number(id as string)];
      setAirport(airportData || null);
    }
  }, [id, indexedAirports]);

  if (!airport) {
    return <div>No se encontro aeropuerto</div>;
  }

  return (
    <div>
      <h1>{airport.airport_name}</h1>
      <p>IATA Code: {airport.iata_code}</p>
      <p>ICAO Code: {airport.icao_code}</p>
      <p>Country: {airport.country_name}</p>
      <p>City IATA Code: {airport.city_iata_code}</p>
      <p>Latitude: {airport.latitude}</p>
      <p>Longitude: {airport.longitude}</p>
      <p>Timezone: {airport.timezone}</p>
      <p>Phone Number: {airport.phone_number}</p>
    </div>
  );
}
