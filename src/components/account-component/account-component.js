import React from "react";
// import PortfolioCard from "../portfolio-components/private-portfolio-component/private-portfolio-view";
// import PrivatePortfolioCard from "../portfolio-components/private-portfolio-component/private-portfolio-card";
import AccountView from "./account-view-component"
import { useEffect, useState } from "react";
import axios from "axios";
import { PingApiLoginFavorites, PingApiPortfoliosUserId } from "../ServerRequest";

export default function Account(props){

    let [portfolioArray, setPortfolioArray] = useState([]);
    let [user, setUser] = useState({});

    let refreshAccountPage = () => {
        PingApiLoginFavorites().then(userResponse => {
            setUser(userResponse);
            PingApiPortfoliosUserId(userResponse.userId).then(portfoliosResponse => {
                setPortfolioArray(portfoliosResponse);
            })
        })
    }

    useEffect(()=>{
        PingApiLoginFavorites().then(userResponse => {
            setUser(userResponse);
            PingApiPortfoliosUserId(userResponse.userId).then(portfoliosResponse => {
                setPortfolioArray(portfoliosResponse);
            })
        })
        
        }, []);
    
    return <AccountView 
        portfolioArray={portfolioArray} 
        user={user} 
        setPortfolioArray={setPortfolioArray}
        refreshAccountPage={refreshAccountPage}/>

}