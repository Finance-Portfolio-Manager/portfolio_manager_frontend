// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   // render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });

import App from "./App";
import { shallow, ShallowWrapper } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Testing App Component", ()=>{
  // const wrapper: ShallowWrapper = shallow(<App></App>);
  const wrapper = shallow(<App></App>);

  test("renders 0 routes", ()=>{
    expect(wrapper.find("Route").length).toBe(0);
  });
})

