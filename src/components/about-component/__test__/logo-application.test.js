import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LogoCard from './../logo-application';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = shallow(<LogoCard></LogoCard>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<LogoCard></LogoCard>).toJSON();
    expect(tree).toMatchSnapshot();
})

test("image renders", ()=>{
    expect(wrapper.find("CardImg").length).toBe(1);
})

test("Card text renders", ()=>{
    expect(wrapper.find("CardText").text()).toContain("Application Name");
})