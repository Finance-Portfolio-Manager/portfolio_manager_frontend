import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GenericChart from './../generic-chart';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = shallow(<GenericChart></GenericChart>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<GenericChart></GenericChart>).toJSON();
    expect(tree).toMatchSnapshot();
})

// MAYBE come back to this to render dummy chart with props
// const wrapper = mount(<GenericChart></GenericChart>);