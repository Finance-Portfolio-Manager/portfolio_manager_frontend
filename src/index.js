import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './reduxstore'
import { Provider } from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/Portfolio_manager_frontend">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);