import "../styles/Resource.css";

function Resource({ symbol, rarity, backgroundColor }) {
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
    <div>
      <div
        className="resource-container"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="rarity">{renderRarityIcon()}</div>
        <div className="symbol">{symbol}</div>
      </div>
    </div>
  );
}

export default Resource;
