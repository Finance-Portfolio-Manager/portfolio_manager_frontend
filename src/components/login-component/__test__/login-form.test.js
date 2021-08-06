import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './../login-form';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

// import renderer from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<LoginForm></LoginForm>, div)
})

it("renders login correctly", ()=>{
    const div = document.createElement("div");
    const { getByTestId } = render(<LoginForm></LoginForm>, div);
    expect(getByTestId("login-form")).toHaveTextContent("Portfolio ManagerUsername:Password:Login");
})

it("matches snapshot", ()=>{
    const tree = renderer.create(<LoginForm></LoginForm>).toJSON();
    expect(tree).toMatchSnapshot();
})