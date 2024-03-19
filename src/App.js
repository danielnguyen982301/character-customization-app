import React, { useState } from "react";
import ButtonGroup from "./components/ButtonGroup";
import OptionContainer from "./components/OptionContainer";
import "./App.css";
import Avatar from "./components/Avatar";

function App({ characterMap, nose }) {
  const [selectedMainPart, setSelectedMainPart] = useState("Body");
  const [character, setCharacter] = useState(characterMap);

  const selectItem = (image, mainPartName, subPartName) => {
    const subPart = {
      ...character[mainPartName][subPartName],
      selectedItem: image,
    };
    const mainPart = { ...character[mainPartName], [subPartName]: subPart };
    const newChar = { ...character, [mainPartName]: mainPart };
    setCharacter(newChar);
  };

  const randomize = () => {
    const newChar = JSON.parse(JSON.stringify(character));
    for (let [mainPart] of Object.entries(newChar)) {
      for (let [, value] of Object.entries(newChar[mainPart])) {
        value.selectedItem =
          value.list[Math.floor(Math.random() * (value.list.length - 1))];
      }
    }
    setCharacter(newChar);
  };

  return (
    <div className="app-container">
      <ButtonGroup
        character={character}
        selectMainPart={(part) => setSelectedMainPart(part)}
        selectedMainPart={selectedMainPart}
      />
      <OptionContainer
        character={character}
        selectedMainPart={selectedMainPart}
        selectItem={selectItem}
      />
      <Avatar character={character} nose={nose} randomize={randomize} />
    </div>
  );
}

export default App;
