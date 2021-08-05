import CandlestickChart from "./candlestickChart";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {initialData} from "./util.js";

function ExampleContainer(props) {

    const [rawData, setRawData] = useState(initialData)

    useEffect(()=>{
        axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=FB&apikey=JPGYN8LH3C332EGE")
            .then(response => {
                console.log(response.data);
                setRawData(response.data);
            })
    },[])

    return (
        <CandlestickChart rawData={rawData}></CandlestickChart>
    )

}

export default ExampleContainer;