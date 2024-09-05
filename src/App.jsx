import { createContext, useState } from "react";
import ComponentA from "./ComponentA";

export const nameContext = createContext();
function App() {
  // const [data, setData] = useState("This data is from StateHook")
  const data = "Randomness"

  return (
    <>
      <nameContext.Provider value={{data}}>
        <div>Hello</div>
        <ComponentA />
      </nameContext.Provider>
    </>
  );
}

export default App;
