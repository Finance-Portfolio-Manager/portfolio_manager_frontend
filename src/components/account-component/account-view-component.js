import React from "react";
import { CardGroup } from "react-bootstrap";
import PortfolioCard from "../portfolio-component/portfolio-card-component";
//TODO: will be importing functions not yet defined

//TODO: This will take in a list of portfolios as props and render them
export default function AccountView(props){
    //props for account: accountId, username, first_name, last_name, email



    //TODO: Probably remove inline styling of div
    return (
  
        <div className="secondary-color">
            <div className="h2" id="account-header">
                {/* display username and full name to user */}
                <span id="header-span" className="m-5 secondary-text">{props.username}Username</span>
                {/* depending on streatch goals, maybe a dark theme toggle can go up here */}
            </div>
            {props.portfolioArray.map((portfolio) => {
                return(
                    <><PortfolioCard portfolio={portfolio}/> <br/></>
                )
            })}      
            
        </div>
      
        //TODO: 'portfolio-cards'(accountId)  -  build portfolio list based on accountId (or account obj)
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