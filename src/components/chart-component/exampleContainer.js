import React from "react";
import ExampleCandle from "./candlestickChart";

import exampleData from "../../exampleData/example-AAPL-daily.json";
import CandlestickChart from "./candlestickChart";

function ExampleContainer(props) {

    // const [state, setState] = useState({
    //     series: [{
    //         data: convertRawData(exampleData)
    //     }]
    // });

    // const [state, setState] = useState({});
    // axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=JPGYN8LH3C332EGE")
    // .then(response => {
    //     return response.data;
    // }).then(rawData => {
    //     setState({
    //         options: {
    //             chart: {
    //                 type: 'candlestick',
    //                 height: 350
    //             },
    //             title: {
    //                 text: 'CandleStick Chart',
    //                 align: 'left'
    //             },
    //             xaxis: {
    //                 type: 'datetime'
    //             },
    //             yaxis: {
    //                 tooltip: {
    //                     enabled: true
    //                 }
    //             }
    //         },
    //         series: [{
    //             data: convertRawData(rawData)
    //         }]
    //     })
    // })

    return (
        <CandlestickChart rawData={exampleData}></CandlestickChart>
    )

}

export default ExampleContainer;