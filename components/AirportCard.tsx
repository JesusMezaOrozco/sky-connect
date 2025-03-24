import Image from "next/image";
import React from "react";

interface AirportCardProps {
  title: string;
  location: string | null;
  iata_code: string;
}

export default function AirportCard({
  iata_code,
  location,
  title,
}: AirportCardProps) {
  return (
    <div className="card-background relative h-[200px] w-full rounded-md border p-8">
      <Image
        width={50}
        height={50}
        src="/icons/flight.svg"
        alt="flight"
        className="absolute top-5 right-5"
      />
      <div className="flex h-full flex-col justify-between">
        <div className="max-w-[70%]">
          <h4 className="mb-2 text-xl font-bold">Airport {title}</h4>
          <p>{location}</p>
        </div>
        <h2 className="text-color-primary-gradient text-3xl">{iata_code}</h2>
      </div>
    </div>
  );
}
