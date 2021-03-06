import React from "react";
import ChartComponent from "./chart-component";

function ExampleChartComponent(props) {
    return (
        <ChartComponent 
            symbol="GOOGL" 
            type="candlestick" 
            width="800"
        ></ChartComponent>
    )
}

export default ExampleChartComponent;