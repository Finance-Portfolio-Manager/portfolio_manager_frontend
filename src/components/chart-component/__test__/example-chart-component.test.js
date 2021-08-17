import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ExampleChartComponent from './../example-chart-component';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = shallow(<ExampleChartComponent></ExampleChartComponent>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<ExampleChartComponent></ExampleChartComponent>).toJSON();
    expect(tree).toMatchSnapshot();
})

test("renders ChartComponent", ()=>{
    expect(wrapper.find("ChartComponent")).toBeTruthy();
})