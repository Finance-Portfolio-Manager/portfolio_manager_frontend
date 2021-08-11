import React from "react";
import { useState } from "react";
import PrivatePortfolioDetails from "./private-portfolio-details";
import PrivatePortfolioCard from "./private-portfolio-card";

export default function PrivatePortfolioView(props){


    const [showDetails, setShowDetails] = useState(false);

    function toggleShowDetails(){
        setShowDetails(!showDetails)
    }

    //Dynamically renders either a portfolio card or a portfolio table component based on whether or not
    //the user clicked the button
    return (
        <>
        {showDetails ?
            <PrivatePortfolioDetails user={props.user} portfolio={props.portfolio} toggleShowDetails={toggleShowDetails} />

        :
            <PrivatePortfolioCard user={props.user} portfolio={props.portfolio} toggleShowDetails={toggleShowDetails} />
        }
        </>
    )
}
