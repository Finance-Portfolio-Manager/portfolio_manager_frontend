import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PublicPortfolioDetails from './../public-portfolio-details';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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

const toggleFn = jest.fn(); 

configure({ adapter: new Adapter() });
const wrapper = shallow(<PublicPortfolioDetails portfolio={portObj1} username="test_user" toggleShowDetails={toggleFn}></PublicPortfolioDetails>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<PublicPortfolioDetails portfolio={portObj1} username="test_user" toggleShowDetails={toggleFn}></PublicPortfolioDetails>).toJSON();
    expect(tree).toMatchSnapshot();
})