import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ScrollingStripContainer from "./scrolling-strip-container";
import axios from "axios";
import ScrollingStripPresentation from "./scrolling-strip-presentation";

jest.mock('axios');

const testArrayJson = [{"MSFT":29,"GOOG":40}];
const resp = {data: testArrayJson};

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


it("Renders presentation container with injected mock axios function", ()=> {
  // const tickers = [{"MSFT":20,"GOOG":21}];
  // const resp = {data: tickers};
  // axios.post.mockResolvedValue(resp);

  act(() => {
    render (<ScrollingStripContainer/>, container);
  });

  expect(container).toContainElement(<ScrollingStripPresentation></ScrollingStripPresentation>)
})