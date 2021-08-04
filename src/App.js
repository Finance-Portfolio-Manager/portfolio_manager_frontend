import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './components/login-component/login';
=======
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Portfolio from './components/portfolio-component/portfolio-component';
import Home from './components/home-component/home-component';
import NewTransaction from './components/new-transaction-component/new-transaction-component';
import Login from './components/login-component/login-component';
import Register from './components/register-component/register-component';
>>>>>>> df4799115c5be3570cc545666e53ef09e051c141

//TODO: We either need to add the navbar to this page or add it as a separate component

//IMPORTANT: Each of these pulls the component from the .js file with the hyphen naming scheme.
//Everything else in those folders is leftover code from the previous project that should be deleted

//TODO: All of these components are just placeholders for different groups now
function App() {
  return (
<<<<<<< HEAD
      <Router>
        <NavComponent></NavComponent>
        <Container>
          <Switch>
            <Route path="/login" component={Login}>
            </Route>
          </Switch>
        </Container>
      </Router>
  );
=======
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/new" component={NewTransaction}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </Router>
    );

>>>>>>> df4799115c5be3570cc545666e53ef09e051c141
}

export default App;
