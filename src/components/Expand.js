import { useState } from "react";
import "../styles/Expand.css";
import AppliedFilters from "./AppliedFilters";
import CurrentSelection from "./CurrentSelection";
import ResourceSelect from "./ResourceSelect";
import ResetButton from "./ResetButton";

function Expand({
  filters,
  levels,
  selection,
  setLevels,
  setResourceFilters,
  setSelection,
}) {
  const [expand, setExpand] = useState(false);
  const props = { levels, filters, selection };
  const callBacks = { setLevels, setResourceFilters, setSelection };

  function renderCurrentSelection() {
    return expand ? <CurrentSelection selection={selection} /> : "";
  }

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
        {renderCurrentSelection()}
      </div>
    );
  }

  function renderContent() {
    return expand ? (
      <div className="expand-content">
        <AppliedFilters {...props} />
        <ResetButton {...callBacks} />
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
