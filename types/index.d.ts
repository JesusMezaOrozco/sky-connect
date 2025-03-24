export interface Airport {
  id: string;
  gmt: string;
  airport_id: string;
  iata_code: string;
  city_iata_code: string;
  icao_code: string;
  country_iso2: string;
  geoname_id: string;
  latitude: string;
  longitude: string;
  airport_name: string;
  country_name: string | null;
  phone_number: string | null;
  timezone: string;
}

export interface Pagination {
  limit: number;
  offset: number;
  count: number;
  total: number;
}
