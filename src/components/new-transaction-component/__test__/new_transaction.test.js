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
        const stockSymbol = wrapper.find("FormControl").first();
        let changeAction = () =>{
            stockSymbol.simulate('change', {target: {value: 'TSLA'}});
        }
        expect(changeAction).not.toThrow();
    })

    test("createNewTransaction function", ()=>{
        const addTransaction = wrapper.find("Button").at(2);
        expect(addTransaction.text()).toContain("Add New Transaction");

        let clickAction = () =>{
            addTransaction.simulate('click');
        }
        expect(clickAction).not.toThrow();
    })

    test("getNewTransaction function", ()=>{
        const getTransaction = wrapper.find("Button").last();
        let clickAction = () =>{
            getTransaction.simulate('click');
        }
        expect(clickAction).not.toThrow();
    })

    test("buyConfirm function for buy button", ()=>{
        const buyButton = wrapper.find("Button").first();
        let clickAction = () =>{
            buyButton.simulate('click');
        }
        expect(clickAction).not.toThrow();
    })

    test("buyConfirm function for sell button", ()=>{
        const sellButton = wrapper.find("Button").at(1);
        expect(sellButton.text()).toContain("Sell")
        let clickAction = () =>{
            sellButton.simulate('click');
        }
        expect(clickAction).not.toThrow();
    })
})