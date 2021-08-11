import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './../login-form';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = shallow(<LoginForm></LoginForm>);
// console.log(wrapper.debug());
// console.log(wrapper.props());

afterEach(cleanup);

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<LoginForm></LoginForm>, div)
})

// it("renders login correctly", ()=>{
//     const div = document.createElement("div");
//     const { getByTestId } = render(<LoginForm></LoginForm>, div);
//     expect(getByTestId("login-form")).toHaveTextContent("Portfolio ManagerUsername:Password:Login");
// })

it("matches snapshot", ()=>{
    const tree = renderer.create(<LoginForm></LoginForm>).toJSON();
    expect(tree).toMatchSnapshot();
})

test("Renders title", ()=>{
    expect(wrapper.find("h4").text()).toContain("Portfolio Manager");
})

test("Click submit button", ()=>{
    let clickEvent = () =>{
        wrapper.find("button").simulate('click');
    }
    expect(clickEvent).not.toThrow();
})


describe("Testing with props", ()=>{

    test("onSubmit prop function called when clicked", ()=>{
        //mock click function
        let clickFn = jest.fn();
        let clickFn1 = jest.fn();
        //downgrade to react 16 for this part
        const component = shallow(<LoginForm networkError={ clickFn } error={ clickFn } onChange={ clickFn } onSubmit={ clickFn1 }></LoginForm>);
        expect(clickFn1).not.toHaveBeenCalled();
        component.find("button").simulate('click');
        expect(clickFn1).toHaveBeenCalled();
    
        expect(clickFn).not.toHaveBeenCalled();
    })
    
    test("Username and Password input fields render", ()=>{
        expect(wrapper.find("FormControl.loginInput")).toHaveLength(2);
    });

    test("onChange username function called when input", ()=>{
        let clickFn = jest.fn();
        let clickFn1 = jest.fn();
        const component = shallow(<LoginForm networkError={ clickFn } error={ clickFn } onChange={ clickFn1 } onSubmit={ clickFn }></LoginForm>);
        const usernameComponent = component.find("FormControl.loginInput").first();
        
        expect(clickFn1).not.toHaveBeenCalled();
        usernameComponent.simulate('change', {target: {value: 'hello'}});
        expect(clickFn1).toHaveBeenCalled();
        expect(clickFn).not.toHaveBeenCalled();
        
    })

    test("onChange password function called when input", ()=>{
        let clickFn = jest.fn();
        let clickFn1 = jest.fn();
        const component = shallow(<LoginForm networkError={ clickFn } error={ clickFn } onChange={ clickFn1 } onSubmit={ clickFn }></LoginForm>);
        const passwordComponent = component.find("FormControl.loginInput").last();
        
        expect(clickFn1).not.toHaveBeenCalled();
        passwordComponent.simulate('change', {target: {value: 'hello'}});
        expect(clickFn1).toHaveBeenCalled();
        expect(clickFn).not.toHaveBeenCalled();
        
    })
})


