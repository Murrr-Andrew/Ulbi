import { useContext } from "react";
import { UserContext } from "./UserContext";

interface UseUserResult {
  name: string;
  surname: string;
  age: number;
  setName: (name: string) => void;
  setSurname: (surname: string) => void;
  setAge: (age: number) => void;
}

export function useUser(): UseUserResult {
  const { name, surname, age, setName, setSurname, setAge } =
    useContext(UserContext);

  return {
    name: name || "",
    surname: surname || "",
    age: age || 0,
    setName: (newName: string) => {
      if (setName) {
        setName(newName);
      }
    },
    setSurname: (newSurname: string) => {
      if (setSurname) {
        setSurname(newSurname);
      }
    },
    setAge: (newAge: number) => {
      if (setAge) {
        setAge(newAge);
      }
    },
  };
}
