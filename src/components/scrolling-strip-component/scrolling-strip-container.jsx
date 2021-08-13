// Author: David Garcia

import React, {useState, useEffect} from "react";
import ScrollingStripPresentation from "./scrolling-strip-presentation";
import getSymbolPnlFromApi from "./axios-request";

// const url = "http://23.22.140.95:8082";
// const url = "http://3.133.113.250:8082/api/get-symbol-pnl"
const url = process.env.REACT_APP_API_URL + "/api/get-symbol-pnl";

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
    const [tickers, setTickers] = useState([
        "MSFT","GOOG","AAPL","FB","TSLA","TSM","BABA","JNJ","JPM","V","WMT","NVDA","MA","HD","PG","BAC",
        "PYPL","DIS","ADBE","NKE","CMCSA","PFE","LLY","ORCL","TM","KO","CRM","CSCO","NFLX"]);

        //


    useEffect(()=> {
        getSymbolPnlFromApi(tickers, setStockJson);
    },[]);

    // let stockVals = Object.values(stockJson);
    return(
        <ScrollingStripPresentation stockJson={stockJson}></ScrollingStripPresentation>
    );

}