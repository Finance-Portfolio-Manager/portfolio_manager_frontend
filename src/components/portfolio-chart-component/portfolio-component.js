import ChartComponent from './portfolio-chart';
import React, { Component } from "react";
import Chart from "react-apexcharts";


function PortfolioChartComponent(props) {

    let invArray = props.totalInvested;
    let valArray = props.totalValue;
    // invArray.reverse();
    console.log(invArray);
    console.log(valArray);
    // const today = new Date();
    // let yesterday = new Date(today);
    // yesterday.setDate(yesterday.getDate() - 1);
    // console.log(today.getDay());
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

    // console.log(chartTime.values);
    // console.log(chartTime[timeFrame])

    const state = {
            
            series: [{
                name: "Portfolio Value",
                data: valArray
            },
            {
                name: "Amount Invested",
                data: invArray
             } ,
            ],
            options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                enabled: false
                },
            },
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