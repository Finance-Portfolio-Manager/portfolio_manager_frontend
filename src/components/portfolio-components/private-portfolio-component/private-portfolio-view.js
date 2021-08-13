import React from "react";
import { useState } from "react";
import PrivatePortfolioDetails from "./private-portfolio-details";
import PrivatePortfolioCard from "./private-portfolio-card";

export default function PrivatePortfolioView(props){



    function setDisplayPortfolio(){
        props.assignDisplayPortfolio(props.portfolio);
        window.scrollTo(0,0);
    }

    //Dynamically renders either a portfolio card or a portfolio table component based on whether or not
    //the user clicked the button
    return (
            <PrivatePortfolioCard 
            user={props.user} 
            portfolio={props.portfolio} 
            setDisplayPortfolio={setDisplayPortfolio}
            />
    )
}
