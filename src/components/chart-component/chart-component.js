import CandlestickChart from "./generic-chart";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {initialSeriesData, convertSeriesData} from "./chart-util.js";

function ChartComponent(props) {

    const [state, setState] = useState({
        symbolName: "Loading...",
        seriesData: initialSeriesData(new Date("1990-01-01"), 100)
    });

    useEffect(()=>{
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${props.symbol}&apikey=${process.env.REACT_APP_AV_KEY}`)
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