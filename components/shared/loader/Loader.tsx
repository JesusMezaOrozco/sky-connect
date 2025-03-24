"use client";
import { useStore } from "@/providers/Store";

export default function Loader() {
  const { isLoading } = useStore((state) => state);
  return (
    <>
      {isLoading && (
        <div className="bg-opacity-50 main-background fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center">
          <div className="border-var(--light) h-32 w-32 animate-spin rounded-full border-b-2"></div>
        </div>
      )}
    </>
  );
}
