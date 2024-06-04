import { createContext } from "react";

export enum Wizzard {
  WHITE = "white",
  GREY = "grey",
  BROWN = "brown",
  GREEN = "green",
  BLUE = "blue",
}

export interface WizzardContextProps {
  wizzard?: Wizzard;
  setWizzard?: (wizzard: Wizzard) => void;
}

export const WizzardContext = createContext<WizzardContextProps>({});
