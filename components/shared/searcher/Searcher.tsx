"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const Searcher = () => {
  return (
    <>
      <Input
        className="placeholder-primary text-primary h-[2.3rem] rounded-[3.5rem] border-none bg-white focus-visible:ring-0"
        placeholder="Buscar Aeropuertos..."
      />
      <Button className="background-color-primary-gradient border-1" asChild>
        <Link href="#">
          <Image src="/icons/search.svg" alt="Buscar" width={20} height={20} />
          <p>Buscar</p>
        </Link>
      </Button>
    </>
  );
};

export default Searcher;
