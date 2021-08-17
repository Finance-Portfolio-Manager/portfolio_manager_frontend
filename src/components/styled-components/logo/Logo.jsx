import React, { useState, useEffect } from "react";
import { themeSelection, themeVersions } from "../styles/Themes";
import styled from "styled-components";

// const theme = themeSelection.map(function(e) { return e.themePack; });

export const Logo = () => {
  const [fillColor, setFillColor] = useState("#fff");
  const [theme, setTheme] = useState(themeSelection[0]);
  const updateColor = () => {
    let name = localStorage.getItem("theme") || "light";
    let themePack = themeSelection.find(element => element.version === name)
    console.log("theme>>>" + themePack)
    setTheme(themePack);
  };
  useEffect(() => {
    updateColor();
  }, [fillColor, updateColor]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.93 11.56">
      {/* {console.log(theme.themePack.accentColor)} */}
      <g fill={theme.themePack.accentColor} >
        <path d="M7.15,0A5.78,5.78,0,0,0,1.37,5.78a5.66,5.66,0,0,0,.51,2.36L0,10.2l.87.8L2.51,9.21A5.78,5.78,0,1,0,7.15,0Zm0,10.38A4.55,4.55,0,0,1,3.33,8.31l.49-.53L5,9.07l3.8-4.3,1.84,2,.87-.8L8.78,3,5,7.31,3.82,6l-1,1.14a4.7,4.7,0,0,1-.22-1.39,4.6,4.6,0,1,1,4.6,4.6Z" />
      </g>
    </svg>
  );
};
