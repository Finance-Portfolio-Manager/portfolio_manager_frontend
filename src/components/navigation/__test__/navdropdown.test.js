import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
// import Navigation from "../navigation";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavDropDown from "../navdropdown";

import React, { useState } from 'react';

configure({ adapter: new Adapter() });

describe("dropdown rendering", ()=>{
    let component = shallow(<NavDropDown></NavDropDown>);

    test("dropdown renders", ()=>{
        expect(component.find("Dropdown").length).toBe(1);
    })

    test("dropdown.toggle renders", ()=>{
        expect(component.find("DropdownToggle").length).toBe(1);
    })

    test("dropdown.menu renders", ()=>{
        expect(component.find("DropdownMenu").length).toBe(1);
    })
});

// describe("dropdown with props", ()=>{
//     test("dropdown goes away when unhovered", ()=>{
//         const clickFn = jest.fn();
//         const component = shallow(<NavDropDown show={ clickFn } hovered={ clickFn } unhovered={ clickFn }></NavDropDown>);

//         expect(clickFn).not.toHaveBeenCalled();
//         component.simulate('click');
//         expect(clickFn).toHaveBeenCalled();
//     })
    
// })

//https://blog.logrocket.com/testing-state-changes-in-react-functional-components/
/*
test("drops down when hovered", ()=>{
    // component.setProps({ dropDownShow : false });
    const onHover = jest.fn();
    const component = shallow(<NavDropDown onMouseOver={ onHover }></NavDropDown>);
    // const handleHover = jest.spyOn(React, "useState");
    // handleHover.mockImplementation(dropdownShow => [dropdownShow, onHover]);
  
    component.find('NavDropDown').simulate('mouseOver');
    expect(onHover).toHaveBeenCalled();
})
*/