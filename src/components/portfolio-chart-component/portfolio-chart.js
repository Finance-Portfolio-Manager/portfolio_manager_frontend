import Chart from "react-apexcharts";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

function PortfolioChart(props){    


    const [loggedIn, setLoggedIn] = useState();

    useEffect(()=>{

        axios.get(process.env.REACT_APP_API_URL+"/balances/11", {
            headers:
            {'Authorization':sessionStorage.getItem("Authorization")}
        })
        .then(response=>{      
            console.log(response);
        })
        .catch(function (error) {
        })
             
    },[]);



    return ( 
        <div>test</div>
        // <div className="example">
        //     <div className="row">
        //         <div className="mixed-chart">
        //             <Chart options={props.options}></Chart>
        //        </div>
        //     </div>
        // </div>
   
    // var chart = new Chart(document.querySelector("#chart"), options);
    // chart.render(); 
    
)}  
export default PortfolioChart;