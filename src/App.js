import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/login-component/login';
import Register from './components/register-component/register-component';
import ExampleChartComponent from './components/chart-component/example-chart-component';
import PortfolioComponent from './components/portfolio-chart-component/portfolio-component';
import Authorization from './components/common/authorization';
import Container from "react-bootstrap/Container";

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
            <Register></Register>
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
