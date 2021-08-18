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

let stock1 = {symbol:"Amazon", quantity:10, stockAveragePrice:3300, currentPrice:3400, stockChange:8};
let stock2 = {symbol:"Tesla", quantity:15, stockAveragePrice:700, currentPrice:715, stockChange:2};
let stock3 = {symbol:"AMC", quantity:20, stockAveragePrice:10, currentPrice:33, stockChange:230};
let stock4 = {symbol:"GME", quantity:5, stockAveragePrice:40, currentPrice:180, stockChange:230};
let stock5 = {symbol:"LYFT", quantity:7, stockAveragePrice:30, currentPrice:120, stockChange:230};
let stock6 = {symbol:"UBER", quantity:15, stockAveragePrice:50, currentPrice:200, stockChange:230};
let stockList = [stock1, stock2, stock3, stock4, stock5, stock6];

let stockValues = stockList.map((stock) => stock.quantity * stock.currentPrice);
let portfolioValue = stockValues.reduce((sum, currentStockValue) =>  sum + currentStockValue );

let portObj1 = {id: 1, name:"Portfolio 1", value:portfolioValue, stocks: stockList};
let portObj2 = {id: 2, name:"Portfolio 2", value:portfolioValue, stocks: stockList};
let portObj3 = {id: 3, name:"Portfolio 3", value:portfolioValue, stocks: stockList};
let portObj4 = {id: 4, name:"Portfolio 4", value:portfolioValue, stocks: stockList};
let portObj5 = {id: 5, name:"Portfolio 5", value:portfolioValue, stocks: stockList};
let portObj6 = {id: 6, name:"Portfolio 6", value:portfolioValue, stocks: stockList};

let portArray = [portObj1, portObj2, portObj3, portObj4, portObj5, portObj6];

let user = { username: "test_user", name: "Trent", email: "trgreenman88@gmail.com" }

const wrapper = shallow(<AccountView portfolioArray={ portArray } user={ user }></AccountView>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<AccountView portfolioArray={ portArray } user={ user }></AccountView>).toJSON();
    expect(tree).toMatchSnapshot();
})

test("Your Portfolios header renders", ()=>{
    expect(wrapper.find("h2").text()).toContain("Your Portfolios");
})