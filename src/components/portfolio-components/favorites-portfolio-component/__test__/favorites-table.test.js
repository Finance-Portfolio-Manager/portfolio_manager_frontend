import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FavoritesTable from './../favorites-table';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const tableRows = [{symbol: "TSLA", currentPrice: 5}, {symbol: "GME", currentPrice: 100}]

const toggleFn = jest.fn();

configure({ adapter: new Adapter() });
const wrapper = shallow(<FavoritesTable tableRows={tableRows} toggleShowDetails={toggleFn}></FavoritesTable>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<FavoritesTable tableRows={tableRows} toggleShowDetails={toggleFn}></FavoritesTable>).toJSON();
    expect(tree).toMatchSnapshot();
})