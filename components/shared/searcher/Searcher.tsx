"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Searcher() {
  return (
    <div className="sticky top-0 z-1 flex flex-wrap items-center justify-between gap-4 px-10 py-6 text-left backdrop-blur-2xl max-md:text-center min-md:w-full">
      <h1 className="text-color-primary-gradient flex-1/4 text-3xl">
        SkyConnect Explorer
      </h1>
      <div className="flex flex-2/3 items-center justify-end gap-5 max-md:flex-wrap max-md:justify-center">
        <Input
          className="placeholder-primary text-primary h-[2.3rem] max-w-5xl min-w-80 flex-8/12 rounded-[3.5rem] border-none bg-white focus-visible:ring-0"
          placeholder="Search Airports..."
        />
        <Button
          className="background-color-primary-gradient max-w-[220px] flex-1/12 border-1 max-md:w-full"
          asChild
        >
          <Link href="#">
            <Image
              src="/icons/search.svg"
              alt="Buscar"
              width={20}
              height={20}
            />
            <p>Search</p>
          </Link>
        </Button>
      </div>
    </div>
  );
}
