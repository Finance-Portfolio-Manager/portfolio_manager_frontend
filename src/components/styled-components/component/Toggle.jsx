import React, { useEffect, useState } from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import "./Toggle.css";
// const Button = styled.button`
//   background: ${({ theme }) => theme.background};
//   border: 2px solid ${({ theme }) => theme.toggleBorder};
//   color: ${({ theme }) => theme.text};
//   border-radius: 30px;
//   cursor: pointer;
//   font-size:0.8rem;
//   padding: 0.6rem;
//   }
// `
const Input = styled.input`
  background-color: ${({ theme }) => theme.primaryColor};
`;
const ToggleContainer = styled.div`
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}


`

const Toggle = ({ theme, toggleTheme }) => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    console.log(localTheme);
    localTheme === "light" ? setCheck(false) : setCheck(true);
  }, []);



  return (
    <ToggleContainer className="float">
      <label className="switch" onChange={toggleTheme}>
        <input className='toggleSwitch' type="checkbox"  defaultChecked={check} />
        <span className="slider round"></span>
      </label>
    </ToggleContainer>
  );
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;

