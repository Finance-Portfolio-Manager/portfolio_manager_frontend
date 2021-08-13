import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomeComponent from './../home-component';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const testUser = { "username": "Greg", "labels": ["BYSI", "BTBT", "MRNA", "ROKU", "MU"], "percentage": [20, 30, 50, 10, 10], "profile": "Profile 1" };
const wrapper = shallow(<HomeComponent user={ testUser }></HomeComponent>);

// test("test DoughnutData function", ()=>{
//     const doughnutData = require(HomeComponent.DoughnutData)
// })

describe("rendering home component", ()=>{
    test("matches snapshot", ()=>{
        console.log(wrapper.debug());
        const tree = renderer.create(<HomeComponent user={ testUser }></HomeComponent>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})