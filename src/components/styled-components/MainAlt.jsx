/*
Carlos Galvan Jr 

A demo version for the home page; not the final version
*/
import React from "react";
import Navigation from "../navigation/navigation";
import ScrollingStripContainer from "../scrolling-strip-component/scrolling-strip-container";
import GlobalStyle from "./styles/GlobalStyles";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../home-component/home-component";
import Account from "../account-component/account-component";
import About from "../about-component/about-page";
import Footer from "../footer-component/footer";
import { ThemeProvider } from "styled-components";
import { LandingPage } from './home-page/LandingPage';
import { useAllThemes } from './components/AllThemes';
import { themeMode as themeSwitch } from './components/themeMode';
import ToggleButton from './components/ToggleButton';

function MainAlt() {
  const [theme, themeToggler] = useAllThemes();
  // const themeMode = theme === "light" ? lightTheme : darkTheme;
  const themeMode = themeSwitch(theme)
  const users = [
    {
      username: "Greg",
      labels: ["BYSI", "BTBT", "MRNA", "ROKU", "MU"],
      percentage: [20, 30, 50, 10, 10],
      profile: "Profile 1",
    },
    {
      username: "David",
      labels: ["BYSI", "AAPL", "F", "GM", "LUMN"],
      percentage: [20, 10, 50, 20, 15],
      profile: "Profile 1",
    },
    {
      username: "Quinton",
      labels: ["TSLA", "SHOP", "MRNA", "UBER", "BNGO"],
      percentage: [10, 10, 50, 10, 20],
      profile: "Profile 1",
    },
  ];

  return (
    <React.Fragment>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Navigation />
        <ScrollingStripContainer></ScrollingStripContainer>
        <ToggleButton theme={theme} toggleTheme={themeToggler} />
        <div className="secondary-color">
          <Switch>
            <Route exact path="/" component={() => <LandingPage />} />
            {/* <Route exact path="/" component={() => <Home users={users} />} /> */}
            <Route exact path="/account" component={Account} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MainAlt;
