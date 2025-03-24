"use client";
// import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useStore } from "@/providers/Store";
import { useCallback, useEffect, useState } from "react";
import { Airport } from "@/types";
import { SearchedAirports } from "@/store/airports";
import Link from "next/link";
import Searcher from "@/components/shared/searcher/Searcher";
import Paginator from "@/components/shared/paginator/Paginator";
import AirportCard from "@/components/AirportCard";

const LIMIT_PAGE_SIZE = 6;

const test: Airport[] = [
  {
    id: "3168599",
    gmt: "-10",
    airport_id: "1",
    iata_code: "AAA",
    city_iata_code: "AAA",
    icao_code: "NTGA",
    country_iso2: "PF",
    geoname_id: "6947726",
    latitude: "-17.05",
    longitude: "-145.41667",
    airport_name: "Anaa",
    country_name: null,
    phone_number: "NA",
    timezone: "Pacific/Tahiti",
  },
  {
    id: "3168600",
    gmt: "10",
    airport_id: "2",
    iata_code: "AAB",
    city_iata_code: "AAB",
    icao_code: "YARY",
    country_iso2: "AU",
    geoname_id: "7730796",
    latitude: "-26.7",
    longitude: "141.04167",
    airport_name: "Arrabury",
    country_name: "Australia",
    phone_number: "NA",
    timezone: "Australia/Brisbane",
  },
  {
    id: "3168601",
    gmt: "2",
    airport_id: "3",
    iata_code: "AAC",
    city_iata_code: "AAC",
    icao_code: "HEAR",
    country_iso2: "EG",
    geoname_id: "6297289",
    latitude: "31.133333",
    longitude: "33.75",
    airport_name: "El Arish International Airport",
    country_name: "Egypt",
    phone_number: "NA",
    timezone: "Africa/Cairo",
  },
  {
    id: "3168602",
    gmt: "1",
    airport_id: "4",
    iata_code: "AAE",
    city_iata_code: "AAE",
    icao_code: "DABB",
    country_iso2: "DZ",
    geoname_id: "2570559",
    latitude: "36.821392",
    longitude: "7.811857",
    airport_name: "Les Salines",
    country_name: "NA",
    phone_number: "NA",
    timezone: "Africa/Algiers",
  },
  {
    id: "3168603",
    gmt: "-5",
    airport_id: "5",
    iata_code: "AAF",
    city_iata_code: "AAF",
    icao_code: "KAAF",
    country_iso2: "US",
    geoname_id: "4146153",
    latitude: "29.733334",
    longitude: "-84.98333",
    airport_name: "Apalachicola Regional",
    country_name: "United States",
    phone_number: "NA",
    timezone: "America/New_York",
  },
  {
    id: "3168604",
    gmt: "-3",
    airport_id: "6",
    iata_code: "AAG",
    city_iata_code: "AAG",
    icao_code: "SSYA",
    country_iso2: "BR",
    geoname_id: "3471795",
    latitude: "-24.103611",
    longitude: "-49.79",
    airport_name: "Arapoti",
    country_name: "Brazil",
    phone_number: "NA",
    timezone: "America/Sao_Paulo",
  },
];

const HomePage = () => {
  const searchParams = useSearchParams();
  const offset = searchParams.get("offset") || "0";
  const [airports, setAirports] = useState<Airport[]>(test);
  const [totalItems, setTotalItems] = useState(30);
  const { addAirports, searchedAirports } = useStore((state) => state);
  const getAirports = useCallback(async () => {
    if (searchedAirports.hasOwnProperty(offset)) {
      const airportsByOffset = searchedAirports as SearchedAirports;
      setAirports(airportsByOffset[parseInt(offset)]);
      return;
    }
    try {
      // const { data, pagination } = await axios.get("/api/airports", {
      //   params: {
      //     limit: LIMIT_PAGE_SIZE,
      //     offset,
      //   },
      // });
      setTotalItems(30);
      setAirports(test);
      addAirports({
        [offset]: test,
      });
    } catch (error) {
      console.log(error);
    }
  }, [offset, searchedAirports, addAirports]);

  useEffect(() => {
    getAirports();
  }, [offset, getAirports]);

  return (
    <div className="flex h-full flex-col items-center justify-between gap-10 overflow-auto">
      <Searcher />
      <div className="flex flex-wrap items-center justify-center gap-12 px-10">
        {airports.map((airport) => (
          <Link
            href={`/airport/${airport.id}/info`}
            key={airport.id}
            className="flex-1/3"
          >
            <AirportCard
              iata_code={airport.iata_code}
              location={airport.country_name}
              title={airport.airport_name}
            />
          </Link>
        ))}
      </div>
      <Paginator itemsPerPage={LIMIT_PAGE_SIZE} totalItems={totalItems} />
    </div>
  );
};

export default HomePage;
