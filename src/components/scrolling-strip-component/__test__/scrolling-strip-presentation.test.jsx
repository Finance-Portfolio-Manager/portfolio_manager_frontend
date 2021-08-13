import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { shallow, ShallowWrapper, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

import ScrollingStripPresentation from "../scrolling-strip-presentation";

configure({ adapter: new Adapter() });

const testArrayJson = {"MSFT":29,"GOOG":40};

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Renders with stock symbols and pnl as props", () => {
  act(() => {
    
    render(<ScrollingStripPresentation stockJson={testArrayJson}/>, container);
  });
  // const wrapper = shallow(<ScrollingStripPresentation stockJson={testArrayJson}></ScrollingStripPresentation>);
  expect(container.textContent).toContain("MSFT");
  // expect(wrapper.text()).toContain("MSFT");

});