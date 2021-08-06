import AccountView from "./account-view-component"

//TODO: This component will get a list of portfolios based on the account ID given
//TODO: This component will send that list of portfolios to AccountView as props
export default function Account(props){

    //TODO: Actually get this information from the server instead of using dummy data
    let portObj1 = {id: 1, name:"Portfolio 1", value:1000};
    let portObj2 = {id: 2, name:"Portfolio 2", value:145641};
    let portObj3 = {id: 3, name:"Portfolio 3", value:1840};

    let portfolioArray = [portObj1, portObj2, portObj3];
    
    return <AccountView portfolioArray={portfolioArray}/>
}