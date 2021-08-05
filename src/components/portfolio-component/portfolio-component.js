import React, { useState, useEffect } from "react";
import PortfolioView from "./portfolio-view-component";

export default function Portfolio(props){

    const[portfolio, setPortfolio] = useState([{}]);

    useEffect(()=>{
        let records = [{}];
        getUserFromToken(sessionStorage.getItem('Authorization')).then(data => {
            var userId = data.userId;
            getAllTransactions(userId).then(data => {
                var stocksList = [];
            
                for(let i = 0; i < data.length; i++){
                    var stock = {
                        symbol: data[i].ticker,
                        quantity: data[i].shareAmount,
                        price: data[i].sharePrice
                    }
                    if (stocksList.find(s => s.symbol == stock.symbol)){
                        //into 0: new + old = 0(NaN)
                        //out of 0: price = new price
                        let sIndex = stocksList.findIndex(s => s.symbol == stock.symbol);
                        if (stock.quantity > 0){
                            if ((stocksList[sIndex].quantity + stock.quantity) != 0){
                                stocksList[sIndex].price += (((stock.price*stock.quantity) - (stocksList[sIndex].price*stocksList[sIndex].quantity))/(stocksList[sIndex].quantity + stock.quantity));
                            }
                            else{
                                stocksList[sIndex].price = 0;
                            }
                        }
                        if(stocksList[sIndex].quantity == 0){
                            stocksList[sIndex].price = stock.price;
                        }
                        stocksList[sIndex].quantity += stock.quantity;
                    }
                    else{
                        stocksList.push(stock);
                    }
                }
            
                if (stocksList.find(s => s.quantity === 0)){
                    stocksList = stocksList.filter(s => s.quantity !== 0);
                }
            
                var symbolsList = [];
                var portfolioValue = 0;
                for(let i = 0; i < stocksList.length; i++){
                    symbolsList.push(stocksList[i].symbol);
                }
            
                fetchAllStocks(symbolsList).then(data =>{
                    var currentPrices = [];
                    for(let i = 0; i < data.quoteResponse.result.length; i++){
                        currentPrices.push(data.quoteResponse.result[i].regularMarketPrice);
                        portfolioValue += data.quoteResponse.result[i].regularMarketPrice * stocksList[i].quantity;
                    }
                    
                    var portfolioChange = 0;
                    var portfolioAverage = 0;
                    var investedAmount = 0;
                    var dollarChange = 0;
                    for(let i = 0; i <currentPrices.length; i++){
                        portfolioChange += currentPrices[i];
                        portfolioAverage += stocksList[i].price;
                        investedAmount += (stocksList[i].price*stocksList[i].quantity);
                    }
                    portfolioChange = ((portfolioChange * 100) /portfolioAverage) - 100;
                    dollarChange = portfolioValue - investedAmount;
            
                    portfolioValue = portfolioValue.toFixed(2);
                    portfolioChange = portfolioChange.toFixed(2);
                    dollarChange = dollarChange.toFixed(2);
            
                    for(let i = 0; i < stocksList.length; i++){

                        let profitAndLoss = (((currentPrices[i] * 100) / stocksList[i].price) - 100).toFixed(2);

                        let stockRecord = {"stockQuantity":stocksList[i].quantity, "stockName":stocksList[i].symbol,
                            "stockAveragePrice":stocksList[i].price.toFixed(2), "stockCurrentPrice":currentPrices[i].symbol.toFixed(2),
                            "stockChange":profitAndLoss }
                        
                        records.push(stockRecord);
                    }
                })
            })
        });
        setPortfolio(records);    
    },[]);

    function fetchAllStocks(symbols){
        var link = "http://portfoliomanager-env.eba-49pyjjuv.us-east-2.elasticbeanstalk.com/api/all?symbol=";
        for (let i = 0; i < symbols.length; i++){
            link += symbols[i] + ",";
        }
        return fetch(link, {
            method: 'get',
            headers: new Headers({
                'Content-Type':'application/json'
            }),
        }).then((response) => { 
            return response.json().then((data) => {
                return data;
            }).catch((error) => {
                console.log(error);
            }) 
        });
    }
    
    function getUserFromToken(token){
        return fetch("http://portfoliomanager-env.eba-49pyjjuv.us-east-2.elasticbeanstalk.com/username?token=" + token, {
            method: 'get',
            headers: new Headers({
                'Content-Type':'application/json'
            }),
        }).then((response) => { 
            return response.json().then((data) => {
                return data;
            }).catch((error) => {
                console.log(error);
            }) 
        });
    }
    
    function getAllTransactions(userId){
        return fetch("http://portfoliomanager-env.eba-49pyjjuv.us-east-2.elasticbeanstalk.com/transactions?userId=" + userId, {
            method: 'get',
            headers: new Headers({
                'Content-Type':'application/json'
            })
        }).then((response) => { 
            return response.json().then((data) => {
                return data;
            }).catch((error) => {
                console.log(error);
            }) 
        });
    }


    // let portfolio = [
    //     {stockName: "stockName",
    //     stockQuantity: "stockQuantity",
    //     stockAveragePrice: "stockAveragePrice",
    //     stockCurrentPrice: "stockCurrenTPrice",
    //     stockChange: "stockChange"},
    //     {stockName: "stockName",
    //     stockQuantity: "stockQuantity",
    //     stockAveragePrice: "stockAveragePrice",
    //     stockCurrentPrice: "stockCurrenTPrice",
    //     stockChange: "stockChange"},
    //     {stockName: "stockName",
    //     stockQuantity: "stockQuantity",
    //     stockAveragePrice: "stockAveragePrice",
    //     stockCurrentPrice: "stockCurrenTPrice",
    //     stockChange: "stockChange"}
    // ]
    return (
        <PortfolioView tableRows ={portfolio}></PortfolioView>
    )
    
}
