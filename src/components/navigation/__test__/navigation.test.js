import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Navigation from "../navigation";

import { shallow, ShallowWrapper, mount } from "enzyme";

import renderer from "react-test-renderer";

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

test("matches snapshot", ()=>{
  const tree = renderer.create(<Navigation></Navigation>).toJSON();
  expect(tree).toMatchSnapshot();
})

test("has Portfolios item", () => {
  act(() => {
    render(<Navigation />, container);
  });
  expect(container.querySelector('div > span').firstChild.nodeValue).toEqual("Portfolios");
});


describe("Nav bar rendering", ()=>{
  let component = shallow(<Navigation></Navigation>);

  test("renders a title", ()=>{
    expect(component.find("a").first().text()).toContain('Team Name');
  })

  test("renders two dropdown menus", ()=>{
    expect(component.find("NavDropDown").length).toBe(2);
  })

  test("renders Home", ()=>{
    expect(component.find("a").at(1).text()).toContain('Home');
  })

  test("renders Your Accounts", ()=>{
    expect(component.find("a").at(2).text()).toContain('Your Accounts');
  })

  test("renders Favorite", ()=>{
    expect(component.find("a").at(3).text()).toContain('Favorite');
  })

  test("renders Public Portfolio", ()=>{
    expect(component.find("a").at(4).text()).toContain('Public portfolio');
  })

  test("renders About Us", ()=>{
    expect(component.find("a").at(5).text()).toContain('About Us');
  })

  test("renders Pie Chart", ()=>{
    expect(component.find("a").at(6).text()).toContain('Pie Chart');
  })

  test("renders Stock Prices", ()=>{
    expect(component.find("a").at(7).text()).toContain('Stock Prices');
  })

  test("renders Stock Graph", ()=>{
    expect(component.find("a").at(8).text()).toContain('Stock Graph');
  })

  test("renders Account", ()=>{
    expect(component.find("a").at(9).text()).toContain('Account');
  })

  test("renders Log in", ()=>{
    expect(component.find("a").at(10).text()).toContain('Log in');
  })

  test("renders Sign up", ()=>{
    expect(component.find("a").at(11).text()).toContain('Sign up');
  })

  test("renders Log Out", ()=>{
    expect(component.find("a").last().text()).toContain('Log Out');
  })
})

describe("navigation response to actions", ()=>{
  test("dropdown menus don't crash when clicked", ()=>{
    const component = shallow(<Navigation></Navigation>).find("NavDropDown");
    expect(component.length).toBe(2);

    let clickEvent1 = () =>{
      component.first().simulate('click');
    }
    let clickEvent2 = () =>{
      component.at(1).simulate('click');
    }

    expect(clickEvent1).not.toThrow();
    expect(clickEvent2).not.toThrow();
  })
})
