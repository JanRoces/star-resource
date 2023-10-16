import "../styles/ResetButton.css";

function ResetButton({ setLevels, setResourceFilters }) {
  function resetFilters() {
    setLevels([]);
    setResourceFilters([]);
  }

  return (
    <div className="button-container">
      <button onClick={() => resetFilters()}>Reset</button>
    </div>
  );
}

export default ResetButton;
