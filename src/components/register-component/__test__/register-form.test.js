import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './../register-form';

import { render, cleanup } from '@testing-library/react';

import renderer from "react-test-renderer";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow, ShallowWrapper, mount } from "enzyme";

configure({ adapter: new Adapter() });
const wrapper = shallow(<RegisterForm></RegisterForm>);

afterEach(cleanup);

test("matches snapshot", ()=>{
    const tree = renderer.create(<RegisterForm></RegisterForm>);
    expect(tree).toMatchSnapshot();
})

test("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<RegisterForm></RegisterForm>, div)
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

    afterEach(cleanup);

    test("onSubmit prop function called when clicked", ()=>{
        //mock click function
        let clickFn = jest.fn();
        let clickFn1 = jest.fn();
        //downgrade to react 16 for this part
        const component = shallow(<RegisterForm emailError={clickFn} usernameError={clickFn} passwordError={clickFn} confirmPasswordError={clickFn} onChange={clickFn} onSubmit={clickFn1}></RegisterForm>);
        expect(clickFn1).not.toHaveBeenCalled();
        component.find("button").simulate('click');
        expect(clickFn1).toHaveBeenCalled();
    
        expect(clickFn).not.toHaveBeenCalled();
    })
    
    test("Email, Username, Password and Confirm Password input fields render", ()=>{
        expect(wrapper.find("FormControl")).toHaveLength(4);
    });

    test("onChange email function called when input", ()=>{
        let clickFn = jest.fn();
        let clickFn1 = jest.fn();
        const component = shallow(<RegisterForm emailError={clickFn} usernameError={clickFn} passwordError={clickFn} confirmPasswordError={clickFn} onChange={clickFn1} onSubmit={clickFn}></RegisterForm>);
        const emailComponent = component.find("FormControl").first();
        
        expect(clickFn1).not.toHaveBeenCalled();
        emailComponent.simulate('change', {target: {value: 'hello'}});
        expect(clickFn1).toHaveBeenCalled();
        expect(clickFn).not.toHaveBeenCalled();
        
    })

    test("onChange username function called when input", ()=>{
        let clickFn = jest.fn();
        let clickFn1 = jest.fn();
        const component = shallow(<RegisterForm emailError={clickFn} usernameError={clickFn} passwordError={clickFn} confirmPasswordError={clickFn} onChange={clickFn1} onSubmit={clickFn}></RegisterForm>);
        const confirmPasswordComponent = component.find("FormControl").at(1);
        
        expect(clickFn1).not.toHaveBeenCalled();
        confirmPasswordComponent.simulate('change', {target: {value: 'hello'}});
        expect(clickFn1).toHaveBeenCalled();
        expect(clickFn).not.toHaveBeenCalled();
    })

    test("onChange password confirm function called when input", ()=>{
        let clickFn = jest.fn();
        let clickFn1 = jest.fn();
        const component = shallow(<RegisterForm emailError={clickFn} usernameError={clickFn} passwordError={clickFn} confirmPasswordError={clickFn} onChange={clickFn1} onSubmit={clickFn}></RegisterForm>);
        const confirmPasswordComponent = component.find("FormControl").at(2);
        
        expect(clickFn1).not.toHaveBeenCalled();
        confirmPasswordComponent.simulate('change', {target: {value: 'hello'}});
        expect(clickFn1).toHaveBeenCalled();
        expect(clickFn).not.toHaveBeenCalled();
    })

    test("onChange password function called when input", ()=>{
        let clickFn = jest.fn();
        let clickFn1 = jest.fn();
        const component = shallow(<RegisterForm emailError={clickFn} usernameError={clickFn} passwordError={clickFn} confirmPasswordError={clickFn} onChange={clickFn1} onSubmit={clickFn}></RegisterForm>);
        const confirmPasswordComponent = component.find("FormControl").last();
        
        expect(clickFn1).not.toHaveBeenCalled();
        confirmPasswordComponent.simulate('change', {target: {value: 'hello'}});
        expect(clickFn1).toHaveBeenCalled();
        expect(clickFn).not.toHaveBeenCalled();
        
    })

    // -------------------COME BACK TO THIS--------------------------------
    // test("passwordError called when bad password", ()=>{
    //     let clickFn = jest.fn();
    //     let clickFn1 = jest.fn();
    //     const component = shallow(<RegisterForm emailError={clickFn} usernameError={clickFn} passwordError={clickFn1} confirmPasswordError={clickFn} onChange={clickFn} onSubmit={clickFn}></RegisterForm>);
    //     const passwordComponent = component.find("FormControl").at(2);
    //     const buttonComponent = component.find("button");
        
    //     expect(clickFn1).not.toHaveBeenCalled();
    //     // passwordComponent.simulate('change', {target: {value: 'invalid'}});
    //     passwordComponent.value = 'invalid';
    //     console.log(passwordComponent.value);
    //     buttonComponent.simulate('click');
    //     expect(clickFn1).toHaveBeenCalled();
    //     expect(clickFn).not.toHaveBeenCalled();
    // })
})