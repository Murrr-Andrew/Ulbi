import { FC, useMemo, useState } from "react";
import { WizzardContext, Wizzard } from "./WizzardContext";

const WizzardProvider: FC = ({ children }) => {
  const [wizzard, setWizzard] = useState<Wizzard>(Wizzard.WHITE);

  const defaultProps = useMemo(
    () => ({
      wizzard: wizzard,
      setWizzard: setWizzard,
    }),
    [wizzard]
  );

  return (
    <WizzardContext.Provider value={defaultProps}>
      {children}
    </WizzardContext.Provider>
  );
};

export default WizzardProvider;
