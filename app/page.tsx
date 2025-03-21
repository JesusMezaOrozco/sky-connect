import { airportsApi } from "./(pages)/api/airportsApi";
import { Airport } from "@/types";
import Searcher from "@/components/shared/searcher/Searcher";

const LIMIT_PAGE_SIZE = 6;

export default async function Home() {
  let airports: Airport[] = [];
  async function getAirports() {
    try {
      const { data } = await airportsApi.get("", {
        params: {
          limit: LIMIT_PAGE_SIZE,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  if (false) {
    const { data } = await getAirports();
    airports = data;
  }
  return (
    <div>
      <h1 className="text-color-primary-gradient">SkyConnect Explorer</h1>
      <Searcher />
      {airports.map((airport) => (
        <h2 key={airport.id}>{airport.airport_name}</h2>
      ))}
    </div>
  );
}
