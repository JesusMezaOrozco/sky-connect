import { useCallback, useEffect, useState } from "react";
import { useStore } from "@/providers/Store";
import { Airport } from "@/types";
import { SearchedAirports } from "@/store/airports";
import axios from "axios";
export const LIMIT_PAGE_SIZE = 6;

export function useAirportDetail(id: string) {
  const { indexedAirports: airportsById } = useStore((store) => store);
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

export function useAirportList(offset: string) {
  const [airports, setAirports] = useState<Airport[]>([]);
  const [filter, setFilter] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const {
    addAirports,
    searchedAirports,
    indexedAirports,
    setLoading,
    setMessage,
  } = useStore((state) => state);
  const getAirports = useCallback(async () => {
    if (searchedAirports.hasOwnProperty(offset)) {
      const airportsByOffset = searchedAirports as SearchedAirports;
      setAirports(airportsByOffset[parseInt(offset)]);
      return;
    }
    try {
      setLoading(true);
      const { data } = await axios.get("/api/airports", {
        params: {
          limit: LIMIT_PAGE_SIZE,
          offset,
        },
      });
      // const data = { data: test, pagination: { total: test.length } };
      setTotalItems(data.pagination.total);
      addAirports({
        [offset]: data.data,
      });
      setMessage({
        type: "success",
        text: "Airports loaded successfully",
      });
    } catch (error) {
      console.log(error);
      setMessage({
        type: "error",
        text: "Error loading airports",
      });
    } finally {
      setLoading(false);
    }
  }, [offset, searchedAirports, addAirports, setLoading, setMessage]);

  const handleSearch = (value: string) => {
    const airports = Object.values(indexedAirports);
    setFilter(value);
    if (value === "") {
      setAirports(airports.slice(0, LIMIT_PAGE_SIZE));
      return;
    } else {
      const airportsFiltered = airports.filter(
        (airport) =>
          airport.airport_name.toLowerCase().includes(value.toLowerCase()) ||
          airport.iata_code.toLowerCase().includes(value.toLowerCase()),
      );
      setAirports(airportsFiltered);
    }
  };

  useEffect(() => {
    if (filter === "") {
      getAirports();
    }
  }, [offset, getAirports, filter]);

  return { airports, handleSearch, totalItems, filter };
}
