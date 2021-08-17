import React from 'react';
import renderer from 'react-test-renderer';
import NewTransactionForm from '../new_transaction_form.js';

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = shallow(<NewTransactionForm></NewTransactionForm>);

test('matches snapshot', () => {
    const component = renderer.create(
      <NewTransactionForm></NewTransactionForm>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('4 buttons render', ()=>{
  expect(wrapper.find("Button").length).toBe(4);
})

test("5 labels render", ()=>{
  expect(wrapper.find("FormLabel").length).toBe(5);
})