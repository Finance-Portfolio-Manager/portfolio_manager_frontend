import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home-component/home-component';
import Footer from './footer-component/footer';
import Navigation from './navigation/navigation';
import About from './about-component/about-page.js';
import ScrollingStripContainer from './scrolling-strip-component/scrolling-strip-container';
import Account from './account-component/account-component';
<<<<<<< HEAD
import Login from './login-component/login';
import Register from './register-component/register';
import ChartComponent from './chart-component/chart-component';
=======
import Register from './register-component/register-component';
import Login from './login-component/login';
import { ThemeProvider } from "styled-components";
import { LandingPage } from './styled-components/home-page/LandingPage';
import GlobalStyle from "./styled-components/styles/GlobalStyles";
import { useAllThemes } from './styled-components/components/AllThemes';
import { themeMode as themeSwitch } from './styled-components/components/themeMode';
import ToggleButton from './styled-components/components/ToggleButton';
import NewTransaction from './new-transaction-component/new_transaction';

>>>>>>> team3

export default function Main() {
    const [theme, themeToggler] = useAllThemes();
    const themeMode = themeSwitch(theme)

<<<<<<< HEAD
        return (
            <React.Fragment>
                <Navigation/>
                <ScrollingStripContainer></ScrollingStripContainer> 
                <Switch>
                    <Route exact path="/" component={() => <Home users ={users}/>}/> 
                    <Route exact path="/account" component={Account}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/chart" component={ChartComponent}/>
                </Switch>
                <Footer/>
            </React.Fragment>
        );
    }
}
=======
    const users = [{ "username": "Greg", "labels": ["BYSI", "BTBT", "MRNA", "ROKU", "MU"], "percentage": [20, 30, 50, 10, 10], "profile": "Profile 1" },
    { "username": "David", "labels": ["BYSI", "AAPL", "F", "GM", "LUMN"], "percentage": [20, 10, 50, 20, 15], "profile": "Profile 1" },
    { "username": "Quinton", "labels": ["TSLA", "SHOP", "MRNA", "UBER", "BNGO"], "percentage": [10, 10, 50, 10, 20], "profile": "Profile 1" },]

    return (
        <React.Fragment>
            <div className="container-fluid flex-column p-0 secondary-color">
>>>>>>> team3

                <ThemeProvider theme={themeMode} >
                    <GlobalStyle />
                    <Navigation />
                    <ScrollingStripContainer />
                    <ToggleButton theme={theme} toggleTheme={themeToggler} />
                    <Switch>
                        <Route exact path="/portfolio" component={() => <Home users={users} />} />
                        <Route exact path="/home" component={() => <LandingPage />} />
                        <Route exact path="/account" component={Account} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/new-transaction" component={NewTransaction} />
                    </Switch>
                </ThemeProvider>
                <Footer />
            </div>
        </React.Fragment>
    );
}
