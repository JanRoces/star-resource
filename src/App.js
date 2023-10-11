import "./App.css";
import Expand from "./components/Expand";
import Logo from "./components/Logo";
import Table from "./components/Table";
import { useState } from "react";

function App() {
  const [filters, setResourceFilters] = useState([]);
  const [levels, setLevels] = useState([]);

  const props = { levels, filters };
  const callBacks = { setLevels, setResourceFilters };

  return (
    <div className="App">
      <Logo />
      <Expand {...props} {...callBacks} />
      <Table {...props} />
    </div>
  );
}

export default App;
