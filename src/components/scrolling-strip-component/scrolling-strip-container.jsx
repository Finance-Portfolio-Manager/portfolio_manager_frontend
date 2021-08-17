// Author: David Garcia
import React, {useState, useEffect} from "react";
import ScrollingStripPresentation from "./scrolling-strip-presentation";
import { PingStockApiSymbols } from "../ServerRequest";

export default function ScrollingStripContainer(){

    const [stockJson, setStockJson] = useState([]);
    const [tickers, setTickers] = useState([
        "MSFT","GOOG","AAPL","FB","TSLA","TSM","BABA","JNJ","JPM","V","WMT","NVDA","MA","HD","PG","BAC",
        "PYPL","DIS","ADBE","NKE","CMCSA","PFE","LLY","ORCL","TM","KO","CRM","CSCO","NFLX"]);

    useEffect(()=> {
        getSymbolPnlFromApi(tickers, setStockJson);
    },[]);

    return(
        <ScrollingStripPresentation stockJson={stockJson}></ScrollingStripPresentation>
    );

}

function getSymbolPnlFromApi(tickers, setStockJson){
    console.log("pinging server!");
    PingStockApiSymbols(tickers).then(resp => {
        setStockJson(resp);
        console.log("data", resp);
    }, (error) => {
        console.log(error)
    });
}
