import { createStore } from "zustand/vanilla";
import { Airport } from "@/types";
export type SearchedAirports = Record<number, Airport[]>;
export type IndexedAirports = Record<number, Airport>;

export type AirportsState = {
  searchedAirports: SearchedAirports;
  indexedAirports: IndexedAirports;
};

export type AirportsActions = {
  addAirports: (searchedAirports: AirportsState["searchedAirports"]) => void;
};

export type AirportsStore = AirportsState & AirportsActions;

export const defaultInitAirportsState: AirportsState = {
  searchedAirports: {},
  indexedAirports: {},
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
  }));
};
