import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PortfolioChartComponent from './../portfolio-component';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = shallow(<PortfolioChartComponent></PortfolioChartComponent>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<PortfolioChartComponent></PortfolioChartComponent>).toJSON();
    expect(tree).toMatchSnapshot();
})