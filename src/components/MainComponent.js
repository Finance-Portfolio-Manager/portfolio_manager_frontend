import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Portfolio from './portfolio-component/portfolio-component-1';
import Home from './home-component/home-component';
import Login from './login-component/login-component';
import Register from './register-component/register-component';
import Footer from './footer-component/footer';

class Main extends Component {
    render(){
        
         const users = [{"username": "Greg", "labels":["BYSI","BTBT","MRNA","ROKU","MU"], "percentage": [20, 30, 50, 10, 10], "profile": "Profile 1"},
        {"username": "David", "labels":["BYSI","AAPL","F","GM","LUMN"], "percentage": [20, 10, 50, 20, 15], "profile": "Profile 1"},
        {"username": "Quinton", "labels":["TSLA","SHOP","MRNA","UBER","BNGO"], "percentage": [10, 10, 50, 10, 20], "profile": "Profile 1"},]

        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={() => <Home users ={users}/>}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                </Switch>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Main;