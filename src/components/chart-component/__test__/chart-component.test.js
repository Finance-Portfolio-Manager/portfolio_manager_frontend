import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChartComponent from './../chart-component';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = shallow(<ChartComponent></ChartComponent>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<ChartComponent></ChartComponent>).toJSON();
    expect(tree).toMatchSnapshot();
})

// test("useEffect hook", ()=>{
//     const mockResponseData = [{id: 1}, {id: 2}, {id: 3}];
//     const responseData = mockResponseData.map(e => ({...e}));
//     jest.clearAllMocks();
//     global.fetch = jest.fn(async () => ({
//       json: async () => mockResponseData
//     }));
//     const component = mount(<ChartComponent symbol="TSLA"></ChartComponent>);
// })