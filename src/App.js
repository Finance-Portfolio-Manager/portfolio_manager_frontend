import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/login-component/login';
import Register from './components/register-component/register-component';
import ExampleChartComponent from './components/chart-component/example-chart-component';
import PortfolioComponent from './components/portfolio-chart-component/portfolio-component';
import { useState, useEffect } from "react";
import axios from "axios";
import Authorization from './components/common/authorization';
import Container from "react-bootstrap/Container";


//TODO: We either need to add the navbar to this page or add it as a separate component

//IMPORTANT: Each of these pulls the component from the .js file with the hyphen naming scheme.
//Everything else in those folders is leftover code from the previous project that should be deleted

//TODO: All of these components are just placeholders for different groups now
function App() {

  return (

    <Router>
      {/* <NavComponent
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      ></NavComponent> */}
      <Container>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Login></Login>
          </Route>
          <Route path="/chart">
            <Authorization>
              <ExampleChartComponent></ExampleChartComponent>
            </Authorization>
          </Route>
          <Route path="/portfolio">
            <Authorization>
              <PortfolioComponent></PortfolioComponent>
            </Authorization>
          </Route>
        </Switch>
      </Container>
    </Router>
    
    );
}

export default App;
