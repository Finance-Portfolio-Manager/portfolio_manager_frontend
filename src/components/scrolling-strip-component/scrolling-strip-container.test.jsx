import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import getSymbolPnlFromApi from "./axios-request";

const myMock = jest.fn();
const testArrayJson = [{"MSFT":29,"GOOG":40}];
const resp = {data: testArrayJson};
jest.mock('axios');

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



})