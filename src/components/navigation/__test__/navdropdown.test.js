import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
// import Navigation from "../navigation";

import { shallow, ShallowWrapper, mount } from "enzyme";

import renderer from "react-test-renderer";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavDropDown from "../navdropdown";

import React, { useState } from 'react';

configure({ adapter: new Adapter() });

test("matches snapshot", ()=>{
    const clickFn = jest.fn();
    const tree = renderer.create(<NavDropDown></NavDropDown>).toJSON();
    expect(tree).toMatchSnapshot();
    const treeProps = renderer.create(<NavDropDown hovered={ clickFn } show={ true } title="Portfolios"></NavDropDown>).toJSON();
    expect(treeProps).toMatchSnapshot();
})

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

describe("dropdown with props", ()=>{
    test("dropdown function called when clicked", ()=>{
        const hoverFn = jest.fn();
        const clickFn = jest.fn();
        const component = shallow(<NavDropDown hovered={ clickFn } show={ true } title="Portfolios"></NavDropDown>);
        const dropToggle = component.find("DropdownToggle");
        expect(dropToggle.length).toBe(1);
        dropToggle.simulate('mouseover');
        dropToggle.simulate('click');
        // expect(hoverFn).toHaveBeenCalled();
        expect(clickFn).toHaveBeenCalled();
    })
    
    test("dropdown title renders", ()=>{
        const clickFn = jest.fn();
        const component = shallow(<NavDropDown hovered={ clickFn } show={ true } title="Portfolios"></NavDropDown>);
        const dropToggle = component.find("DropdownToggle");
        expect(dropToggle.text()).toContain("Portfolios");
    })
    
})

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