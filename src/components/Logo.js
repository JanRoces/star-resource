import Element from "./Element";
import "../styles/Logo.css";

function Logo() {
  const logoStarResource = [
    {
      atomicNumber: "16",
      atomicSymbol: "S",
      atomicWeight: "32.07",
      hideBorderRight: true,
    },
    {
      atomicSymbol: "T",
      hideBorderRight: true,
    },
    {
      atomicNumber: "18",
      atomicSymbol: "Ar",
      atomicWeight: "39.95",
      hideBorderRight: true,
    },
    {
      atomicNumber: "75",
      atomicSymbol: "Re",
      atomicWeight: "186.2",
      hideBorderRight: true,
    },
    {
      atomicNumber: "16",
      atomicSymbol: "S",
      atomicWeight: "32.07",
      hideBorderRight: true,
    },
    {
      atomicNumber: "8",
      atomicSymbol: "O",
      atomicWeight: "16",
      backgroundColor: "#2F4C79",
      hideBorderRight: true,
    },
    {
      atomicNumber: "92",
      atomicSymbol: "U",
      atomicWeight: "238",
      backgroundColor: "#D7AB61",
      hideBorderRight: true,
    },
    {
      atomicSymbol: "R",
      backgroundColor: "#E06236",
      hideBorderRight: true,
    },
    {
      atomicNumber: "58",
      atomicSymbol: "Ce",
      atomicWeight: "140.1",
      backgroundColor: "#C82337",
    },
  ];

  const logoStar = [
    {
      atomicNumber: "16",
      atomicSymbol: "S",
      atomicWeight: "32.07",
      hideBorderRight: true,
    },
    {
      atomicSymbol: "T",
      hideBorderRight: true,
    },
    {
      atomicNumber: "18",
      atomicSymbol: "Ar",
      atomicWeight: "39.95",
    },
  ];

  const logoResource = [
    {
      atomicNumber: "75",
      atomicSymbol: "Re",
      atomicWeight: "186.2",
      hideBorderRight: true,
    },
    {
      atomicNumber: "16",
      atomicSymbol: "S",
      atomicWeight: "32.07",
      hideBorderRight: true,
    },
    {
      atomicNumber: "8",
      atomicSymbol: "O",
      atomicWeight: "16",
      backgroundColor: "#2F4C79",
      hideBorderRight: true,
    },
    {
      atomicNumber: "92",
      atomicSymbol: "U",
      atomicWeight: "238",
      backgroundColor: "#D7AB61",
      hideBorderRight: true,
    },
    {
      atomicSymbol: "R",
      backgroundColor: "#E06236",
      hideBorderRight: true,
    },
    {
      atomicNumber: "58",
      atomicSymbol: "Ce",
      atomicWeight: "140.1",
      backgroundColor: "#C82337",
    },
  ];

  function renderElements(elements) {
    let arr = [];

    elements.forEach((element, index) => {
      arr.push(<Element key={index} {...element} />);
    });

    return arr;
  }

  return (
    <div className="container">
      <div className="logo">{renderElements(logoStar)}</div>
      <div className="logo">{renderElements(logoResource)}</div>
    </div>
  );
}

export default Logo;
