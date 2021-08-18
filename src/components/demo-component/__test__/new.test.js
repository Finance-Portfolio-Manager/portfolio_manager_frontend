import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import News from './../new';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = mount(<News></News>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<News></News>).toJSON();
    expect(tree).toMatchSnapshot();
})