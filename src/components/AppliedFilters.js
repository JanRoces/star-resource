import "../styles/AppliedFilters.css";

function AppliedFilters({ levels, filters }) {
  function renderItemList(items, label) {
    const itemList = items.join(", ");

    return (
      <div>
        <span className="label">{label}: </span>
        <span>{itemList}</span>
      </div>
    );
  }

  return (
    <div className="applied-filters-container">
      <div className="applied-filters-content">
        <div className="label">Applied Filters</div>
        <div className="items-container">
          {renderItemList(filters, "Resources")}
          {renderItemList(levels, "Levels")}
        </div>
      </div>
    </div>
  );
}

export default AppliedFilters;
