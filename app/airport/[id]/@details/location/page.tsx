"use client";
import { useParams } from "next/navigation";

export default function LocationPage() {
  const { id } = useParams();
  return <div>LocationPage{id}</div>;
}
