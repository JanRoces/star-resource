import "../styles/ResourceSelect.css";
import {
  COMMON_RESOURCES,
  EXOTIC_RESOURCES,
  LEVELS,
  RARE_RESOURCES,
  UNCOMMON_RESOURCES,
  UNIQUE_RESOURCES,
} from "../utils/resources";
import Resource from "./Resource";
import Number from "./Number";

function ResourceSelect({
  filters,
  levels,
  selection,
  setLevels,
  setResourceFilters,
  setSelection,
}) {
  const resourceGroups = [
    {
      name: "row 1",
      resourceGroup: [
        {
          title: "Common",
          resources: COMMON_RESOURCES,
        },
        {
          title: "Uncommon",
          resources: UNCOMMON_RESOURCES,
        },
      ],
    },
    {
      name: "row 2",
      resourceGroup: [
        {
          title: "Rare",
          resources: RARE_RESOURCES,
        },
        {
          title: "Exotic",
          resources: EXOTIC_RESOURCES,
        },
      ],
    },
    {
      name: "row 3",
      resourceGroup: [
        {
          title: "Unique",
          resources: UNIQUE_RESOURCES,
        },
        {
          title: "Levels",
          resources: LEVELS,
        },
      ],
    },
  ];

  function addLevel(number) {
    setLevels([...levels, number]);
  }

  function addResource(name) {
    setResourceFilters([...filters, name]);
  }

  function removeLevel(number) {
    const levelsClone = [...levels];
    const levelsIndex = levelsClone.indexOf(number);

    levelsClone.splice(levelsIndex, 1);

    setLevels(levelsClone);
  }

  function removeResource(name) {
    const filterClone = [...filters];
    const resourceIndex = filterClone.indexOf(name);

    filterClone.splice(resourceIndex, 1);

    setResourceFilters(filterClone);
  }

  function selectLevel(number) {
    return levels.includes(number) ? removeLevel(number) : addLevel(number);
  }

  function selectResource(name) {
    return filters.includes(name) ? removeResource(name) : addResource(name);
  }

  function hoverSelection(name) {
    setSelection(name);
  }

  function clearHoverSelection(name) {
    setSelection("");
  }

  function renderResources({ title, resources }) {
    const items =
      title === "Levels"
        ? resources.map((level) => {
            return (
              <Number
                key={level.digit}
                onSelectLevel={selectLevel}
                {...level}
              />
            );
          })
        : resources.map((resource) => {
            const props = { ...resource, selectable: true };

            return (
              <Resource
                key={resource.name}
                onSelectResource={selectResource}
                onHover={hoverSelection}
                onStopHover={clearHoverSelection}
                {...props}
              />
            );
          });

    return items;
  }

  function renderRow(resourceGroup) {
    const row = [];

    resourceGroup.forEach((group) => {
      row.push(
        <div className="group" key={group.title}>
          <div className="title">{group.title}</div>
          <div className="resource-group">{renderResources(group)}</div>
        </div>
      );
    });

    return row;
  }

  function renderRows() {
    const rows = [];

    resourceGroups.forEach((group) => {
      rows.push(
        <div className="row" key={group.name}>
          {renderRow(group.resourceGroup)}
        </div>
      );
    });

    return rows;
  }

  return <div className="resource-select-container">{renderRows()}</div>;
}

export default ResourceSelect;
