import "../styles/ResourceSelect.css";
import {
  COMMON_RESOURCES,
  EXOTIC_RESOURCES,
  RARE_RESOURCES,
  UNCOMMON_RESOURCES,
  UNIQUE_RESOURCES,
} from "../utils/resources";
import Resource from "./Resource";
import { useState } from "react";

function ResourceSelect({ filter, setResourceFilter }) {
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
      ],
    },
  ];

  function addResource(name) {
    setResourceFilter([...filter, name]);
  }

  function removeResource(name) {
    const filterClone = [...filter];
    const resourceIndex = filterClone.indexOf(name);

    filterClone.splice(resourceIndex, 1);

    setResourceFilter(filterClone);
  }

  function selectResource(name) {
    return filter.includes(name) ? removeResource(name) : addResource(name);
  }

  function renderResources(resources) {
    const items = [];

    resources.forEach((resource) => {
      const props = { ...resource, selectable: true };

      items.push(
        <Resource
          key={resource.name}
          onSelectResource={selectResource}
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
          <div className="resource-group">
            {renderResources(group.resources)}
          </div>
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
