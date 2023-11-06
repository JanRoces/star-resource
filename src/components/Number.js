import '../styles/Number.css';

function Number({ color, digit, onHover, onStopHover, onSelectLevel }) {
  function clickNumber() {
    onSelectLevel(digit);
  }

  function hoverOverNumber() {
    const text = 'Level ' + digit;

    onHover(text);
  }

  return (
    <div
      className="number-container"
      style={{ backgroundColor: color }}
      onClick={() => clickNumber(digit)}
      onMouseEnter={() => hoverOverNumber(digit)}
      onMouseLeave={() => onStopHover()}
    >
      <div className="digit">{digit}</div>
    </div>
  );
}

export default Number;
