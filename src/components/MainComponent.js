import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home-component/home-component';
import Footer from './footer-component/footer';
// import {StyledLayout} from './styled-layout/StyledLayout';
import Navigation from './navigation/navigation';
import About from './about-component/about-page.js';
import ScrollingStripContainer from './scrolling-strip-component/scrolling-strip-container';


class Main extends Component {
    render(){
        
         const users = [{"username": "Greg", "labels":["BYSI","BTBT","MRNA","ROKU","MU"], "percentage": [20, 30, 50, 10, 10], "profile": "Profile 1"},
        {"username": "David", "labels":["BYSI","AAPL","F","GM","LUMN"], "percentage": [20, 10, 50, 20, 15], "profile": "Profile 1"},
        {"username": "Quinton", "labels":["TSLA","SHOP","MRNA","UBER","BNGO"], "percentage": [10, 10, 50, 10, 20], "profile": "Profile 1"},]

        return (
            <React.Fragment>
                <Navigation/>
                <ScrollingStripContainer></ScrollingStripContainer>
                <Switch>
                    <Route exact path="/" component={() => <Home users ={users}/>}/>
                    
                    
                    
                    <Route exact path="/about" component={About}/>
                </Switch>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Main;