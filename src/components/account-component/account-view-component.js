import React from "react";
import { CardGroup } from "react-bootstrap";
import PrivatePortfolioDetails from "../portfolio-components/private-portfolio-component/private-portfolio-details";
import PrivatePortfolioView from "../portfolio-components/private-portfolio-component/private-portfolio-view";
import { useState } from "react";
//TODO: will be importing functions not yet defined

//TODO: This will take in a list of portfolios as props and render them
export default function AccountView(props){

    let [displayPortfolio, setDisplayPortfolio] = useState(null);

    let assignDisplayPortfolio = (portfolio) => {
        setDisplayPortfolio(portfolio);
    }

    let unassignDisplayPortfolio = () => {
        setDisplayPortfolio(null);
    }
 

    //TODO: The styling gets messed up when you switch from a portfolio card to a portfolio table.
    return (
  
        <div style={{backgroundColor:"#B9B9BA"}}>
            <h2 id="account-header">
                <span id="header-span">{props.user.username}</span>
                {/* depending on streatch goals, maybe a dark theme toggle can go up here */}
            </h2>
            
            <div className="container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="row">
                    <h2>Your Portfolios</h2>

                    {displayPortfolio ? 
                    <PrivatePortfolioDetails portfolio={displayPortfolio} user={props.user} unassignDisplayPortfolio={unassignDisplayPortfolio}/>
                    :
                    <></>}

                    <div className="row py-3" style={{borderStyle: "solid"}}>
                        
                        {props.portfolioArray.map((portfolio) => {
                                return(                 
                                    <PrivatePortfolioView 
                                    portfolio={portfolio} 
                                    user={props.user} 
                                    assignDisplayPortfolio={assignDisplayPortfolio}/>
                                )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )

}

// example of nested structure
// account: (account summary?) -> username, full name, *darktheme toggle?(tbd)
//
//     portfolio card 1 ( name - total value - average change )
//         portfolio details:
//              stocks - amounts - current value - change  ->  transaction history
//
//     portfolio card 2 ( name - total value - average change )