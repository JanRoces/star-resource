import "./App.css";
import Expand from "./components/Expand";
import Logo from "./components/Logo";
import Table from "./components/Table";
import { useState } from "react";

function App() {
  const [filters, setResourceFilters] = useState([]);
  const [levels, setLevels] = useState([]);
  const [selection, setSelection] = useState("");

  const props = { levels, filters, selection };
  const callBacks = { setLevels, setResourceFilters, setSelection };

  return (
    <div className="App">
      <Logo />
      <Expand {...props} {...callBacks} />
      <Table {...props} />
    </div>
  );
}

export default App;
