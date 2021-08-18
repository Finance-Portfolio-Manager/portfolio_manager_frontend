import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PrivatePortfolioDetails from './../private-portfolio-details';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

let stock1 = {stockName:"Amazon", stockQuantity:10, stockAveragePrice:3300, stockCurrentPrice:3400, stockChange:8};
let stock2 = {stockName:"Tesla", stockQuantity:15, stockAveragePrice:700, stockCurrentPrice:715, stockChange:2};
let stock3 = {stockName:"AMC", stockQuantity:20, stockAveragePrice:10, stockCurrentPrice:33, stockChange:230};
let stock4 = {stockName:"GME", stockQuantity:5, stockAveragePrice:40, stockCurrentPrice:180, stockChange:230};
let stock5 = {stockName:"LYFT", stockQuantity:7, stockAveragePrice:30, stockCurrentPrice:120, stockChange:230};
let stock6 = {stockName:"UBER", stockQuantity:15, stockAveragePrice:50, stockCurrentPrice:200, stockChange:230};
let stockList = [stock1, stock2, stock3, stock4, stock5, stock6];

let stockValues = stockList.map((stock) => stock.stockQuantity * stock.stockCurrentPrice);
let portfolioValue = stockValues.reduce((sum, currentStockValue) =>  sum + currentStockValue );

let portObj1 = {id: 1, name:"Portfolio 1", value:portfolioValue, stocks: stockList};
let portObj2 = {id: 2, name:"Portfolio 2", value:portfolioValue, stockList: stockList};
let portObj3 = {id: 3, name:"Portfolio 3", value:portfolioValue, stockList: stockList};
let portObj4 = {id: 4, name:"Portfolio 4", value:portfolioValue, stockList: stockList};
let portObj5 = {id: 5, name:"Portfolio 5", value:portfolioValue, stockList: stockList};
let portObj6 = {id: 6, name:"Portfolio 6", value:portfolioValue, stockList: stockList};

let portArray = [portObj1, portObj2, portObj3, portObj4, portObj5, portObj6];

const toggleFn = jest.fn(); 

configure({ adapter: new Adapter() });
const wrapper = shallow(<PrivatePortfolioDetails portfolio={portObj1} username="test_user" toggleShowDetails={toggleFn}></PrivatePortfolioDetails>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<PrivatePortfolioDetails portfolio={portObj1} username="test_user" toggleShowDetails={toggleFn}></PrivatePortfolioDetails>).toJSON();
    expect(tree).toMatchSnapshot();
})