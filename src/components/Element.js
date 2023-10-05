import "../styles/Element.css";

function Element({
  atomicNumber,
  atomicSymbol,
  atomicWeight,
  hideBorderRight,
}) {
  const borderRight = hideBorderRight ? "none" : "";

  function renderNumber(number) {
    return number ? <div className="atomic-number">{number}</div> : "";
  }

  return (
    <div className="box" style={{ borderRight: borderRight }}>
      {renderNumber(atomicNumber)}
      <div className="atomic-symbol">{atomicSymbol}</div>
      {renderNumber(atomicWeight)}
    </div>
  );
}

export default Element;
