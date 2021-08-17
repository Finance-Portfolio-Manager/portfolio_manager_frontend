import Chart from "react-apexcharts";

function GenericChart(props) {
    return (
        <div className="example">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={{
                            chart: {
                                // type: 'candlestick',
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
                        
                        type={props.type}
                        width={props.width}
                    />
                </div>
            </div>
        </div>
    );

}

export default GenericChart;
