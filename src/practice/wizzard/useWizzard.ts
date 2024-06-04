import { Wizzard, WizzardContext } from "./WizzardContext";
import { useContext } from "react";

interface UseWizzardResult {
  selectWizzard: (wizzard: Wizzard) => void;
  wizzard: Wizzard;
}

export function useWizzard(): UseWizzardResult {
  const { wizzard, setWizzard } = useContext(WizzardContext);

  const selectWizzard = (newWizzard: Wizzard) => {
    if (setWizzard) {
      setWizzard(newWizzard);
    }
  };

  return {
    wizzard: wizzard || Wizzard.WHITE,
    selectWizzard,
  };
}
