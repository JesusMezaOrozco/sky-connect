"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SearcherProps {
  onChange: (value: string) => void;
}

export default function Searcher({ onChange }: SearcherProps) {
  const [value, setValue] = useState("");
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onChange(value);
    }
  };
  return (
    <div className="sticky top-0 z-1 flex flex-wrap items-center justify-between gap-4 px-10 py-6 text-left backdrop-blur-2xl max-md:text-center min-md:w-full">
      <h1 className="text-color-primary-gradient flex-1/4 text-3xl">
        SkyConnect Explorer
      </h1>
      <div className="flex flex-2/3 items-center justify-end gap-5 max-md:flex-wrap max-md:justify-center">
        <Input
          className="placeholder-primary text-primary h-[2.3rem] max-w-5xl min-w-80 flex-8/12 rounded-[3.5rem] border-none bg-white focus-visible:ring-0"
          placeholder="Search Airports..."
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <Button
          className="background-color-primary-gradient max-w-[220px] flex-1/12 border-1 hover:cursor-pointer max-md:w-full"
          onClick={() => onChange(value)}
        >
          <Image src="/icons/search.svg" alt="Buscar" width={20} height={20} />
          <p>Search</p>
        </Button>
      </div>
      {value && (
        <div className="flex items-center gap-4">
          <Image alt="info" width={25} height={25} src="/icons/info.svg" />
          <p className="text-white">
            You are searching into airports previously fetched!
          </p>
        </div>
      )}
    </div>
  );
}
