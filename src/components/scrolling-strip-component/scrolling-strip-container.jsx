// Author: David Garcia

import React, {useState, useEffect} from "react";
import ScrollingStripPresentation from "./scrolling-strip-presentation";
import axios from "axios";

// const url = "http://23.22.140.95:8082";
// const url = "http://3.133.113.250:8082/api/get-symbol-pnl"
const url = "http://23.22.140.95:8082/api/get-symbol-pnl";

export default function ScrollingStripContainer(){

    const [stockJson, setStockJson] = useState([]);
    const [tickers, setTickers] = useState([
        "MSFT","GOOG","AAPL","FB","TSLA","TSM","BABA","JNJ","JPM","V","WMT","NVDA","MA","HD","PG","BAC",
        "PYPL","DIS","ADBE","NKE","CMCSA","PFE","LLY","ORCL","TM","KO","CRM","CSCO","NFLX"]);

    useEffect(()=> {
        // getSymbolPnlFromApi(tickers, setStockJson);
        axios
            .post(url, JSON.stringify(tickers), { headers:{ 'Content-Type' : 'application/json'}})
            .then(resp => { setStockJson(resp.data);}, 
            (error) => {console.log(error)});
    },[]);

    // let stockVals = Object.values(stockJson);
    return(
        <ScrollingStripPresentation stockJson={stockJson}></ScrollingStripPresentation>
    );

}

// function getSymbolPnlFromApi(tickers, setStockJson){
//     console.log("pinging server!");
//     axios.post(
//         url,
//         JSON.stringify(tickers), //this eventually needs to be passed into the function
//         {
//             headers:{
//                 'Content-Type' : 'application/json'
//             }
//         }
//     ).then(resp => {
//         setStockJson(resp.data);
//         console.log("data", resp.data);
//     }, (error) => {
//         console.log(error)
//     });
// }
