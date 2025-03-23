"use client";
import { useParams } from "next/navigation";

export default function StatsPage() {
  const { id } = useParams();
  return <div>StatsPage{id}</div>;
}
