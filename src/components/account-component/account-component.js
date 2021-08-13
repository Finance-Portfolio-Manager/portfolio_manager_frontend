import React from "react";
import PortfolioCard from "../portfolio-components/private-portfolio-component/private-portfolio-view";
import AccountView from "./account-view-component"

//TODO: will be importing functions not yet defined
//TODO: This component will get a list of portfolios based on the account ID given
//TODO: This component will send that list of portfolios to AccountView as props

export default function Account(props){

    //TODO: This data is probably going to be sent to the Account component as a prop when a user logs in
    let user={username: "testUser", email: "testUser@gmail.com"};

    //TODO: This data should already be part of the portfolio when we pull it from the server
    let stock1 = {stockName:"Amazon", stockQuantity:10, stockAveragePrice:3300, stockCurrentPrice:3400, stockChange:8};
    let stock2 = {stockName:"Tesla", stockQuantity:15, stockAveragePrice:700, stockCurrentPrice:715, stockChange:2};
    let stock3 = {stockName:"AMC", stockQuantity:20, stockAveragePrice:10, stockCurrentPrice:33, stockChange:230};
    let stock4 = {stockName:"GME", stockQuantity:5, stockAveragePrice:40, stockCurrentPrice:180, stockChange:230};
    let stock5 = {stockName:"LYFT", stockQuantity:7, stockAveragePrice:30, stockCurrentPrice:120, stockChange:230};
    let stock6 = {stockName:"UBER", stockQuantity:15, stockAveragePrice:50, stockCurrentPrice:200, stockChange:230};
    let stockList = [stock1, stock2, stock3, stock4, stock5, stock6];

    //TODO: After we get stock data from the server, we'll either have to calculate the portfolio total or it'll come included
    let stockValues = stockList.map((stock) => stock.stockQuantity * stock.stockCurrentPrice);
    
    let portfolioValue = stockValues.reduce((sum, currentStockValue) =>  sum + currentStockValue );

    //TODO: Actually get this information from the server instead of using dummy data
    let portObj1 = {id: 1, name:"Portfolio 1", value:portfolioValue, stockList: stockList};
    let portObj2 = {id: 2, name:"Portfolio 2", value:portfolioValue, stockList: stockList};
    let portObj3 = {id: 3, name:"Portfolio 3", value:portfolioValue, stockList: stockList};
    let portObj4 = {id: 4, name:"Portfolio 4", value:portfolioValue, stockList: stockList};
    let portObj5 = {id: 5, name:"Portfolio 5", value:portfolioValue, stockList: stockList};
    let portObj6 = {id: 6, name:"Portfolio 6", value:portfolioValue, stockList: stockList};

    let portfolioArray = [portObj1, portObj2, portObj3, portObj4, portObj5, portObj6]; 


    /*
        server call functions get written here.
    */

    return <AccountView portfolioArray={portfolioArray} user={user}/>

}
