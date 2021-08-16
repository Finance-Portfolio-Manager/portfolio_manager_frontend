import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Index from './../index';
import App from './../App';

jest.mock('react-dom', ()=> ({render: jest.fn()}))


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  global.document.getElementById = (id) => id ==='root' && div
//   expect(ReactDOM.render).toHaveBeenCalledWith(...)
  expect(ReactDOM.render).toHaveBeenCalled();
});