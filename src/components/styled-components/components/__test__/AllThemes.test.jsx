import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import useAllThemes from './../AllThemes';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

configure({ adapter: new Adapter() });
const wrapper = shallow(<useAllThemes></useAllThemes>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<useAllThemes></useAllThemes>).toJSON();
    expect(tree).toMatchSnapshot();
})