import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ScrollingStripPresentation from "./scrolling-strip-presentation";

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

it("renders with stock symbols and pnl as props", () => {
  act(() => {
    
    render(<ScrollingStripPresentation stockJson={testArrayJson}/>, container);
  });
  expect(container.textContent).toContain("MSFT");

})