/*
Carlos Galvan Jr 

returns the theme object based on the name of a theme (found in localStorage)
*/
import { lightTheme, themeSelection } from "../styles/Themes";

export const themeMode = (theme) => {
  //index should be a positive int if found or negative if error occurs
  let index = themeSelection
    .map(function (e) {
      return e.version;
    })
    .indexOf(theme);

  return index > 0 ? themeSelection[index].themePack : lightTheme; //light theme is the failsafe
};
