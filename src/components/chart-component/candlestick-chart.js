import Chart from "react-apexcharts";
import React from "react";
import {convertRawData} from "./chart-util.js";

function CandlestickChart(props) {
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
                            data: convertRawData(props.rawData)
                        }]}
                        type="candlestick"
                        width={props.width}
                    />
                </div>
            </div>
        </div>
    );

}

export default CandlestickChart;
