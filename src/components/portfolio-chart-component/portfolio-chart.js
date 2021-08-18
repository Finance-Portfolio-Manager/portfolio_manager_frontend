import Chart from "react-apexcharts";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import PortfolioChartComponent from "./portfolio-component";
import { PingApiBalancesChart } from "../ServerRequest";

function PortfolioChart(props){    

    const [totalInvested, setInvested] = useState([]);
    const [totalValue, setValue] = useState([]);
    const [xAxis, setXAxis] = useState([]);

    useEffect(()=>{

        //THIS IS FOR 7 DAY TIME PERIOD, CONFIG FOR CHART TIME FRAME NEEDS WORK
        PingApiBalancesChart(props.portfolioId).then(response=>{  
            const invested = [];
            const value = [];
            const time = [];
            for(var i = 0;i<response.length;i++){
                if(response[i].balanceType === "i"){
                    invested.push(response[i].balance);
                    time.push(response[i].date);
                    console.log(time);
                }
                if(response[i].balanceType === "c"){
                    value.push(response[i].balance);
                }
            }
            setValue(value.reverse());
            setInvested(invested.reverse());
            setXAxis(time.reverse());
        })
        .catch(function (error) {
        })
             
    },[]);



    return (<PortfolioChartComponent totalValue={totalValue} totalInvested={totalInvested} xAxis={xAxis}></PortfolioChartComponent>)}  

export default PortfolioChart;