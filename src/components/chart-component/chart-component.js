import CandlestickChart from "./candlestick-chart";
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
import apiKeys from "../../apiKeys.json"

function ChartComponent(props) {

    console.log(apiKeys.alphaVantage00)

    const [state, setState] = useState({
        symbolName: "Loading...",
        seriesData: initialSeriesData(new Date(1538856000000), 100)
    });

    useEffect(()=>{
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${props.symbol}&apikey=${apiKeys.alphaVantage00}`)
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
            width={props.width}
        ></CandlestickChart>
    );

}

export default ChartComponent;