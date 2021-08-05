import { chart } from "./PortfolioCard";
import { Doughnut } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import { Card } from "antd";
export const PortfolioCard = (trans, labels) => {
  const [state, setstate] = useState({ ...trans.transaction });
  const [label, setLabel] = useState({...labels});


 /*  const plugins = {
    plugins: [{
        beforeDraw: beforeDrawFn()
    }]};
  const beforeDrawFn = (chart) => {
    let width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    ctx.restore();
    let fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    let text = "75%",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  } */



  //chart js set up
  const options =  {
    cutout: 99,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: state?.ticker,//Ticker
        align: 'center',
        position: 'bottom',
        
        padding: {
          // top: 10,
          // bottom: 30
      }
    },
        legend: {
            display: false,
            labels: {
                color: 'rgb(150, 251, 0)'
            }
        }
    }
  };

  //shareAmount: 100.0,
  // sharePrice: 200.0,
  // const labels = ["Share Amount", "Share Price"];//THIS
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],//here
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ], //here
        data: [state.shareAmount, state.sharePrice],//THIS
      },
    ],
    
    
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: options
  };

  return (
    <>
      {console.log(state)}
      <div className="site-card-border-less-wrapper">
        <Card bordered={false} style={{ width: 300 }}>
          <div>
            <Doughnut data={data} options={options} 
            
            />
          </div>
        </Card>
      </div>
      {/* <chart></chart> */}
    </>
  );
};
