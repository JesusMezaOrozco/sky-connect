"use client";
import { createContext, PropsWithChildren, useContext, useRef } from "react";
import { type AirportsStore, createAirportsStore } from "@/store/airports";
import { useStore as useZustandStore } from "zustand";

export type StoreApi = ReturnType<typeof createAirportsStore>;

export const StoreContext = createContext<StoreApi | undefined>(undefined);

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<StoreApi | null>(null);

  if (!storeRef.current) {
    storeRef.current = createAirportsStore();
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = <T,>(selector: (store: AirportsStore) => T): T => {
  const storeContext = useContext(StoreContext);

  if (!storeContext) {
    throw new Error(`useStore must be used within StoreProvider`);
  }

  return useZustandStore(storeContext, selector);
};
