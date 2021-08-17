import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import renderer from 'react-test-renderer';

import ScrollingStripContainer from "../scrolling-strip-container";
import ScrollingStripPresentation from "../scrolling-strip-presentation";
import getSymbolPnlFromApi from "../scrolling-strip-container";

const myMock = jest.fn();
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
    myMock.mockReturnValue(testArrayJson);
})

test("matches snapshot", ()=>{
  const tree = renderer.create(<ScrollingStripContainer></ScrollingStripContainer>);
  expect(tree).toMatchSnapshot();
})