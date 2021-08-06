import CandlestickChart from "./candlestick-chart";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {convertRawData, initialData} from "./chart-util.js";

import exampleData from "../../exampleData/example-DOCN-daily.json"

function ChartComponent(props) {

    const [state, setState] = useState({
        symbolName: "Loading...",
        seriesData: [
            [new Date(1538856000000), [0,0,0,0]]
        ]
    })

    useEffect(()=>{
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${props.symbol}&apikey=JPGYN8LH3C332EGE`)
        .then(response => {
            // console.log(response.data);
            setState({
                symbolName: response.data["Meta Data"]["2. Symbol"],
                seriesData: convertRawData(response.data)
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

    // return (
    //     <CandlestickChart rawData={rawData} width={props.width}></CandlestickChart>
    // )

}

export default ChartComponent;