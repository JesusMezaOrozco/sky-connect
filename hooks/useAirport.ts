import { useCallback, useEffect, useState } from "react";
import { useStore } from "@/providers/Store";
import { Airport } from "@/types";
import { SearchedAirports } from "@/store/airports";
export const LIMIT_PAGE_SIZE = 6;

export function useAirportDetail(id: string) {
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

export function useAirportList(offset: string) {
  const [airports, setAirports] = useState<Airport[]>([]);
  const [filter, setFilter] = useState("");
  const [totalItems, setTotalItems] = useState(test.length);
  const { addAirports, searchedAirports, indexedAirports } = useStore(
    (state) => state,
  );
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
      setTotalItems(test.length);
      // setAirports(test);
      addAirports({
        [offset]: test.slice(Number(offset), Number(offset) + LIMIT_PAGE_SIZE),
      });
    } catch (error) {
      console.log(error);
    }
  }, [offset, searchedAirports, addAirports]);

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
    id: "3168685",
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
    id: "3168700",
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
    id: "3168686",
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
    id: "3168687",
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
    id: "3168688",
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
    id: "3168689",
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
    id: "3168692",
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
