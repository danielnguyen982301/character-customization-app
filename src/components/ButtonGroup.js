import React from "react";

function ButtonGroup({ character, selectMainPart, selectedMainPart }) {
  const mainPartKeys = Object.keys(character);
  return (
    <div className="btn-group">
      {mainPartKeys.map((part) => (
        <button
          className={selectedMainPart === part ? "btn-clicked" : ""}
          onClick={() => selectMainPart(part)}
        >
          {part}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;
