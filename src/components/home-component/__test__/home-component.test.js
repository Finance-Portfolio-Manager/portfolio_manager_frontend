import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomeComponent from './../home-component';
import DoughnutData from './../home-component';
import RenderCard from './../home-component';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const testUsers = [{ "username": "Greg", "labels": ["BYSI", "BTBT", "MRNA", "ROKU", "MU"], "percentage": [20, 30, 50, 10, 10], "profile": "Profile 1" },
{ "username": "David", "labels": ["BYSI", "AAPL", "F", "GM", "LUMN"], "percentage": [20, 10, 50, 20, 15], "profile": "Profile 1" },
{ "username": "Quinton", "labels": ["TSLA", "SHOP", "MRNA", "UBER", "BNGO"], "percentage": [10, 10, 50, 10, 20], "profile": "Profile 1" },]
const wrapper = shallow(<HomeComponent users={ testUsers }></HomeComponent>);

// test("test DoughnutData function", ()=>{
//     const doughnutData = require(HomeComponent.DoughnutData)
// })

describe("rendering home component", ()=>{
    test("matches snapshot", ()=>{
        // console.log(wrapper.debug());
        const tree = renderer.create(<HomeComponent users={ testUsers }></HomeComponent>).toJSON();
        expect(tree).toMatchSnapshot();
    })

    test("renders Your Favorite Portfolios title", ()=>{
        expect(wrapper.find("div.h2").text()).toContain("Your Favorite Portfolios");
    })
})