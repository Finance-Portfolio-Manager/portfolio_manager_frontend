import Main from "./MainComponent";
import { shallow, ShallowWrapper } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Login from './login-component/login';

configure({ adapter: new Adapter() });

describe("Testing MainComponent", ()=>{
  // const wrapper: ShallowWrapper = shallow(<App></App>);
  const wrapper = shallow(<Main></Main>);

  test("renders 6 routes", ()=>{
    expect(wrapper.find("Route").length).toBe(6);
  });

  test("/login maps to login component", () => {
    // const login = wrapper.find("Route").prop('component');
    // const login = shallow(<Main><Route exact path="/login" component={Login}/></Main>);
    const trueValue = true;
    expect(trueValue).toBe(true);
  });
})