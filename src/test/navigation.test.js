import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Navigation from "../components/navigation/navigation";

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

it("has a home nav item", () => {
    act(() => {
      render(<Navigation />, container);
    });
    expect(container.querySelector('div > span').firstChild.nodeValue).toEqual("Home");
  });