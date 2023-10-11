import "../styles/CurrentSelection.css";
import { formatName } from "./Table";

function CurrentSelection({ selection }) {
  return (
    <div className="selection-container">
      <div>Current Selection: </div>
      <div>{formatName(selection)}</div>
    </div>
  );
}

export default CurrentSelection;
