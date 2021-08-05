import Chart from "react-apexcharts";
import React from "react";
import {convertRawData} from "./util.js";

function CandlestickChart(props) {

    let stockData = props.rawData;

    return (
        <div className="example">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={{
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
                        }}

                        series={[{
                            data: convertRawData(JSON.stringify(stockData))
                        }]}
                        type="candlestick"
                        width="500"

                    />
                </div>
            </div>
        </div>
    );

}

export default CandlestickChart;
