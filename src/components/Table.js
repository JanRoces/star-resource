import '../styles/Table.css';
import { ALL_STAR_SYSTEMS } from '../utils/starSystems/allStarSystems';
import Resource from './Resource';

export function formatName(str) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
function Table({ filters, levels }) {
  let alternate = true;

  const headerConfig = [
    {
      label: 'level',
      flex: '1',
    },
    {
      label: 'system',
      flex: '1',
    },
    {
      label: 'name',
      flex: '1',
    },
    {
      label: 'type',
      flex: '1',
    },
    {
      label: 'main planet',
      flex: '1',
    },
    {
      label: 'resources',
      flex: '3',
    },
  ];

  const planetType = {
    moon: 'Moon',
    planet: 'Planet',
  };

  function renderHeader() {
    const headerLabels = [];

    headerConfig.forEach((item, index) => {
      headerLabels.push(
        <div
          className="label-container"
          key={index}
          style={{ flex: item.flex }}>
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
    const rowColor = alternateColor ? '#2E4A76' : '#486389';

    alternate = !alternate;

    return (
      <div
        className="row-container"
        key={systemName + '-' + planetName}
        style={{ backgroundColor: rowColor }}>
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

  function renderFilteredRows() {
    const starSystems = levels.length
      ? ALL_STAR_SYSTEMS.filter((system) => levels.includes(system.level))
      : ALL_STAR_SYSTEMS;

    if (!filters.length) {
      return renderAllRows(starSystems);
    }

    const rows = starSystems.reduce((acc, system) => {
      system.planets.forEach((planet) => {
        const planetRow = planet.resources.some((resource) =>
          filters.includes(resource.name)
        )
          ? renderRow({
              level: system.level,
              systemName: system.name,
              planetName: planet.name,
              type: planetType.planet,
              mainPlanet: '',
              resources: planet.resources,
              alternateColor: alternate,
            })
          : null;

        const moonRows = planet.moons.reduce((moonAcc, moon) => {
          if (
            moon.resources.some((resource) => filters.includes(resource.name))
          ) {
            moonAcc.push(
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
          }
          return moonAcc;
        }, []);

        if (planetRow) {
          acc.push(planetRow);
        }

        acc.push(...moonRows);
      });

      return acc;
    }, []);

    return rows;
  }

  function renderFilteredRowsStrict() {
    const starSystems = levels.length
      ? ALL_STAR_SYSTEMS.filter((system) => levels.includes(system.level))
      : ALL_STAR_SYSTEMS;

    if (!filters.length) {
      return renderAllRows(starSystems);
    }

    const rows = starSystems.reduce((acc, system) => {
      system.planets.forEach((planet) => {
        const hasAllResources = filters.every((filter) =>
          planet.resources.some((resource) => resource.name === filter)
        );

        const planetRow = hasAllResources
          ? renderRow({
              level: system.level,
              systemName: system.name,
              planetName: planet.name,
              type: planetType.planet,
              mainPlanet: '',
              resources: planet.resources,
              alternateColor: alternate,
            })
          : null;

        const moonRows = planet.moons.reduce((moonAcc, moon) => {
          const moonHasAllResources = filters.every((filter) =>
            moon.resources.some((resource) => resource.name === filter)
          );

          if (moonHasAllResources) {
            moonAcc.push(
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
          }
          return moonAcc;
        }, []);

        if (planetRow) {
          acc.push(planetRow);
        }

        acc.push(...moonRows);
      });

      return acc;
    }, []);

    return rows;
  }

  function renderAllRows(starSystems = ALL_STAR_SYSTEMS) {
    const rows = starSystems.flatMap((system) => {
      return system.planets.flatMap((planet) => {
        const planetRow = renderRow({
          level: system.level,
          systemName: system.name,
          planetName: planet.name,
          type: planetType.planet,
          mainPlanet: '',
          resources: planet.resources,
          alternateColor: alternate,
        });

        const moonRows = planet.moons.map((moon) => {
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

    return rows;
  }

  return (
    <div className="table-container">
      {renderHeader()}
      {filters.length || levels.length
        ? renderFilteredRowsStrict()
        : renderAllRows()}
    </div>
  );
}

export default Table;
