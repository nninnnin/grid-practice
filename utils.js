const styleProp = (name, value) => {
  return `\u00A0\u00A0${name}: ${value}`;
};

export const classStyle = (className, props) => {
  return `\
  .${className} {
    ${props
      .map(([name, value]) =>
        styleProp(name, value)
      )
      .join(";\n")}
  }\
`;
};
