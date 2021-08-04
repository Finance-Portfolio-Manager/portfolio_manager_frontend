import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './components/login-component/login';

function App() {
  return (
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
}

export default App;
