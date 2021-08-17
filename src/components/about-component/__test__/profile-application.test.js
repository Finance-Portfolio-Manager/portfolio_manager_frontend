import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProfileComponent from './../profile-application';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = shallow(<ProfileComponent></ProfileComponent>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<ProfileComponent></ProfileComponent>).toJSON();
    expect(tree).toMatchSnapshot();
})

test("card body renders", ()=>{
    expect(wrapper.find("CardBody").length).toBe(1);
})

test("title renders", ()=>{
    expect(wrapper.find("p").first().text()).toContain("Meet Our Team");
})

test("3 team buttons render", ()=>{
    expect(wrapper.find("Button").length).toBe(3);
})

test("doesn't crash on button click", ()=>{
    const clickFn = jest.fn();
    const component = shallow(<ProfileComponent></ProfileComponent>);
    const firstButton = component.find("Button").first();
    console.log(firstButton.debug());
    expect(firstButton.simulate('click', {target: {id: "team1"}})).toBeTruthy();
})