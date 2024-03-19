import React from "react";

function PartList({
  partList,
  partInfo,
  selectItem,
  isSelectableItem,
  mainPart,
  subPart,
}) {
  return (
    <div className={`subpart-list ${subPart.toLowerCase()}`}>
      {partList.map((image) =>
        isSelectableItem ? (
          <img
            className={image === partInfo.selectedItem ? "option-clicked" : ""}
            src={image}
            alt=""
            onClick={() => selectItem(image, mainPart, subPart)}
          ></img>
        ) : (
          <img
            src={image}
            alt=""
            style={{
              display:
                image === partInfo.selectedItem ? "inline-block" : "none",
            }}
          ></img>
        )
      )}
    </div>
  );
}

export default PartList;
