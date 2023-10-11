import { useState } from "react";
import "../styles/Expand.css";

function Expand() {
  const [flip, setFlip] = useState(false);

  function renderHeader() {
    const icon = flip ? "fas fa-angle-up" : "fas fa-angle-down";

    return (
      <div className="expand-header-container">
        <div
          className="label-and-arrow-container"
          onClick={() => setFlip(!flip)}
        >
          <span className="expand-label">Filters</span>
          <span>
            <i className={icon}></i>
          </span>
        </div>
      </div>
    );
  }

  return <div className="expand-container">{renderHeader()}</div>;
}

export default Expand;
