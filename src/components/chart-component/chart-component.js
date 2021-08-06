import CandlestickChart from "./generic-chart";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {initialSeriesData, convertSeriesData} from "./chart-util.js";

/**
 * You should make a file in src/ to keep all your keys called apiKeys.json that 
 * looks like this:
 * {
 *      "alphaVantage00": <key0>,
 *      "alphaVantage01": <key1>,
 * }
 */
// import apiKeys from "../../apiKeys.json"

function ChartComponent(props) {

    console.log(new Date("2021-08-03"));

    const [state, setState] = useState({
        symbolName: "Loading...",
        seriesData: initialSeriesData(new Date("1990-01-01"), 100)
    });

    useEffect(()=>{
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${props.symbol}&apikey=LW7AFCIUDLGSKMIQ`)
        .then(response => {
            // put logic for multiple time frames here
            setState({
                symbolName: response.data["Meta Data"]["2. Symbol"],
                seriesData: convertSeriesData(response.data["Time Series (Daily)"])
            });
        })
    },[]);

    return (
        <CandlestickChart 
            symbolName={state.symbolName}
            seriesData={state.seriesData}
            type={props.type}
            width={props.width}
        ></CandlestickChart>
    );

}

export default ChartComponent;