import "../styles/Table.css";
import { STAR_SYSTEMS } from "../utils/systems";

function formatName(str) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function Table() {
  const headerConfig = [
    {
      label: "level",
      flex: "1",
    },
    {
      label: "system",
      flex: "1",
    },
    {
      label: "name",
      flex: "1",
    },
    {
      label: "type",
      flex: "1",
    },
    {
      label: "main planet",
      flex: "1",
    },
    {
      label: "resources",
      flex: "3",
    },
  ];

  function renderHeader() {
    const headerLabels = [];

    headerConfig.forEach((item, index) => {
      headerLabels.push(
        <div
          className="label-container"
          key={index}
          style={{ flex: item.flex }}
        >
          <span className="label">{formatName(item.label)}</span>
        </div>
      );
    });

    return <div className="header-container">{headerLabels}</div>;
  }

  function renderRows() {
    const planetType = {
      moon: "Moon",
      planet: "Planet",
    };

    const rows = [];

    let alternate = true;

    STAR_SYSTEMS.forEach((system) => {
      system.planets.forEach((planet) => {
        alternate = !alternate;

        rows.push(
          renderRow({
            level: system.level,
            systemName: system.name,
            planetName: planet.name,
            type: planetType.planet,
            mainPlanet: "",
            resources: planet.resources,
            alternateColor: alternate,
          })
        );
        planet.moons.forEach((moon) => {
          alternate = !alternate;

          rows.push(
            renderRow({
              level: system.level,
              systemName: system.name,
              planetName: moon.name,
              type: planetType.moon,
              mainPlanet: planet.name,
              resources: moon.resources,
              alternateColor: alternate,
            })
          );
        });
      });
    });

    return rows;
  }

  function renderRow({
    level,
    systemName,
    planetName,
    type,
    mainPlanet,
    resources,
    alternateColor,
  }) {
    const resourcesSymbols = resources.map((r) => r.symbol);
    const symbolList = resourcesSymbols.join(", ");

    const color = alternateColor ? "#2E4A76" : "#486389";

    return (
      <div
        className="row-container"
        key={systemName + "-" + planetName}
        style={{ backgroundColor: color }}
      >
        <div className="column-container">
          <span>{level}</span>
        </div>
        <div className="column-container">
          <span>{formatName(systemName)}</span>
        </div>
        <div className="column-container">
          <span>{formatName(planetName)}</span>
        </div>
        <div className="column-container">
          <span>{type}</span>
        </div>
        <div className="column-container">
          <span>{formatName(mainPlanet)}</span>
        </div>
        <div className="column-container" style={{ flex: 3 }}>
          <span>{symbolList}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="table-container">
      {renderHeader()}
      {renderRows()}
    </div>
  );
}

export default Table;
