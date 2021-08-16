import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ToggleButton from './../ToggleButton';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

configure({ adapter: new Adapter() });
const wrapper = mount(<ToggleButton></ToggleButton>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<ToggleButton></ToggleButton>).toJSON();
    expect(tree).toMatchSnapshot();
})

test("click toggle button", ()=>{
    //setting local storage theme
    const getItemSpy = jest.spyOn(window.localStorage, 'getItem');
    window.localStorage.setItem('theme', 'random');

    const clickFn = jest.fn();
    const component = mount(<ToggleButton theme="theme1" toggleTheme={ clickFn } label="theme"></ToggleButton>)
    const themeButton = component.find("button");
    const clickEvent = ()=>{
        themeButton.simulate('click');
    }
    expect(clickEvent).not.toThrow();
})