import "../styles/Resource.css";

function Resource({
  backgroundColor,
  name,
  rarity,
  selectable,
  symbol,
  onSelectResource,
}) {
  const id = selectable ? name : "";

  function clickResource() {
    if (!selectable) {
      return;
    }

    onSelectResource(name);
  }

  function renderRarityIcon() {
    const color = rarity.color || backgroundColor;

    return (
      <span
        className="dot"
        style={{
          backgroundColor: color,
        }}
      ></span>
    );
  }

  return (
    <div
      id={id}
      className="resource-container"
      style={{ backgroundColor: backgroundColor }}
      onClick={() => clickResource(name)}
    >
      <div className="rarity">{renderRarityIcon()}</div>
      <div className="symbol">{symbol}</div>
    </div>
  );
}

export default Resource;
