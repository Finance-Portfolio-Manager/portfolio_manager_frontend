import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PrivatePortfolio from './../private-portfolio';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const wrapper = shallow(<PrivatePortfolio></PrivatePortfolio>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<PrivatePortfolio></PrivatePortfolio>).toJSON();
    expect(tree).toMatchSnapshot();
})