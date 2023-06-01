import "./App.css";
import Routing from "./routes";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

function App() {
  const navigate = useNavigate();

  return (
    <section>
      <AppContext.Provider value={{ navigate }}>
        <Routing />
      </AppContext.Provider>
    </section>
  );
}

export default App;
