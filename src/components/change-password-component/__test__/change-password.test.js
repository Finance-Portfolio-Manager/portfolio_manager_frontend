import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChangePassword from './../change-password';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = mount(<Router><ChangePassword></ChangePassword></Router>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<Router><ChangePassword></ChangePassword></Router>).toJSON();
    expect(tree).toMatchSnapshot();
})

describe("Testing change password functionality", ()=>{
    test("handleEmailChange function", ()=>{
        const emailInput = wrapper.find("input").first();
        const changeAction = ()=>{
            emailInput.simulate('change', {target: {value: 'email'}})
        }
        expect(changeAction).not.toThrow();
    })

    test("handleOtherChange function", ()=>{
        const passwordInput = wrapper.find("input").at(2);
        const changeAction = ()=>{
            passwordInput.simulate('change', {target: {value: 'pass'}});
        }
        expect(changeAction).not.toThrow();
    })

    test("handleGetCode function", ()=>{
        const codeButton = wrapper.find("button").first();
        const clickAction = ()=>{
            codeButton.simulate('click');
        }
        expect(clickAction).not.toThrow();
    })
    
    test("handleSubmit function", ()=>{
        const submitButton = wrapper.find("button").last();
        const clickAction = ()=>{
            submitButton.simulate('click');
        }
        expect(clickAction).not.toThrow();
    })

    test("submit with valid inputs", ()=>{
        const emailInput = wrapper.find("input").first();
        const codeInput = wrapper.find("input").at(1);
        const passInput = wrapper.find("input").at(2);
        const confPassInput = wrapper.find("input").last();
        const codeButton = wrapper.find("button").first();
        const submitButton = wrapper.find("button").last();
        const submitValues = ()=>{
            emailInput.simulate('change', {target: {value: 'trgreenman88@gmail.com'}});
            // codeButton.simulate('click');
            codeInput.simulate('change', {target: {name: 'code', value: '123456'}});
            passInput.simulate('change', {target: {name: 'password', value: 'Password123!'}});
            confPassInput.simulate('change', {target: {name: 'confirmPassword', value: 'Password123!'}});
            submitButton.simulate('click');
        }
        expect(submitValues).not.toThrow();
    })

    test("submit with short password", ()=>{
        const emailInput = wrapper.find("input").first();
        const codeInput = wrapper.find("input").at(1);
        const passInput = wrapper.find("input").at(2);
        const confPassInput = wrapper.find("input").last();
        const codeButton = wrapper.find("button").first();
        const submitButton = wrapper.find("button").last();
        const submitValues = ()=>{
            emailInput.simulate('change', {target: {value: 'trgreenman88@gmail.com'}});
            // codeButton.simulate('click');
            codeInput.simulate('change', {target: {name: 'code', value: '123456'}});
            passInput.simulate('change', {target: {name: 'password', value: 'Pass'}});
            confPassInput.simulate('change', {target: {name: 'confirmPassword', value: 'Pass'}});
            submitButton.simulate('click');
        }
        expect(submitValues).not.toThrow();
    })

    test("submit with mismatched password and confirmPassword", ()=>{
        const emailInput = wrapper.find("input").first();
        const codeInput = wrapper.find("input").at(1);
        const passInput = wrapper.find("input").at(2);
        const confPassInput = wrapper.find("input").last();
        const codeButton = wrapper.find("button").first();
        const submitButton = wrapper.find("button").last();
        const submitValues = ()=>{
            emailInput.simulate('change', {target: {value: 'trgreenman88@gmail.com'}});
            // codeButton.simulate('click');
            codeInput.simulate('change', {target: {name: 'code', value: '123456'}});
            passInput.simulate('change', {target: {name: 'password', value: 'Password123!'}});
            confPassInput.simulate('change', {target: {name: 'confirmPassword', value: 'Password123!!!'}});
            submitButton.simulate('click');
        }
        expect(submitValues).not.toThrow();
    })
})