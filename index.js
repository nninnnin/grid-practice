import classStyle from "./utils";

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

const styleText = `\
  ${classStyle("grid-container", [
    ["width", width],
    ["height", height],
    ["display", display],
    ["background-color", backgroundColor],
  ])}

  ${classStyle("grid-item", [
    ["width", "100px"],
    ["height", "100px"],
    ["border", "1px solid black"],
    ["background-color", "lightgray"],
    ["display", "flex"],
    ["justify-content", "center"],
    ["align-items", "center"],
  ])}
`;

controlPanel.innerText = styleText;
