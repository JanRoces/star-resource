import "./App.css";
import Logo from "./components/Logo";
import ResourceSelect from "./components/ResourceSelect";
import Table from "./components/Table";
import { useState } from "react";

function App() {
  const [filter, setResourceFilter] = useState([]);

  return (
    <div className="App">
      <Logo />
      <ResourceSelect filter={filter} setResourceFilter={setResourceFilter} />
      <Table filter={filter} />
    </div>
  );
}

export default App;
