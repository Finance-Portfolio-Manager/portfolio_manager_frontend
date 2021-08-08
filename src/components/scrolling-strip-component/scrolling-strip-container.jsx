// Author: David Garcia

import React, {useState, useEffect} from "react";
import ScrollingStripPresentation from "./scrolling-strip-presentation";
import axios from "axios";

// const url = "http://23.22.140.95:8082";
const url = "http://3.133.113.250:8082/api/get-symbol-pnl"

//TODO: change to ec2 URL when update to backend is merged in
//TODO: figure out how to correctly test these elements


export default function ScrollingStripContainer(){

    // Pass in an array of JSON
    // Stock Symbol
    // PNL
    // Attach an up or down arrow based on PNL

    // Have presentation parse through the array
    // Change colors of arrows based on up or down

    
    // console.log("stockVals", stockVals);
    // console.log(stockVals[0].stockSymbol);
    // stockVals.map((values) => 
    // let symbolArray = [...values.stockSymbol]));
    // let symbolArray;
    // [...symbolArray] = [stockVals.map((values) => values.stockSymbol)];
    

    // console.log(symbolArray);

    // return(
    //     <PresentScrollingStrip innerText={text} json={JSON}></PresentScrollingStrip>
    // );

    const [stockJson, setStockJson] = useState([]);
    const [tickers, setTickers] = useState(["MSFT","GOOG"]);


    useEffect(()=> {
        getSymbolPnlFromApi(tickers, setStockJson);
    },[]);
    
    // let stockVals = Object.values(stockJson);
    return(
        <ScrollingStripPresentation stockJson={stockJson}></ScrollingStripPresentation>
    );
    
}

function getSymbolPnlFromApi(tickers, setStockJson){
    console.log("pinging server!");
    axios.post(
        url,
        JSON.stringify(tickers), //this eventually needs to be passed into the function
        {
            headers:{
                'Content-Type' : 'application/json'
            }
        }
    ).then(resp => {
        setStockJson(resp.data);
        console.log("data", resp.data);
    }, (error) => {
        console.log(error)
    });
}