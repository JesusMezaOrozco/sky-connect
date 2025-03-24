"use client";
import { useAirportList, LIMIT_PAGE_SIZE } from "@/hooks/useAirport";
import { useSearchParams } from "next/navigation";
import React from "react";
import AirportCard from "../AirportCard";
import Paginator from "../shared/paginator/Paginator";
import Searcher from "../shared/searcher/Searcher";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const searchParams = useSearchParams();
  const offset = searchParams.get("offset") || "0";
  const { airports, handleSearch, totalItems, filter } = useAirportList(offset);

  const itemVariants = {
    hidden: { y: 20 },
    visible: {
      y: 0,
      transition: {
        duration: 0.5, // Aumenta la duración de la animación
      },
    },
  };

  return (
    <>
      <div className="flex h-full w-full flex-col items-center overflow-auto">
        <Searcher onChange={handleSearch} />
        <motion.div
          className="flex w-full flex-wrap justify-center gap-5 px-10"
          initial="hidden"
          animate="visible"
        >
          {airports.length > 0 ? (
            airports.map((airport) => (
              <motion.div
                key={airport.id}
                variants={itemVariants}
                className="min-w-[300px] flex-1/3"
              >
                <Link href={`/airport/${airport.id}/general`}>
                  <AirportCard
                    iata_code={airport.iata_code}
                    location={airport.country_name}
                    title={airport.airport_name}
                  />
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="flex items-center">
              <h1 className="text-color-primary-gradient m-auto text-3xl">
                No airports founded!
              </h1>
              <span className="text-5xl">😢</span>
            </div>
          )}
        </motion.div>
      </div>
      {filter === "" && (
        <Paginator itemsPerPage={LIMIT_PAGE_SIZE} totalItems={totalItems} />
      )}
    </>
  );
}
