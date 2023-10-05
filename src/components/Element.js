import "../styles/Element.css";

function Element({
  atomicNumber,
  atomicSymbol,
  atomicWeight,
  backgroundColor,
  hideBorderRight,
  hideBorderBottom,
}) {
  const borderRight = hideBorderRight ? "none" : "";
  const borderBottom = hideBorderBottom ? "none" : "";

  function renderNumber(number) {
    return number ? <div className="number">{number}</div> : "";
  }

  return (
    <div
      className="box"
      style={{
        backgroundColor: backgroundColor,
        borderRight: borderRight,
        borderBottom: borderBottom,
      }}
    >
      {renderNumber(atomicNumber)}
      <div className="atomic-symbol">{atomicSymbol}</div>
      {renderNumber(atomicWeight)}
    </div>
  );
}

export default Element;
