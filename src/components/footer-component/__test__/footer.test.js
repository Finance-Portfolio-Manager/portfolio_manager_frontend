import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../footer';

configure({ adapter: new Adapter() });

describe("footer rendering", ()=>{
    const wrapper = shallow(<Footer></Footer>);
    afterEach(cleanup);

    test("renders without crashing", ()=>{
        const div = document.createElement("div");
        ReactDOM.render(<Footer></Footer>, div);
    })

    test("renders Service", ()=>{
        expect(wrapper.find("span").first().text()).toContain("Service");
    })

    test("renders Portfolio", ()=>{
        expect(wrapper.find("span").at(1).text()).toContain("Portfolio");
    })

    test("renders About Stock History", ()=>{
        expect(wrapper.find("span").at(2).text()).toContain("About Stock History");
    })

    test("renders Support", ()=>{
        expect(wrapper.find("span").at(3).text()).toContain("Support");
    })

    test("renders Portfolio", ()=>{
        expect(wrapper.find("span").at(1).text()).toContain("Portfolio");
    })

    test("matches snapshot", ()=>{
        const tree = renderer.create(<Footer></Footer>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})
