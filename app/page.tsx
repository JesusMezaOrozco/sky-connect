import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-color-primary-gradient">SkyConnect Explorer</h1>
      <Input
        className="placeholder-primary text-primary h-[2.3rem] rounded-[3.5rem] border-none bg-white focus-visible:ring-0"
        placeholder="Buscar Aeropuertos..."
      />
      <Button className="background-color-primary-gradient" asChild>
        <Link href="#">
          <Image src="/icons/search.svg" alt="Buscar" width={20} height={20} />
          Buscar
        </Link>
      </Button>
    </div>
  );
}
