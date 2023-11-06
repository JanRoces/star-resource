import '../styles/Resource.css';

function Resource({
  backgroundColor,
  name,
  rarity,
  selectable,
  symbol,
  onHover,
  onStopHover,
  onSelectResource,
}) {
  const id = selectable ? name : '';

  function clickResource() {
    if (!selectable) {
      return;
    }

    onSelectResource(name);
  }

  function hoverOverResource() {
    if (!selectable) {
      return;
    }

    onHover(name);
  }

  function clearResource() {
    if (!selectable) {
      return;
    }

    onStopHover();
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
      style={{
        backgroundColor: backgroundColor,
        cursor: selectable ? 'pointer' : 'auto',
      }}
      onClick={() => clickResource(name)}
      onMouseEnter={() => hoverOverResource(name)}
      onMouseLeave={() => clearResource()}
    >
      <div className="rarity">{renderRarityIcon()}</div>
      <div className="symbol">{symbol}</div>
    </div>
  );
}

export default Resource;
