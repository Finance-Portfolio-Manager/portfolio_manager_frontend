import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewPortfolio from './../create-portfolio';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = mount(<Router><NewPortfolio></NewPortfolio></Router>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<Router><NewPortfolio></NewPortfolio></Router>).toJSON();
    expect(tree).toMatchSnapshot();
})

test("simulate onChange for first input", ()=>{
    const input = wrapper.find("input").first();
    const changeAction = ()=>{
        input.simulate("change", {target: {value: true}});
    }
    expect(changeAction).not.toThrow();
})

test("simulate click for submit button", ()=>{
    const submitButton = wrapper.find("button");
    const clickAction = ()=>{
        submitButton.simulate('click');
    }
    expect(clickAction).not.toThrow();
})