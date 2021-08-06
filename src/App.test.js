// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   // render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });

import App from "./App";
import { shallow, ShallowWrapper } from "enzyme";
import Login from "./components/login-component/login";
import Retister from "./components/register-component/register";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Testing App Component", ()=>{
  const wrapper: ShallowWrapper = shallow(<App></App>);

  test("renders two routes", ()=>{
    expect(wrapper.find("Route").length).toBe(2);
  });

  test("/login mapped to login Component", () => {
    expect(wrapper.find({path:"/login"}).containsMatchingElement(<Login></Login>)).toBe(true);
  });

  test("/register mapped to register Component", () => {
    expect(wrapper.find({path:"/register"}).containsMatchingElement(<Retister></Retister>)).toBe(true);
  });

})

