import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IndividualComponent from './../individual-profile';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = shallow(<IndividualComponent buttonNameValue="team3"></IndividualComponent>);

test("matches snapshot team1", ()=>{
    const tree1 = renderer.create(<IndividualComponent buttonNameValue="team1"></IndividualComponent>).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(<IndividualComponent buttonNameValue="team2"></IndividualComponent>).toJSON();
    expect(tree2).toMatchSnapshot();

    const tree3 = renderer.create(<IndividualComponent buttonNameValue="team3"></IndividualComponent>).toJSON();
    expect(tree3).toMatchSnapshot();
})

test("image renders for each team member", ()=>{
    expect(wrapper.find("img.images").length).toBe(5);
})

test("all names render", ()=>{
    expect(wrapper.find("p").length).toBe(6);
})