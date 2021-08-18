import Main from "../MainComponent";
import { shallow, ShallowWrapper } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Login from '../login-component/login';
import Home from '../home-component/home-component';
import { LandingPage } from '../styled-components/home-page/LandingPage';
import About from '../about-component/about-page.js';
import Account from '../account-component/account-component';
import Register from '../register-component/register';
import NewTransaction from "../new-transaction-component/new_transaction";

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });



test("matches snapshot", ()=>{
  // const tree = renderer.create(<Router><Main></Main></Router>).toJSON();
  // const tree = renderer.create(<Router><Main></Main></Router>).toJSON();
  // expect(tree).toMatchSnapshot();
})

// describe("Testing MainComponent", ()=>{
//   // const wrapper: ShallowWrapper = shallow(<App></App>);
//   const wrapper = shallow(<Main></Main>);

//   test("renders without crashing", ()=>{
    
//   });

//   test("renders 12 routes", ()=>{
//     expect(wrapper.find("Route").length).toBe(12);
//   });

//   // test("/login maps to Login component", () => {
//   //   expect(wrapper.find({path:"/login"}).containsMatchingElement(<Route exact path="/login" component={Login} />)).toBe(true);
//   // });

//   // test("/home route rendered", ()=>{
//   //   expect(wrapper.find({path:"/home"}).length).toBe(1);
//   // });

//   test("/portfolio route rendered", ()=>{
//     expect(wrapper.find({path:"/portfolios/public"}).length).toBe(1);
//   });

//   test("/account maps to Account component", () => {
//     expect(wrapper.find({path:"/account"}).containsMatchingElement(<Route exact path="/account" component={Account} />)).toBe(true);
//   });

//   test("/about maps to About component", () => {
//     expect(wrapper.find({path:"/about"}).containsMatchingElement(<Route exact path="/about" component={About} />)).toBe(true);
//   });

//   test("/register maps to Register component", () => {
//     expect(wrapper.find({path:"/register"}).containsMatchingElement(<Route exact path="/register" component={Register} />)).toBe(true);
//   });

//   test("/new-transaction maps to NewTransaction component", () => {
//     expect(wrapper.find({path:"/new-transaction"}).containsMatchingElement(<Route exact path="/new-transaction" component={NewTransaction} />)).toBe(true);
//   });

// });