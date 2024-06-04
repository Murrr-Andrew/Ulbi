import { createContext } from "react";

export interface UserContextProps {
  name?: string;
  surname?: string;
  age?: number;
  setName?: (name: string) => void;
  setSurname?: (surname: string) => void;
  setAge?: (age: number) => void;
}

export const UserContext = createContext<UserContextProps>({});
