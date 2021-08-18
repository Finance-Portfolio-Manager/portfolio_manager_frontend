import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MainAlt from './../MainAlt';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

configure({ adapter: new Adapter() });
const wrapper = mount(<Router><MainAlt></MainAlt></Router>);

test("dummy test", ()=>{})

// test("matches snapshot", ()=>{
//     const tree = renderer.create(<Router><MainAlt></MainAlt></Router>).toJSON();
//     expect(tree).toMatchSnapshot();
// })

// test("click toggle button", ()=>{
//     // const Buttons = wrapper.find("button");
//     // console.log(Buttons)
//     const themeButton = wrapper.find("button").at(1);
//     const clickEvent = ()=>{
//         themeButton.simulate('click');
//     }
//     expect(clickEvent).not.toThrow();
// })