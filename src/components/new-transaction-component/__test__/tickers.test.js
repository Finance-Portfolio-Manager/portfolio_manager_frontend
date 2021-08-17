import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import getTickers from './../tickers';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = shallow(<getTickers></getTickers>);

const tickersList = getTickers();
console.log(tickersList.length);

test("matches snapshot", ()=>{
    expect(tickersList).toMatchSnapshot();
})

test("renders 1000 tickers", ()=>{
    expect(tickersList.length).toBe(6974);
})
