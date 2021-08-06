import Chart from "react-apexcharts";
import React from "react";

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
                                text: props.symbolName,
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
                            data: props.seriesData
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
