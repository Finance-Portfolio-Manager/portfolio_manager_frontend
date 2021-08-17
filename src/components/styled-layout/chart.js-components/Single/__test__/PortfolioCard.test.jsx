import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PortfolioCard from './../PortfolioCard';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = shallow(<PortfolioCard></PortfolioCard>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<PortfolioCard></PortfolioCard>).toJSON();
    expect(tree).toMatchSnapshot();
})

test("header renders", ()=>{
    expect(wrapper.find("h1").text()).toContain("@Username");
})