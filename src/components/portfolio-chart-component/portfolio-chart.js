import Chart from "react-apexcharts";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import PortfolioChartComponent from "./portfolio-component";
import { unstable_concurrentAct } from "react-dom/cjs/react-dom-test-utils.production.min";

function PortfolioChart(props){    

    const [totalInvested, setInvested] = useState([]);
    const [totalValue, setValue] = useState([]);
    const [xAxis, setXAxis] = useState([]);

    useEffect(()=>{

        //THIS IS FOR 7 DAY TIME PERIOD, CONFIG FOR CHART TIME FRAME NEEDS WORK
        axios.get(process.env.REACT_APP_API_URL+`/balances/daily/${props.portfolioId}`, {
            headers:
            {'Authorization':sessionStorage.getItem("Authorization")}
        })
        .then(response=>{  
            const invested = [];
            const value = [];
            const time = [];
            for(var i = 0;i<response.data.length;i++){
                if(response.data[i].balanceType === "i" && invested.length<7){
                    invested.push(response.data[i].balance);
                    time.push(response.data[i].date);
                    console.log(time);
                }
                if(response.data[i].balanceType === "c" && value.length<7){
                    value.push(response.data[i].balance);
                }
                console.log(response.data);
            }
            setValue(value.reverse());
            setInvested(invested.reverse());
            // setXAxis(time.reverse());
        })
        .catch(function (error) {
        })
             
    },[]);



    return (<PortfolioChartComponent totalValue={totalValue} totalInvested={totalInvested} xAxis={xAxis}></PortfolioChartComponent>)}  

export default PortfolioChart;