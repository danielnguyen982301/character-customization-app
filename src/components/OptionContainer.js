import React from "react";
import MainPart from "./MainPart";

function OptionContainer({ character, selectedMainPart, selectItem }) {
  const mainPartKeys = Object.keys(character);
  return (
    <div className="option-container">
      {mainPartKeys.map((mainPart) => (
        <MainPart
          mainPart={mainPart}
          character={character}
          selectItem={selectItem}
          selectedMainPart={selectedMainPart}
        />
      ))}
    </div>
  );
}

export default OptionContainer;
