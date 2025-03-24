import { createStore } from "zustand/vanilla";
import { Airport } from "@/types";
export type SearchedAirports = Record<number, Airport[]>;
export type IndexedAirports = Record<number, Airport>;

type messageType = "error" | "success" | "info" | "warning";

export type AirportsState = {
  searchedAirports: SearchedAirports;
  indexedAirports: IndexedAirports;
  isLoading: boolean;
  message: {
    type: messageType;
    text: string;
  } | null;
};

export type AirportsActions = {
  addAirports: (searchedAirports: AirportsState["searchedAirports"]) => void;
  setLoading: (isLoading: boolean) => void;
  setMessage: (message: AirportsState["message"]) => void;
};

export type AirportsStore = AirportsState & AirportsActions;

export const defaultInitAirportsState: AirportsState = {
  searchedAirports: {},
  indexedAirports: {},
  isLoading: true,
  message: null,
};

export const createAirportsStore = (
  initState: AirportsState = defaultInitAirportsState,
) => {
  return createStore<AirportsStore>((set) => ({
    ...initState,
    addAirports: (searchedAirports) =>
      set((state) => ({
        ...state,
        searchedAirports: {
          ...state.searchedAirports,
          ...searchedAirports,
        },
        indexedAirports: {
          ...state.indexedAirports,
          ...Object.assign(
            {},
            ...Object.values(searchedAirports).map((airports) =>
              airports.reduce(
                (acc: IndexedAirports, airport: Airport) => ({
                  ...acc,
                  [airport.id]: airport,
                }),
                {},
              ),
            ),
          ),
        },
      })),
    setLoading: (isLoading) => set((state) => ({ ...state, isLoading })),
    setMessage: (message) => set((state) => ({ ...state, message })),
  }));
};
