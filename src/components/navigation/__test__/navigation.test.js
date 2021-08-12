import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Navigation from "../navigation";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavDropDown from "../navdropdown";

import React, { useState } from 'react';

configure({ adapter: new Adapter() });
const wrapper = shallow(<Navigation></Navigation>);

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("has a home nav item", () => {
  act(() => {
    render(<Navigation />, container);
  });
  expect(container.querySelector('div > span').firstChild.nodeValue).toEqual("Home");
});


describe("Nav bar rendering", ()=>{
  let component = shallow(<Navigation></Navigation>);

  test("renders a title", ()=>{
    expect(component.find("a").first().text()).toContain('Portfolio');
  })

  test("renders a home nav item with a dropdown", ()=>{
    expect(component.find("NavDropDown").length).toBe(1);
  })

  test("renders About Us", ()=>{
    expect(component.find("a").at(1).text()).toContain('About Us');
  })

  test("renders Stocks", ()=>{
    expect(component.find("a").at(2).text()).toContain('Stocks');
  })

  test("renders Account", ()=>{
    expect(component.find("a").at(3).text()).toContain('Account');
  })

  test("renders Log in for Account dropdown", ()=>{
    expect(component.find("a").at(4).text()).toContain('Log in');
  })

  test("renders Sign up for Account dropdown", ()=>{
    expect(component.find("a").at(5).text()).toContain('Sign up');
  })

  test("renders Log Out for Account dropdown", ()=>{
    expect(component.find("a").at(6).text()).toContain('Log Out');
  })
})

//----------------COME BACK TO THIS------------------------------
describe("navigation with props", ()=>{
  test("dropdown menu shows when hovered", ()=>{
    const clickFn = jest.fn();
    const component = shallow(<Navigation onClick={ clickFn }></Navigation>).find("NavDropDown");

    expect(component.length).toBe(1);
    component.simulate('mouseOver');
    // expect(clickFn).toHaveBeenCalled();
  })
})
