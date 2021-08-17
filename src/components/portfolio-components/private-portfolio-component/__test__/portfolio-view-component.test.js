import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PortfolioView from './../portfolio-view-component';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let stock1 = {stockName:"Amazon", stockQuantity:10, stockAveragePrice:3300, stockCurrentPrice:3400, stockChange:8};
let stock2 = {stockName:"Tesla", stockQuantity:15, stockAveragePrice:700, stockCurrentPrice:715, stockChange:2};
let stock3 = {stockName:"AMC", stockQuantity:20, stockAveragePrice:10, stockCurrentPrice:33, stockChange:230};
let stockList = [stock1, stock2, stock3];

const wrapper = shallow(<PortfolioView tableRows={ stockList }></PortfolioView>);

describe("portfolio view rendering", ()=>{
    test("matches snapshot", ()=>{
        expect(wrapper).toMatchSnapshot();
    })

    test("heading renders", ()=>{
        // console.log(wrapper.debug());
        expect(wrapper.find('h4').length).toBe(1);
    })

    test("table rows render", ()=>{
        expect(wrapper.find("tr").length).toBe(4);
    })
})
