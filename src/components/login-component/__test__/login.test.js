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
import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import renderer from 'react-test-renderer';

import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// import Login from './login-component/login';

configure({ adapter: new Adapter() });

const wrapper = mount(<Router><Login></Login></Router>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<Router><Login></Login></Router>).toJSON();
    expect(tree).toMatchSnapshot();
})

describe("testing each function in login", ()=>{
    test("handleChange function for first input box", ()=>{
        const username = wrapper.find("input").first();
        // expect(username.text()).toContain("Username:");
        let changeAction = () =>{
            username.simulate('change', {target: {value: 'user'}});
        }
        expect(changeAction).not.toThrow();
    })

    test("handleSubmit function", ()=>{
        const loginButton = wrapper.find("button");
        expect(loginButton.text()).toContain("Login");
        let clickAction = () =>{
            loginButton.simulate('click');
        }
        expect(clickAction).not.toThrow();
    })
})


