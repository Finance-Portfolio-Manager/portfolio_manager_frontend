// import React from 'react';
// import ReactDOM from 'react-dom';
// import Login from './../login';

// import { render, cleanup } from '@testing-library/react';
// import "@testing-library/jest-dom/extend-expect";
// // import renderer from "react-test-renderer";

// afterEach(cleanup);

// it('dummy login test', () => {

// });

import Login from "./../login";
import LoginForm from "./../login-form"
import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import renderer from 'react-test-renderer';

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Login from './login-component/login';

configure({ adapter: new Adapter() });

const wrapper = shallow(<LoginForm></LoginForm>);

test("matches snapshot", ()=>{
    
})


