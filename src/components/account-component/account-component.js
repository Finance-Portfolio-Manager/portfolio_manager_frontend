import React from "react";
import PortfolioCard from "../portfolio-component/portfolio-card-component";
import AccountView from "./account-view-component"

//TODO: will be importing functions not yet defined
//TODO: This component will get a list of portfolios based on the account ID given
//TODO: This component will send that list of portfolios to AccountView as props

export default function Account(props){

    //props for account: accountId, username, first_name, last_name, email
    let portfolio = {name:"TestName", value:100}

    //TODO: Actually get this information from the server instead of using dummy data
    let portObj1 = {id: 1, name:"Portfolio 1", value:1000};
    let portObj2 = {id: 2, name:"Portfolio 2", value:145641};
    let portObj3 = {id: 3, name:"Portfolio 3", value:1840};

            { <h2>Placeholder for the list of portfolios</h2> }

            <PortfolioCard portfolio={portfolio} />
        </div>
        </>
        //TODO: 'portfolio-cards'(accountId)  -  build portfolio list based on accountId (or account obj)
    )

}
