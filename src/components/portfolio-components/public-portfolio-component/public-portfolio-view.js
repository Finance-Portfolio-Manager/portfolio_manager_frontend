import React from "react";
import { useState } from "react";
import PublicPortfolioDetails from "./public-portfolio-details";
import PublicPortfolioCard from "./public-portfolio-card";
import NewTransaction from "../../new-transaction-component/new_transaction";
import axios from "axios";
import { PingApiLoginFavorites, PingApiPostFavorite } from "../../ServerRequest";

export default function PublicPortfolioView(props){


    const [showDetails, setShowDetails] = useState(false);

    function toggleShowDetails(){
        setShowDetails(!showDetails)
    }

    let addToFavorites = (e) =>
        {
        e.preventDefault();

        PingApiLoginFavorites().then(userResponse => {
            let favoriteObj = {
                userId: userResponse.userId,
                portfolioId: props.portfolio.portfolioId
            }
            console.log(`favoriteObj: ${JSON.stringify(favoriteObj)}`);
            PingApiPostFavorite(JSON.stringify(favoriteObj)).then(favoriteResponse =>{
                console.log(favoriteResponse);
            })
            .catch(err=>console.error(err));
        })
        .catch(err => console.log("You aren't logged in"));
    }
        

    //Dynamically renders either a portfolio card or a portfolio table component based on whether or not
    //the user clicked the button
    return (
        <>
        {showDetails ?
            <PublicPortfolioDetails user={props.username} portfolio={props.portfolio} toggleShowDetails={toggleShowDetails} />

        :
            <PublicPortfolioCard 
                user={props.username} 
                addToFavorites={addToFavorites} 
                portfolio={props.portfolio} 
                toggleShowDetails={toggleShowDetails} />
        }
        </>
    )
}
