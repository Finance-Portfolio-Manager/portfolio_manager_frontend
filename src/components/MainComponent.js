import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home-component/home-component';
import Footer from './footer-component/footer';
import Navigation from './navigation/navigation';
import About from './about-component/about-page.js';
import ScrollingStripContainer from './scrolling-strip-component/scrolling-strip-container';
import Account from './account-component/account-component';
import Register from './register-component/register';
import Login from './login-component/login';
// import Favorites from './portfolio-components/favorites-portfolio-component'
import { ThemeProvider } from "styled-components";
import { LandingPage } from './styled-components/home-page/LandingPage';
import GlobalStyle from "./styled-components/styles/GlobalStyles";
import { useAllThemes } from './styled-components/components/AllThemes';
import { themeMode as themeSwitch } from './styled-components/components/themeMode';
import NewTransaction from './new-transaction-component/new_transaction';
import { NewsPage } from './news-component/layout/NewsPage';
import Chart from './portfolio-chart-component/portfolio-chart';
import GenericChart from './chart-component/generic-chart';
import PublicPortfolios from './portfolio-components/all-public-portfolios-component/public-portfolios-component';
import Favorites from './portfolio-components/favorites-portfolio-component/favorites-view';
import ChangePassword from './change-password-component/change-password';
import { useSelector } from 'react-redux';

export default function Main() {
    const [theme, themeToggler] = useAllThemes();
    const isLoggedIn = useSelector(state => {
        return state.loggedIn.value || sessionStorage.getItem("Authorization");
    }
    );
    const themeMode = themeSwitch(theme)

    const users = [{ "username": "Greg", "labels": ["BYSI", "BTBT", "MRNA", "ROKU", "MU"], "percentage": [20, 30, 50, 10, 10], "profile": "Profile 1" },
    { "username": "David", "labels": ["BYSI", "AAPL", "F", "GM", "LUMN"], "percentage": [20, 10, 50, 20, 15], "profile": "Profile 1" },
    { "username": "Quinton", "labels": ["TSLA", "SHOP", "MRNA", "UBER", "BNGO"], "percentage": [10, 10, 50, 10, 20], "profile": "Profile 1" },]

    return (
        <React.Fragment>
            <div className="container-fluid flex-column p-0 secondary-color default-container primary-text">
                <ThemeProvider theme={themeMode} >
                    <GlobalStyle />
                    {isLoggedIn && <Navigation theme={theme} toggleTheme={themeToggler}/>}
                    <ScrollingStripContainer />
                    <Switch>
                        <Route exact path="/portfolios" component={() => <Home users={users} />} />
                        <Route exact path="/" component={() => <LandingPage />} />
                        <Route exact path="/account" component={Account} />
                        <Route exact path="/portfolios/public" component={() => <PublicPortfolios />} />
                        <Route exact path="/balances" component={Chart} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/generic-chart" component={GenericChart} />
                        <Route exact path="/new-transaction" component={NewTransaction} />
                        <Route exact path="/news" component={NewsPage} />
                        <Route exact path="/password" component={ChangePassword} />
                        {/* <Route exact path="/favorites" component={Favorites} /> */}
                    </Switch>
                </ThemeProvider>
            </div>
            <Footer />
        </React.Fragment>
    );
}
