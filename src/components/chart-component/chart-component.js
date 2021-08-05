import CandlestickChart from "./candlestick-chart";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {initialData} from "./chart-util.js";

function ChartComponent(props) {

    const [rawData, setRawData] = useState(initialData)

    useEffect(()=>{
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${props.symbol}&apikey=JPGYN8LH3C332EGE`)
        .then(response => {
            console.log(response.data);
            setRawData(response.data);
        })
    },[])

    return (
        <CandlestickChart rawData={rawData} width={props.width}></CandlestickChart>
    )

}

export default ChartComponent;