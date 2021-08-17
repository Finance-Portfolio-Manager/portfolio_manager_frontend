import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AccountView from './../account-view-component';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let portObj1 = {id: 1, name:"Portfolio 1", value:1000};
let portObj2 = {id: 2, name:"Portfolio 2", value:145641};
let portObj3 = {id: 3, name:"Portfolio 3", value:1840};
let portfolioArray = [portObj1, portObj2, portObj3];

const wrapper = shallow(<AccountView portfolioArray={ portfolioArray }></AccountView>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<AccountView portfolioArray={ portfolioArray }></AccountView>).toJSON();
    expect(tree).toMatchSnapshot();
})

test("username header renders", ()=>{
    expect(wrapper.find("h2").text()).toContain("Username");
})