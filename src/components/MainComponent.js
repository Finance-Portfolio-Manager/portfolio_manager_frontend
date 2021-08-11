import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home-component/home-component';
import Footer from './footer-component/footer';
// import {StyledLayout} from './styled-layout/StyledLayout';
import Navigation from './navigation/navigation';
import About from './about-component/about-page.js';
import ScrollingStripContainer from './scrolling-strip-component/scrolling-strip-container';
import Account from './account-component/account-component';
import Register from './register-component/register-component';
import Login from './login-component/login-form';
import { ThemeProvider } from "styled-components";
import { LandingPage } from './styled-components/home-page/LandingPage';
import GlobalStyle from "./styled-components/styles/GlobalStyles";
import { useAllThemes } from './styled-components/components/AllThemes';
import { themeMode as themeSwitch } from './styled-components/components/themeMode';
import ToggleButton from './styled-components/components/ToggleButton';


export default function Main() {
    const [theme, themeToggler] = useAllThemes();
    const themeMode = themeSwitch(theme)

    const users = [{ "username": "Greg", "labels": ["BYSI", "BTBT", "MRNA", "ROKU", "MU"], "percentage": [20, 30, 50, 10, 10], "profile": "Profile 1" },
    { "username": "David", "labels": ["BYSI", "AAPL", "F", "GM", "LUMN"], "percentage": [20, 10, 50, 20, 15], "profile": "Profile 1" },
    { "username": "Quinton", "labels": ["TSLA", "SHOP", "MRNA", "UBER", "BNGO"], "percentage": [10, 10, 50, 10, 20], "profile": "Profile 1" },]

    return (
        <React.Fragment>
            <div className="container-fluid flex-column p-0 secondary-color">
                
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
                    </Switch>
                </ThemeProvider>
                <Footer />
            </div>
        </React.Fragment>
    );
}
