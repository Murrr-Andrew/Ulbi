import { FC, useMemo, useState } from "react";
import { UserContext } from "./UserContext";

const UserProvider: FC = ({ children }) => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  const defaultProps = useMemo(
    () => ({
      name,
      surname,
      age,
      setName,
      setSurname,
      setAge,
    }),
    [name, surname, age]
  );

  return (
    <UserContext.Provider value={defaultProps}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
