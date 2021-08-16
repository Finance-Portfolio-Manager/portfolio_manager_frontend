/*
Carlos Galvan Jr 

ToggleButton takes in the theme object and the toggleTheme function to change theme 
*/
import React, {  useState } from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const ThemeButton = styled.button`
  background: ${({ theme }) => theme.primaryColor};
  /* border: 2px solid ${({ theme }) => theme.secondayColor}; */
  color: ${({ theme }) => theme.primaryText} !important;
  padding: 0.6rem;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  font-size:0.8rem;
  margin: 4px 2px;
  border-radius: 3px;
`; 

const ToggleButton = ({ theme, toggleTheme }) => {
  // const [label, setLabel] = useState(window.localStorage.getItem("theme"));
  const [label, setLabel] = useState("Change Theme");
  
  const updateLabel = () => {
    toggleTheme();
    setLabel(window.localStorage.getItem("theme"));
  };

  return (
    <ThemeButton onClick={updateLabel} className="float global__blur-effect global__dropshadow">
      {label.toUpperCase()}
      {/* Change Theme */}
    </ThemeButton>
  );
};

ToggleButton.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default ToggleButton;
