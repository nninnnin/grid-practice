const container = document.querySelector(
  ".grid-container"
);
const containerStyles =
  window.getComputedStyle(container);
console.log(containerStyles);

const controlPanel = document.querySelector(
  ".control-panel"
);

const {
  width,
  height,
  display,
  backgroundColor,
} = containerStyles;

const styleProp = (name, value) => {
  return `\u00A0\u00A0${name}: ${value}`;
};

const styleText = `\
  .grid-container {
    ${styleProp("width", width)};
    ${styleProp("height", height)};
    ${styleProp("display", display)};
    ${styleProp(
      "backgroundColor",
      backgroundColor
    )};
  }\
`;

controlPanel.innerText = styleText;
