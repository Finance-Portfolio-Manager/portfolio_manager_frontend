import Chart from "react-apexcharts";
import React from "react";

function PortfolioChart(props){    
    return ( 
        <div className="example">
            <div className="row">
                <div className="mixed-chart">
                    <Chart options={props.options}></Chart>
               </div>
            </div>
        </div>
   
    // var chart = new Chart(document.querySelector("#chart"), options);
    // chart.render(); 
    
)}  
export default PortfolioChart;