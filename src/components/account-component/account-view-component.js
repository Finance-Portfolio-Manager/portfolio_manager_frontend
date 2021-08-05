import React from "react";
//TODO: will be importing functions not yet defined

export default function Account(props){
    //props for account: accountId, username, first_name, last_name, email

    return (
        <>
        <div>
            <h2 id="account-header">
                {/* display username and full name to user */}
                <span id="header-span">{props.username}Username</span>  {/*some margin*/}  <span id="header-span">{props.first_name}Full Name{props.last_name}</span>
                {/* depending on streatch goals, maybe a dark theme toggle can go up here */}
            </h2>

            { <h2>Placeholder for the list of portfolios</h2> }
            
        </div>
        </>
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