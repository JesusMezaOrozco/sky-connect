"use client";
import Link from "next/link";
import Searcher from "@/components/shared/searcher/Searcher";
import Paginator from "@/components/shared/paginator/Paginator";
import AirportCard from "@/components/AirportCard";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { LIMIT_PAGE_SIZE, useAirportList } from "@/hooks/useAirport";

const HomePageContent = () => {
  const searchParams = useSearchParams();
  const offset = searchParams.get("offset") || "0";
  const { airports, handleSearch, totalItems, filter } = useAirportList(offset);
  return (
    <div className="flex h-full w-full flex-col items-center overflow-auto">
      <Searcher onChange={handleSearch} />
      <div className="flex w-full flex-1 flex-wrap justify-center gap-12 px-10">
        {airports.map((airport) => (
          <Link
            href={`/airport/${airport.id}/general`}
            key={airport.id}
            className="min-w-[300px] flex-1/3"
          >
            <AirportCard
              iata_code={airport.iata_code}
              location={airport.country_name}
              title={airport.airport_name}
            />
          </Link>
        ))}
      </div>
      {filter === "" && (
        <Paginator itemsPerPage={LIMIT_PAGE_SIZE} totalItems={totalItems} />
      )}
    </div>
  );
};

const HomePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageContent />
    </Suspense>
  );
};

export default HomePage;
