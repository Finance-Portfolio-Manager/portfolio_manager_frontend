import GenericChart from "./generic-chart";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {initialSeriesData, convertSeriesData} from "./chart-util.js";
import { PingApiChart } from "../ServerRequest";

function ChartComponent(props) {

    const [state, setState] = useState({
        symbolName: "Loading...",
        seriesData: initialSeriesData(new Date("1990-01-01"), 100)
    });

    useEffect(()=>{
        // axios.get(process.env.REACT_APP_API_URL + "/charts/" + props.symbol)
        PingApiChart(props.symbol).then(response => {
            console.log(response)
            // put logic for multiple time frames here
            setState({
                symbolName: response["Meta Data"]["2. Symbol"],
                seriesData: convertSeriesData(response["Time Series (Daily)"])
            });
        })
    },[]);

    return (
        <GenericChart
            symbolName={state.symbolName}
            seriesData={state.seriesData}
            type={props.type}
            width={props.width}
        ></GenericChart>
    );

}

export default ChartComponent;
