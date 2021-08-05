import Chart from "react-apexcharts";
import React from "react";
import {convertRawData} from "./util.js";
import {useState} from "react";

import exampleData from "../../exampleData/example-IBM-daily.json";
import axios from "axios";

function ExampleCandle(props) {

    // const [state, setState] = useState({
    //     options: {
    //         chart: {
    //             type: 'candlestick',
    //             height: 350
    //         },
    //         title: {
    //             text: 'CandleStick Chart',
    //             align: 'left'
    //         },
    //         xaxis: {
    //             type: 'datetime'
    //         },
    //         yaxis: {
    //             tooltip: {
    //                 enabled: true
    //             }
    //         }
    //     },
    //     series: [{
    //         data: convertRawData(exampleData)
    //     }]
    // });

    const [state, setState] = useState({});

    axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=JPGYN8LH3C332EGE")
    .then(response => {
        return response.data;
    }).then(rawData => {
        setState({

            options: {
                chart: {
                    type: 'candlestick',
                    height: 350
                },
                title: {
                    text: 'CandleStick Chart',
                    align: 'left'
                },
                xaxis: {
                    type: 'datetime'
                },
                yaxis: {
                    tooltip: {
                        enabled: true
                    }
                }
            },
            series: [{
                data: convertRawData(rawData)
            }]
    
        })
    })

    return (
        <div className="example">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="candlestick"
                        width="500"
                    />
                </div>
            </div>
        </div>
    );

}

export default ExampleCandle;
