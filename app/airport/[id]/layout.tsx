"use client";
import AirportDetailTabs from "@/components/AirportDetailTabs";
import { useAirportDetail } from "@/hooks/useAirport";
import { use } from "react";

type Params = Promise<{ id: string }>;

export default function Layout({
  details,
  params,
}: {
  children: React.ReactNode;
  details: React.ReactNode;
  params: Params;
}) {
  const pageParams = use(params);
  const id = pageParams.id;
  const airport = useAirportDetail(id);

  return (
    <>
      {airport ? (
        <div className="flex h-full flex-col gap-10 px-10 py-6">
          <div className="flex flex-col flex-wrap gap-6">
            <h1 className="text-color-primary-gradient m-auto text-center text-5xl">
              {airport.airport_name}
            </h1>
            <AirportDetailTabs id={id} />
          </div>
          <section>{details}</section>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
