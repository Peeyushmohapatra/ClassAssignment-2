import { createContext, useContext, useState } from "react";
export const Global = createContext();

function MyContext({ children }) {
    const [valid,setValid] = useState(false);
    const [name,setName] = useState("");
    return (
  <Global.Provider value={{valid,setValid,name,setName}}>
    {children}
  </Global.Provider>
  );
}

export default MyContext;
