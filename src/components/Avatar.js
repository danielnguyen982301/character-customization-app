import React from "react";
import SubPartList from "./PartList";

function Avatar({ character, nose, randomize }) {
  const mainPartKeys = Object.keys(character);
  return (
    <div className="avatar-container">
      <div className="avatar">
        <div className="subpart-list nose">
          <img src={nose[0]} alt="" />
        </div>
        {mainPartKeys.map((mainPart) => {
          const subPartKeys = Object.keys(character[mainPart]);
          return subPartKeys.map((subPart, index) => (
            <SubPartList
              key={index}
              isSelectableItem={false}
              partInfo={character[mainPart][subPart]}
              subPart={subPart}
              partList={character[mainPart][subPart].list}
            />
          ));
        })}
      </div>
      <div className="random-btn">
        <button onClick={randomize}>Randomize</button>
      </div>
    </div>
  );
}

export default Avatar;
