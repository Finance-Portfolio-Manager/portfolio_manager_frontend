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

// import Login from './login-component/login';

configure({ adapter: new Adapter() });

const wrapper = shallow(<Login></Login>);
console.log(wrapper.debug());
console.log(wrapper.props());

test("/login with props", () => {
    const credentials = [
        {
            username: "Trent",
            password: "Password123!"
        }
    ];
    const wrapperWithProps = shallow(<Login credentials={credentials}></Login>);
});
