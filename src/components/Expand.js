import { useState } from "react";
import "../styles/Expand.css";
import AppliedFilters from "./AppliedFilters";
import ResourceSelect from "./ResourceSelect";

function Expand({ filters, levels, setLevels, setResourceFilters }) {
  const [expand, setExpand] = useState(false);
  const props = { levels, filters };
  const callBacks = { setLevels, setResourceFilters };

  function renderHeader() {
    const icon = expand ? "fas fa-angle-up" : "fas fa-angle-down";
    const borderRadius = expand ? "15px 15px 0px 0px" : "15px";

    return (
      <div className="expand-header-container">
        <div
          className="label-and-arrow-container"
          style={{ borderRadius: borderRadius }}
          onClick={() => setExpand(!expand)}
        >
          <span className="expand-label">Filters</span>
          <span>
            <i className={icon}></i>
          </span>
        </div>
      </div>
    );
  }

  function renderContent() {
    return expand ? (
      <div className="expand-content">
        <AppliedFilters {...props} />
        <ResourceSelect {...props} {...callBacks} />
      </div>
    ) : (
      ""
    );
  }

  return (
    <div className="expand-container">
      {renderHeader()}
      {renderContent()}
    </div>
  );
}

export default Expand;
