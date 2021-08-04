import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

export default function Portfolio(props){

    const[portfolio, setPortfolio] = useState("");

    useEffect(()=>{
        let content = "";
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
            
                    content += "<div class=\"wrapper fadeInDown\">";
                    content += "<div id=\"folioContent\">";
                    content += "<div id=\"portfolio\">";
                    content += "<div id=\"portfolio-values\">";
                    content += "<h4>Portfolio Balance <br>$" + portfolioValue + "</h4>";
                    content += portfolioChange >= 0 ?
                        "<div style=\"color\":\"green\">$" + portfolioChange + "</div>" + 
                        "<div style=\"color\":\"green\">$" + dollarChange + "</div>" : 
                        "<div style=\"color\":\"red\">$" + portfolioChange + "</div>" + 
                        "<div style=\"color\":\"red\">$" + dollarChange + "</div>";
                    content += "</div>";
                    // document.getElementById("portfolio-total").innerHTML = "Portfolio Balance <br>$" + portfolioValue;
                    // let changeValue = document.getElementById("portfolio-change");
                    // let changeAmount = document.getElementById("dollar-change");
                    // changeValue.innerHTML = portfolioChange + "%";
        
                    // if(portfolioChange>0){
                    //     changeAmount.innerHTML = "$" + dollarChange;
                    //     changeValue.style.color = "green";
                    //     changeAmount.style.color = "green";
                    // } else if (portfolioChange<0){
                    //     changeAmount.innerHTML = "$" + dollarChange;
                    //     changeValue.style.color = "red";
                    //     changeAmount.style.color = "red";
                    // }

                    content += "<div class=\"table-responsive\">";
                    content += "<Table class=\"table borderless table-hover\">";
                    content += "<thead><tr>";
                    content += "<th scope=\"col\">Stock</th>";
                    content += "<th scope=\"col\">Quantity</th>";
                    content += "<th scope=\"col\">Average Buy Price</th>";
                    content += "<th scope=\"col\">Current Price</th>";
                    content += "<th scope=\"col\">P/L</th>";
                    content += "</tr></thead>";
                    content += "<tbody>";
                    
                    //const stockTableBody = document.getElementById("stocks-body");
                    for(let i = 0; i < stocksList.length; i++){
                        // let tableRow = document.createElement("tr");
                        // let stockName = document.createElement("th");
                        // let stockQuantity = document.createElement("td");
                        // let stockAveragePrice = document.createElement("td");
                        // let stockCurrentPrice = document.createElement("td");
                        // let stockChange = document.createElement("td");
        
                        content += "<tr><th scope=\"row\">" + stocksList[i].symbol + "</th>";
                        content += "<td>" + stocksList[i].quantity + "</td>";
                        content += "<td>$" + stocksList[i].price.toFixed(2) + "</td>";
                        content += "<td>$" + currentPrices[i].symbol.toFixed(2) + "</td>";

                        let profitAndLoss = (((currentPrices[i] * 100) / stocksList[i].price) - 100).toFixed(2);
                        content += profitAndLoss >= 0 ? "<td style=\"color\":\"green\">$" + profitAndLoss + "</td></tr>" : 
                                "<td style=\"color\":\"red\">$" + profitAndLoss + "</td></tr>";
                        content += "</tbody></Table>";
                        // content += "<td><th>" + stocksList[i].symbol + "</th></tr>";

                        // //stockName.setAttribute('scope', '"row"');
                        // let profitAndLoss = (((currentPrices[i] * 100) / stocksList[i].price) - 100).toFixed(2);
                        // if(profitAndLoss>0){
                        //     stockChange.style.color = "green";
                        // } else if(profitAndLoss<0){
                        //     stockChange.style.color = "red";
                        // }
        
                        // stockName.innerText = stocksList[i].symbol;
                        // stockQuantity.innerText = stocksList[i].quantity.toFixed(2);
                        // stockAveragePrice.innerText = "$" + stocksList[i].price.toFixed(2);
                        // stockCurrentPrice.innerText = "$" + currentPrices[i].toFixed(2);
                        // stockChange.innerText = profitAndLoss + "%";
                        // tableRow.appendChild(stockName);
                        // tableRow.appendChild(stockQuantity);
                        // tableRow.appendChild(stockAveragePrice);
                        // tableRow.appendChild(stockCurrentPrice);
                        // tableRow.appendChild(stockChange);
                        // stockTableBody.appendChild(tableRow);
                    }
                })
            })
        });
        setPortfolio(content);    
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

    return (
        <p>{portfolio}</p>    
    )
    
}
