"use client";
import { useParams } from "next/navigation";

export default function TimePage() {
  const { id } = useParams();
  return <div>TimePage{id}</div>;
}
