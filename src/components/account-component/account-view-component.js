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
  
        <div className="secondary-color">
            <div className="h2" id="account-header">
                <span id="header-span" className="m-5 secondary-text">{props.user.username}</span>
                {/* depending on streatch goals, maybe a dark theme toggle can go up here */}
            </div>
            
            <div className="container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="row">
                    {props.portfolioArray.length > 0 ?
                        <h2>Your Portfolios</h2>
                        :
                        <></>
                    }   

                    {displayPortfolio ? 
                    <PrivatePortfolioDetails portfolio={displayPortfolio} user={props.user} unassignDisplayPortfolio={unassignDisplayPortfolio}/>
                    :
                    <></>}

                    <div className="row py-3" style={{borderStyle: "solid"}}>
                        
                        {props.portfolioArray.length > 0 ? 
                            props.portfolioArray.map((portfolio) => {
                                return(                 
                                    <PrivatePortfolioView 
                                    portfolio={portfolio} 
                                    user={props.user} 
                                    assignDisplayPortfolio={assignDisplayPortfolio}/>
                                )
                            })
                            :
                            <h2>You don't have any portfolios yet</h2>
                        }
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