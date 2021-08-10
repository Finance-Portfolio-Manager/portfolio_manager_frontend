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
  
  
  //THIS STATE IS LOST UPON REFRESH, FORCING USER TO RE-LOGIN :(  
//   const [loggedIn, setLoggedIn] = useState();
//   useEffect(()=>{
//     if(sessionStorage.getItem("Authorization")){ 
//       console.log("has token");
//       axios.post("http://localhost:8082/verify", JSON.stringify(sessionStorage.getItem("Authorization")), {headers:{'Content-Type': 'application/json'}})
//       .then(response=>{          
//         setLoggedIn(true);
//       })
//       .catch(function (error) {
//         setLoggedIn(false);
//     })
//     }     
//     console.log(loggedIn);
// },[]);

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
          <Route path="/chart">
            <Authorization>
              <ExampleChartComponent></ExampleChartComponent>
            </Authorization>
          </Route>
        </Switch>
      </Container>
    </Router>



    // <Router>
    //   {/* <Route path="/" exact component={Home}/>
    //   <Route path="/new" component={NewTransaction}/>
    //   <Route path="/portfolio" component={Portfolio}/> */}
    //   <Route path="/login" component={Login}/>
    //   <Route path="/register" component={Register}/>
    //   <Route path="/chart" component={ExampleChartComponent}/>
    //   <Route path="/portfolio" component={PortfolioComponent}/>
   //   {/* <Route path="/register" component={Register}/> */}
    // </Router>
    );
}

export default App;
