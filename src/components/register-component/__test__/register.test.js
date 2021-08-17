import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Register from './../register';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = mount(<Register></Register>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<Register></Register>);
    expect(tree).toMatchSnapshot();
})

describe("testing each function in register for email input", ()=>{
    afterEach(cleanup);

    test("handleChange function", ()=>{
        const emailInput = wrapper.find("FormControl").first();
        const changeEvent = ()=>{
            emailInput.simulate('change', {target: {value: 'trgreenman88@gmail.com'}});
        }
        expect(changeEvent).not.toThrow();
    })

    test("click Register submit button", ()=>{
        const submitButton = wrapper.find("button");
        expect(submitButton.text()).toContain("Register");
        const clickEvent = ()=>{
            submitButton.simulate('click');
        }
        expect(clickEvent).not.toThrow();
    })

    test("enter all valid fields then click submit", ()=>{
        const submitButton = wrapper.find("button");
        const emailInput = wrapper.find("FormControl").first();
        const usernameInput = wrapper.find("FormControl").at(1);
        const passwordInput = wrapper.find("FormControl").at(2);
        const passConfInput = wrapper.find("FormControl").last();
        const submitAllFields = ()=>{
            emailInput.simulate('change', {target: {value: 'trgreenman88@gmail.com', name: 'email'}});
            usernameInput.simulate('change', {target: {value: 'trgreenman88', name: 'username'}});
            passwordInput.simulate('change', {target: {value: 'Password123!', name: 'password'}});
            passConfInput.simulate('change', {target: {value: 'Password123!', name: 'confirmPassword'}});
            submitButton.simulate('click');
        }
        expect(submitAllFields).not.toThrow();
    })

    test("enter invalid email then click submit", ()=>{
        const submitButton = wrapper.find("button");
        const emailInput = wrapper.find("FormControl").first();
        const usernameInput = wrapper.find("FormControl").at(1);
        const passwordInput = wrapper.find("FormControl").at(2);
        const passConfInput = wrapper.find("FormControl").last();
        const submitAllFields = ()=>{
            emailInput.simulate('change', {target: {value: 'asdfadsf', name: 'email'}});
            usernameInput.simulate('change', {target: {value: 'trgreenman88', name: 'username'}});
            passwordInput.simulate('change', {target: {value: 'Password123!', name: 'password'}});
            passConfInput.simulate('change', {target: {value: 'Password123!', name: 'confirmPassword'}});
            submitButton.simulate('click');
        }
        expect(submitAllFields).not.toThrow();
    })

    test("enter short password (<8) then click submit", ()=>{
        const submitButton = wrapper.find("button");
        const emailInput = wrapper.find("FormControl").first();
        const usernameInput = wrapper.find("FormControl").at(1);
        const passwordInput = wrapper.find("FormControl").at(2);
        const passConfInput = wrapper.find("FormControl").last();
        const submitAllFields = ()=>{
            emailInput.simulate('change', {target: {value: 'trgreenman88@gmail.com', name: 'email'}});
            usernameInput.simulate('change', {target: {value: 'trgreenman88', name: 'username'}});
            passwordInput.simulate('change', {target: {value: 'short', name: 'password'}});
            passConfInput.simulate('change', {target: {value: 'short', name: 'confirmPassword'}});
            submitButton.simulate('click');
        }
        expect(submitAllFields).not.toThrow();
    })

    test("enter password with no special character then click submit", ()=>{
        const submitButton = wrapper.find("button");
        const emailInput = wrapper.find("FormControl").first();
        const usernameInput = wrapper.find("FormControl").at(1);
        const passwordInput = wrapper.find("FormControl").at(2);
        const passConfInput = wrapper.find("FormControl").last();
        const submitAllFields = ()=>{
            emailInput.simulate('change', {target: {value: 'trgreenman88@gmail.com', name: 'email'}});
            usernameInput.simulate('change', {target: {value: 'trgreenman88', name: 'username'}});
            passwordInput.simulate('change', {target: {value: 'Password123', name: 'password'}});
            passConfInput.simulate('change', {target: {value: 'Password123', name: 'confirmPassword'}});
            submitButton.simulate('click');
        }
        expect(submitAllFields).not.toThrow();
    })

    test("enter mismatched passwords then click submit", ()=>{
        const submitButton = wrapper.find("button");
        const emailInput = wrapper.find("FormControl").first();
        const usernameInput = wrapper.find("FormControl").at(1);
        const passwordInput = wrapper.find("FormControl").at(2);
        const passConfInput = wrapper.find("FormControl").last();
        const submitAllFields = ()=>{
            emailInput.simulate('change', {target: {value: 'trgreenman88@gmail.com', name: 'email'}});
            usernameInput.simulate('change', {target: {value: 'trgreenman88', name: 'username'}});
            passwordInput.simulate('change', {target: {value: 'Password123!', name: 'password'}});
            passConfInput.simulate('change', {target: {value: 'Password123!!!!', name: 'confirmPassword'}});
            submitButton.simulate('click');
        }
        expect(submitAllFields).not.toThrow();
    })

})