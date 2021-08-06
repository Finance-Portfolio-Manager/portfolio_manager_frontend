import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './../register-form';

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<RegisterForm></RegisterForm>, div)
})