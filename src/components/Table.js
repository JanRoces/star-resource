import { useState } from "react";
import "../styles/Table.css";
import { STAR_SYSTEMS } from "../utils/systems";
import Resource from "./Resource";

function Table({ filter }) {
  let alternate = true;

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

  function formatName(str) {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

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

  function renderResourceList(resources) {
    const resourceList = [];

    resources.forEach((resource) => {
      resourceList.push(<Resource key={resource.name} {...resource} />);
    });

    return <div className="resource-list-container">{resourceList}</div>;
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
    const rowColor = alternateColor ? "#2E4A76" : "#486389";

    alternate = !alternate;

    return (
      <div
        className="row-container"
        key={systemName + "-" + planetName}
        style={{ backgroundColor: rowColor }}
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
          <span>{renderResourceList(resources)}</span>
        </div>
      </div>
    );
  }

  function renderRows() {
    const planetType = {
      moon: "Moon",
      planet: "Planet",
    };

    const rows = STAR_SYSTEMS.flatMap((system) => {
      return system.planets.flatMap((planet) => {
        const planetRow = planet.resources.some((resource) =>
          filter.includes(resource.name)
        )
          ? renderRow({
              level: system.level,
              systemName: system.name,
              planetName: planet.name,
              type: planetType.planet,
              mainPlanet: "",
              resources: planet.resources,
              alternateColor: alternate,
            })
          : null;

        const moonRows = planet.moons
          .filter((moon) =>
            moon.resources.some((resource) => filter.includes(resource.name))
          )
          .map((moon) => {
            // alternate = !alternate;

            return renderRow({
              level: system.level,
              systemName: system.name,
              planetName: moon.name,
              type: planetType.moon,
              mainPlanet: planet.name,
              resources: moon.resources,
              alternateColor: alternate,
            });
          });

        return [planetRow, ...moonRows];
      });
    });

    return rows.filter((row) => row !== null);
  }

  return (
    <div className="table-container">
      {renderHeader()}
      {renderRows()}
    </div>
  );
}

export default Table;
