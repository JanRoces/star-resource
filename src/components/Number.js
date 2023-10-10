import "../styles/Number.css";

function Number({ color, digit, onSelectLevel }) {
  function clickNumber() {
    onSelectLevel(digit);
  }

  return (
    <div
      className="number-container"
      style={{ backgroundColor: color }}
      onClick={() => clickNumber(digit)}
    >
      <div className="digit">{digit}</div>
    </div>
  );
}

export default Number;
