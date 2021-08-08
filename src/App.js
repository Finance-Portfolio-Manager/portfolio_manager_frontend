import Main from './components/MainComponent';
import { useEffect } from 'react';

// import { BrowserRouter as Router, Route} from "react-router-dom";
// import Login from './components/login-component/login';
// import Register from './components/register-component/register-component';
// import ExampleChartComponent from './components/chart-component/example-chart-component';

// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Portfolio from './components/portfolio-component/portfolio-component';
// import Home from './components/home-component/home-component';
// import NewTransaction from './components/new-transaction-component/new-transaction-component';
// import Login from './components/login-component/login-component';
// import Register from './components/register-component/register-component';
// import Account from './components/account-component/account-component';
// import "./css/portfolio-styles.css"
// import "./css/account.css"
// import 'bootstrap/dist/css/bootstrap.css';


//TODO: We either need to add the navbar to this page or add it as a separate component

//IMPORTANT: Each of these pulls the component from the .js file with the hyphen naming scheme.
//Everything else in those folders is leftover code from the previous project that should be deleted

//TODO: All of these components are just placeholders for different groups now

import 'bootstrap-icons/font/bootstrap-icons.css';
import './sass/site.scss';


export default function App() {
  useEffect(async() => {
    await import ('@popperjs/core');
    await import ('bootstrap/dist/js/bootstrap.min');
  }, []);

  return (
      <Main />
    );
}

