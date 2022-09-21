import { createContext, useState } from "react";
import { data as initialdata } from "./Reusables/data";

export const Data = createContext();

const Context = ({ children }) => {
  const dataset = JSON.parse(localStorage.getItem("data"));
  const [data, setData] = useState(dataset ? dataset : initialdata);
  return <Data.Provider value={{ data, setData }}>{children}</Data.Provider>;
};
export default Context;
