import { useEffect, useState } from "react";
import { useStore } from "@/providers/Store";
import { Airport } from "@/types";

export function useAirport(id: string) {
  const airportsById = useStore((store) => store.indexedAirports);
  const [airport, setAirport] = useState<Airport>(() => {
    if (typeof window !== "undefined") {
      const cachedAirport = localStorage.getItem(`airport_${id}`);
      return cachedAirport ? JSON.parse(cachedAirport) : null;
    }
    return null;
  });

  useEffect(() => {
    if (airportsById && id) {
      const airportData = airportsById[Number(id)];
      if (airportData) {
        setAirport(airportData);
        localStorage.setItem(`airport_${id}`, JSON.stringify(airportData));
      }
    }
  }, [id, airportsById]);

  return airport;
}
