import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface DetailTabsProps {
  id: string;
}

const tabs = [
  { name: "general", label: "General", isActive: true },
  { name: "location", label: "Location", isActive: true },
  { name: "time", label: "Time Zone", isActive: true },
  { name: "stats", label: "Stats", isActive: false },
];

export default function AirportDetailTabs({ id }: DetailTabsProps) {
  const pathname = usePathname();
  const [tab, setTab] = useState("general");

  useEffect(() => {
    const currentTab = tabs.find((t) => pathname.includes(t.name));
    if (currentTab) {
      setTab(currentTab.name);
    }
  }, [pathname]);

  return (
    <nav className="flex flex-wrap justify-between gap-4 rounded-md bg-[var(--white-opacity-20)] p-2 text-white">
      {tabs.map((t) => (
        <Button
          key={t.name}
          className="flex-1"
          variant={tab === t.name ? "default" : "ghost"}
          disabled={!t.isActive}
        >
          <Link href={`/airport/${id}/${t.name}`} className="w-full">
            {t.label}
          </Link>
        </Button>
      ))}
    </nav>
  );
}
