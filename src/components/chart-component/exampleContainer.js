import CandlestickChart from "./candlestickChart";
import React, { useState } from "react";
import axios from "axios";

import exampleData from "../../exampleData/example-AAPL-daily.json";

function ExampleContainer(props) {

    const [state, setState] = useState({
        rawData: exampleData
    });

    axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=JPGYN8LH3C332EGE")
    .then(response => {
        console.log(
            response.data
        );

        setState({ 
            rawData: response.data
        })
    })

    return (
        <CandlestickChart rawData={state.rawData}></CandlestickChart>
    )

}

export default ExampleContainer;