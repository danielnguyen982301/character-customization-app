import React, { useState } from "react";
import PartList from "./PartList";

function SubPart({
  subPart,
  character,
  mainPart,
  selectItem,
  index,
  currentIndex,
  handleNext,
  handlePrev,
}) {
  const currentList = character[mainPart][subPart].list;
  const [page, setPage] = useState(1);

  const chunk = (arr) => {
    const chunkedList = [];
    for (let i = 0; i < arr.length; i += 20) {
      chunkedList.push(arr.slice(i, i + 20));
    }
    return chunkedList;
  };

  const chunkedList = chunk(currentList);

  return (
    <div
      style={{ display: index === currentIndex ? "block" : "none" }}
      className="subpart-container"
    >
      <div className="subpart">
        <button className="prev" onClick={handlePrev}>
          {"<"}
        </button>
        <span className="subpart-name">{subPart}</span>
        <button className="next" onClick={handleNext}>
          {">"}
        </button>
      </div>
      {character[mainPart][subPart].list.length > 20 ? (
        <>
          <div className="page-btn">
            <button
              className="prev"
              onClick={() =>
                setPage((prevPage) => (prevPage === 1 ? 1 : prevPage - 1))
              }
            >
              {"<"}
            </button>
            <span>
              Page: <strong>{page}</strong>
            </span>
            <button
              className="next"
              onClick={() =>
                setPage((prevPage) =>
                  prevPage === chunkedList.length ? prevPage : prevPage + 1
                )
              }
            >
              {">"}
            </button>
          </div>
          <PartList
            partInfo={character[mainPart][subPart]}
            partList={chunkedList[page - 1]}
            isSelectableItem={true}
            mainPart={mainPart}
            subPart={subPart}
            selectItem={selectItem}
          />
        </>
      ) : (
        <PartList
          partList={character[mainPart][subPart].list}
          partInfo={character[mainPart][subPart]}
          isSelectableItem={true}
          mainPart={mainPart}
          subPart={subPart}
          selectItem={selectItem}
        />
      )}
    </div>
  );
}

export default SubPart;
