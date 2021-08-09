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
import { darkTheme, lightTheme } from "./styles/Themes";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/DarkMode";
import Toggle from "./components/Toggle";
import { LandingPage } from './home-page/LandingPage';

function MainAlt() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
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
        <Toggle theme={theme} toggleTheme={themeToggler} />
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
