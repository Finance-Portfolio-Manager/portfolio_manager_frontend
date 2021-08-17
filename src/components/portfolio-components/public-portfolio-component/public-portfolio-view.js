import React from "react";
import { useState } from "react";
import PublicPortfolioDetails from "./public-portfolio-details";
import PublicPortfolioCard from "./public-portfolio-card";

export default function PublicPortfolioView(props){


    const [showDetails, setShowDetails] = useState(false);

    function toggleShowDetails(){
        setShowDetails(!showDetails)
    }

    //Dynamically renders either a portfolio card or a portfolio table component based on whether or not
    //the user clicked the button
    return (
        <>
        {showDetails ?
            <PublicPortfolioDetails user={props.username} portfolio={props.portfolio} toggleShowDetails={toggleShowDetails} />

        :
            <PublicPortfolioCard user={props.username} portfolio={props.portfolio} toggleShowDetails={toggleShowDetails} />
        }
        </>
    )
}
