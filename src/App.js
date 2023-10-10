import "./App.css";
import Logo from "./components/Logo";
import ResourceSelect from "./components/ResourceSelect";
import Table from "./components/Table";
import { useState } from "react";

function App() {
  const [filters, setResourceFilters] = useState([]);
  const [levels, setLevels] = useState([]);

  return (
    <div className="App">
      <Logo />
      <ResourceSelect
        levels={levels}
        filters={filters}
        setLevels={setLevels}
        setResourceFilters={setResourceFilters}
      />
      <Table filters={filters} levels={levels} />
    </div>
  );
}

export default App;
