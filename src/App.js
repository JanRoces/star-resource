import "./App.css";
import Logo from "./components/Logo";
import ResourceSelect from "./components/ResourceSelect";
import Table from "./components/Table";
import { useState } from "react";
import AppliedFilters from "./components/AppliedFilters";

function App() {
  const [filters, setResourceFilters] = useState([]);
  const [levels, setLevels] = useState([]);

  const props = { levels, filters };
  const callBacks = { setLevels, setResourceFilters };

  return (
    <div className="App">
      <Logo />
      <AppliedFilters {...props} />
      <ResourceSelect {...props} {...callBacks} />
      <Table {...props} />
    </div>
  );
}

export default App;
