import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const bodyImages = require.context("./assets/character/body", true);
const bodyImageList = bodyImages.keys().map((image) => bodyImages(image));
const innerLayerImages = require.context(
  "./assets/character/clothes/layer_1",
  true
);
const innerLayerImageList = innerLayerImages
  .keys()
  .map((image) => innerLayerImages(image));
const middleLayerImages = require.context(
  "./assets/character/clothes/layer_2",
  true
);
const middleLayerImageList = middleLayerImages
  .keys()
  .map((image) => middleLayerImages(image));
const outerLayerImages = require.context(
  "./assets/character/clothes/layer_3",
  true
);
const outerLayerImageList = outerLayerImages
  .keys()
  .map((image) => outerLayerImages(image));
const earringsImages = require.context(
  "./assets/character/accessories/earrings",
  true
);
const earringsImageList = earringsImages
  .keys()
  .map((image) => earringsImages(image));
const glassesImages = require.context(
  "./assets/character/accessories/glasses",
  true
);
const glassesImageList = glassesImages
  .keys()
  .map((image) => glassesImages(image));
const hatsImages = require.context("./assets/character/accessories/hats", true);
const hatsImageList = hatsImages.keys().map((image) => hatsImages(image));
const neckwearImages = require.context(
  "./assets/character/accessories/neckwear",
  true
);
const neckwearImageList = neckwearImages
  .keys()
  .map((image) => neckwearImages(image));
const eyebrowsImages = require.context("./assets/character/eyebrows", true);
const eyebrowsImageList = eyebrowsImages
  .keys()
  .map((image) => eyebrowsImages(image));
const eyesImages = require.context("./assets/character/eyes", true);
const eyesImageList = eyesImages.keys().map((image) => eyesImages(image));
const facialHairImages = require.context(
  "./assets/character/facial_hair",
  true
);
const facialHairImageList = facialHairImages
  .keys()
  .map((image) => facialHairImages(image));
const hairImages = require.context("./assets/character/hair", true);
const hairImageList = hairImages.keys().map((image) => hairImages(image));
const mouthsImages = require.context("./assets/character/mouths", true);
const mouthsImageList = mouthsImages.keys().map((image) => mouthsImages(image));
const nosesImages = require.context("./assets/character/noses", true);
const nosesImageList = nosesImages.keys().map((image) => nosesImages(image));

const CHARACTER_MAP = {
  Face: {
    Eyebrows: { list: eyebrowsImageList, selectedItem: eyebrowsImageList[0] },
    Eyes: { list: eyesImageList, selectedItem: eyesImageList[0] },
    "Facial Hair": {
      list: facialHairImageList,
      selectedItem: facialHairImageList[0],
    },
    Hair: { list: hairImageList, selectedItem: hairImageList[0] },
    Mouths: { list: mouthsImageList, selectedItem: mouthsImageList[0] },
  },
  Clothes: {
    "Inner Layer": {
      list: innerLayerImageList,
      selectedItem: innerLayerImageList[0],
    },
    "Middle Layer": {
      list: middleLayerImageList,
      selectedItem: middleLayerImageList[0],
    },
    "Outer Layer": {
      list: outerLayerImageList,
      selectedItem: outerLayerImageList[0],
    },
  },
  Accessories: {
    Earrings: { list: earringsImageList, selectedItem: earringsImageList[0] },
    Glasses: { list: glassesImageList, selectedItem: glassesImageList[0] },
    Hats: { list: hatsImageList, selectedItem: hatsImageList[0] },
    Neckwear: { list: neckwearImageList, selectedItem: neckwearImageList[0] },
  },
  Body: { Body: { list: bodyImageList, selectedItem: bodyImageList[0] } },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App characterMap={CHARACTER_MAP} nose={nosesImageList} />
  </React.StrictMode>
);
