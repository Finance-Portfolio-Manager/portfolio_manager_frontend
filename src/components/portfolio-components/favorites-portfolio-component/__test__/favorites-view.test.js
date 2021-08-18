import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FavoritesView from './../favorites-view';

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

let username = "trent1234"

let portObj1 = {id: 1, name:"Portfolio 1", value:portfolioValue, stocks: stockList};

configure({ adapter: new Adapter() });
const wrapper = shallow(<FavoritesView username={username} portfolio={portObj1}></FavoritesView>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<FavoritesView username={username} portfolio={portObj1}></FavoritesView>).toJSON();
    expect(tree).toMatchSnapshot();
})

test("toggleShowDetails function", ()=>{
    const component = renderer.create(<FavoritesView username={username} portfolio={portObj1}></FavoritesView>);
    const clickThing = component.root.findByType("canvas")
    const clickAction = ()=>{
        clickThing.props.onClick();
    }
    expect(clickAction).not.toThrow();
})