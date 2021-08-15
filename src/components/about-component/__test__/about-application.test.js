import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AboutCard from './../about-application';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = shallow(<AboutCard></AboutCard>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<AboutCard></AboutCard>).toJSON();
    expect(tree).toMatchSnapshot();
})

test("renders title", ()=>{
    expect(wrapper.find("CardTitle").text()).toContain("About");
})

test("renders body/text", ()=>{
    expect(wrapper.find("CardText").length).toBe(1);
})