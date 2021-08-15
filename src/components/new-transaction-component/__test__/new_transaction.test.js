import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewTransaction from './../new_transaction';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = mount(<NewTransaction></NewTransaction>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<NewTransaction></NewTransaction>).toJSON();
    expect(tree).toMatchSnapshot();
})

describe("testing each function in new_transaction", ()=>{
    test("handleChange function on first input box", ()=>{
        console.log(wrapper.debug());
        const stockSymbol = wrapper.find("Form.Control").first();
        let changeAction = () =>{
            stockSymbol.simulate('change', {target: {value: 'TSLA'}})
        }
        expect(changeAction()).not.toThrow();
    })

    test("createNewTransaction function", ()=>{

    })

    test("getNewTransaction function", ()=>{

    })

    test("buyConfirm function", ()=>{

    })
})