import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Authorization from './../authorization';

import { Redirect } from "react-router";

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = shallow(<Authorization></Authorization>);

beforeEach(() => {
    window.sessionStorage.clear();
    jest.restoreAllMocks();
});

test("matches snapshot", ()=>{
    expect(wrapper).toMatchSnapshot();
})

test('should get Authorization from session storage', () => {
    const getItemSpy = jest.spyOn(window.sessionStorage, 'getItem');
    window.sessionStorage.setItem('Authorization', 'dummy token');
    const actualValue = Authorization({children: 'dummy token'});
    expect(actualValue).toEqual('dummy token');
    // expect(getItemSpy).toBeCalledWith('Authorization');
});

it('should get empty object if no Authorization in session storage', () => {
    const getItemSpy = jest.spyOn(window.sessionStorage, 'getItem');
    const actualValue = Authorization({});
    expect(actualValue).toEqual(<Redirect to="/login"></Redirect>);
    // expect(window.sessionStorage.getItem).toBeCalledWith('Authorization');
    // expect(getItemSpy).toBeCalledWith('Authorization');
});


// test("sessionStorage is authorized", ()=>{
//     wrapper.sessionStorage.setItem('Authorizatoin', 'dummy token');
//     expect(wrapper.exists()).toBeTruthy();
// })