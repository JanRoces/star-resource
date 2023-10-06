import "../styles/Table.css";

function formatName(str) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function Table() {
  const headerConfig = [
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
      flex: "2",
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

  return <div className="table-container">{renderHeader()}</div>;
}

export default Table;
