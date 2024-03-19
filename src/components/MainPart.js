import React, { useState } from "react";
import PartList from "./PartList";
import SubPart from "./SubPart";

function MainPartList({ character, mainPart, selectItem, selectedMainPart }) {
  const subPartKeys = Object.keys(character[mainPart]);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div
      className="mainpart-container"
      style={{ display: mainPart === selectedMainPart ? "flex" : "none" }}
    >
      {subPartKeys.map((subPart, index) =>
        subPartKeys.length === 1 ? (
          <PartList
            partList={character[mainPart][subPart].list}
            partInfo={character[mainPart][subPart]}
            isSelectableItem={true}
            mainPart={mainPart}
            subPart={subPart}
            selectItem={selectItem}
          />
        ) : (
          <SubPart
            character={character}
            mainPart={mainPart}
            subPart={subPart}
            index={index}
            currentIndex={currentIndex}
            handleNext={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === subPartKeys.length - 1 ? 0 : prevIndex + 1
              )
            }
            handlePrev={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? subPartKeys.length - 1 : prevIndex - 1
              )
            }
            selectItem={selectItem}
          />
        )
      )}
    </div>
  );
}

export default MainPartList;
