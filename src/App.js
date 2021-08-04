import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Portfolio from './components/portfolio-component/portfolio-component';
import Home from './components/home-component/home-component';
import NewTransaction from './components/new-transaction-component/new-transaction-component';
import Login from './components/login-component/login-component';
import Register from './components/register-component/register-component';

//TODO: We either need to add the navbar to this page or add it as a separate component

//IMPORTANT: Each of these pulls the component from the .js file with the hyphen naming scheme.
//Everything else in those folders is leftover code from the previous project that should be deleted

//TODO: All of these components are just placeholders for different groups now
function App() {
  return (
    <Router>
      
      <Route path="/" exact component={Home}/>
      <Route path="/new" component={NewTransaction}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </Router>
    );

}

export default App;