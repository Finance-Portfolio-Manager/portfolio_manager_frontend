import CandlestickChart from "./candlestick-chart";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {initialSeriesData, convertSeriesData} from "./chart-util.js";

function ChartComponent(props) {

    const [state, setState] = useState({
        symbolName: "Loading...",
        seriesData: initialSeriesData(new Date(1538856000000), 100)
    })

    useEffect(()=>{
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${props.symbol}&apikey=JPGYN8LH3C332EGE`)
        .then(response => {
            setState({
                symbolName: response.data["Meta Data"]["2. Symbol"],
                seriesData: convertSeriesData(response.data["Time Series (Daily)"])
            });
        })
    },[])

    return (
        <CandlestickChart 
            symbolName={state.symbolName}
            seriesData={state.seriesData}
            width={props.width}
        ></CandlestickChart>
    )

}

export default ChartComponent;