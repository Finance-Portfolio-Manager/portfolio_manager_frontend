import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/login-component/login';
import Register from './components/register-component/register-component';
import ExampleChartComponent from './components/chart-component/example-chart-component';
import PortfolioComponent from './components/portfolio-chart-component/portfolio-component';
import Authorization from './components/common/authorization';
import Container from "react-bootstrap/Container";
import { BrowserRouter} from "react-router-dom";
import { useEffect } from 'react';
import Main from './components/MainComponent';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './sass/site.scss';

export default function App() {
  useEffect(async() => {
    await import ('@popperjs/core');
    await import ('bootstrap/dist/js/bootstrap.min');
  }, []);

  return (
         <Main/>
        // <MainAlt/>
    );
}
