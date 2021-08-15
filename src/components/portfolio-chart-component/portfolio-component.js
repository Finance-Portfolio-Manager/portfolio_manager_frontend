import ChartComponent from './portfolio-chart';
import React, { Component } from "react";
import Chart from "react-apexcharts";


function PortfolioChartComponent(props) {

    const today = new Date();
    let yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    console.log(today.getDay());
    // console.log(today.getDay());
    // console.log(yesterday.getDay());

    //need to pass in number of days as chart time frame
    const timeFrame = 7;
    let dayCount = 0;
    var chartTime = ["Aug 1", "Aug 2", "Aug 3", "Aug 4", "Aug 5", "Aug 6", "Aug 7"];
    // for(let i=timeFrame;i>0;i--){
    //     chartTime[i]=(today.getDay()+(1-dayCount));
    //     dayCount++;
    // }

    console.log(chartTime.values);
    console.log(chartTime[timeFrame])

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const state = {
            
            series: [{
                name: "Portfolio Value",
                data: [4263.25, 4567.25, 4583.25, 4363.25, 3863.15, 4343.77, 4168.25]
            },
            {
                name: "Amount Invested",
                data: [3963.25, 4162.77, 4081.77, 4363.25, 4663.25, 4863.25, 4063.25]
            }
            //   ,
            //   {
            //     name: 'Total Visits',
            //     data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
            //   }
            ],
            options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                enabled: false
                },
            },
            // dataLabels: {
            //     enabled: false
            // },
        //    style: {
        //         offsetX: false
        //     },
            stroke: {
                width: [5, 7],
                curve: 'straight',
                dashArray: [0, 8]
            },
            title: {
                text: 'Portfolio Statistics',
                align: 'center'
            },
            legend: {
                tooltipHoverFormatter: function(val, opts) {
                return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                }
            },
            markers: {
                size: 0,
                hover: {
                sizeOffset: 6
                }
            },
            xaxis: {
                type: 'category',
                categories: chartTime,
                // tickAmount: 'dataPoints',
                // tickPlacement: 'on',
                // min: chartTime[0],
                // max: chartTime[timeFrame],
                // floating: false,
                // range: timeFrame,
                // overwriteCategories: chartTime,
            },
            tooltip: {
                y: [
                {
                    title: {
                    formatter: function (val) {
                        return val;
                    }
                    }
                },
                {
                    title: {
                    formatter: function (val) {
                        return val;
                    }
                    }
                },
                //   {
                //     title: {
                //       formatter: function (val) {
                //         return val;
                //       }
                //     }
                //   }
                ]
            },
            grid: {
                borderColor: '#f1f1f1',
            }
            },
        
        
        };
      
        return (
                <div id="chart">
                    <Chart options={state.options} series={state.series} type="line" height={350} width={800} />
                </div>
            );


    }
export default PortfolioChartComponent;