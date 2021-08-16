/* WIP
Component by Carlos Galvan Jr.
This component renders a styled card with chart js
*/
import { Doughnut } from "react-chartjs-2";
// import "../../layout.css";
import React, { useState } from "react";
import { Card } from "antd";
export const PortfolioCard = (trans) => {
  const [state, setstate] = useState({ ...trans.transaction });

  // const [label, setLabel] = useState({ ...labels });

  /*   const beforeDrawFn = () => {
    const chart = this.canvas.getContext('2d');
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
  };
  const plugins = {
    plugins: [
      {
        beforeDraw: beforeDrawFn()
      }
    ]
  }; */

  const innerTitle = () => {
    return state.ticker;
  };

  //chart js set up
  const options = {
    cutout: 120,
    responsive: true,
    elements: {
      center: {
        text: state.ticker  ,
        color: '#FFF', // Default is #000000
        fontStyle: 'Inter', // Default is Arial
        sidePadding: 20, // Default is 20 (as a percentage)
        minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
        lineHeight: 25 // Default is 25 (in px), used for when text wraps
      }
    },
    plugins: {
      title: {
        display: false,
        text: state?.ticker, //Ticker
        align: "center",
        position: "bottom",

        padding: {
          // top: 10,
          // bottom: 30
        },
      },
      legend: {
        display: false,
        labels: {
          color: "rgb(150, 251, 0)",
        },
      },
    },
  };

  //shareAmount: 100.0,
  // sharePrice: 200.0,
  const labels = ["Share Amount", "Share Price"]; //THIS
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: [
          "rgb(255, 201, 20)",
          "rgb(23, 137, 252)",
          "rgb(255, 205, 86)",
        ], //here
        borderColor: [
          "rgb(255, 201, 20)",
          "rgb(23, 137, 252)",
          "rgb(255, 205, 86)",
        ], //here
        data: [state.shareAmount, state.sharePrice], //THIS
      },
    ],
  };

  // const config = {
  //   type: "doughnut",
  //   data: data,
  //   options: options,
  // };
  /*   const plugins = [
    {
      beforeDraw: function (chart) {
        let width = chart.width;
        let height = chart.height;
        let ctx = chart.ctx;
        console.log("Chart: " + chart)
        ctx.restore();
        let fontSize = (height / 50).toFixed(2);
        // ctx.color = "White";
        ctx.fillStyle = '#FFF';
        ctx.font = fontSize + "em helvetica";
        ctx.textBaseline = "top";
        let text = innerTitle(),
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ]; */

  const plugins = [
    {
      beforeDraw: function (chart) {
        if (chart.config.options.elements.center) {
          // Get ctx from string
          let ctx = chart.ctx;
          // alert(chart)

          // Get options from the center object in options
          var centerConfig = chart.config.options.elements.center;
          var fontStyle = centerConfig.fontStyle || "Arial";
          var txt = centerConfig.text;
          var color = centerConfig.color || "#000";
          var maxFontSize = centerConfig.maxFontSize || 75;
          var sidePadding = centerConfig.sidePadding || 20;
          var sidePaddingCalculated =
            (sidePadding / 100) * (chart.innerRadius * 2);
          // Start with a base font of 30px
          ctx.font = "75px " + fontStyle;

          
          // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
          var stringWidth = ctx.measureText(txt).width;
          var elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

          // Find out how much the font can grow in width.
          var widthRatio = elementWidth / stringWidth;
          var newFontSize = Math.floor(30 * widthRatio);
          var elementHeight = chart.innerRadius * 2;

          // Pick a new font size so it will not be larger than the height of label.
          var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
          var minFontSize = centerConfig.minFontSize;
          var lineHeight = centerConfig.lineHeight || 25;
          var wrapText = false;

          if (minFontSize === undefined) {
            minFontSize = 20;
          }

          if (minFontSize && fontSizeToUse < minFontSize) {
            fontSizeToUse = minFontSize;
            wrapText = true;
          }

          // Set font settings to draw it correctly.
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
          var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
          ctx.font = fontSizeToUse + "px " + fontStyle;
          ctx.fillStyle = color;

          if (!wrapText) {
            ctx.fillText(txt, centerX, centerY);
            return;
          }

          var words = txt.split(" ");
          var line = "";
          var lines = [];

          // Break words up into multiple lines if necessary
          for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + " ";
            var metrics = ctx.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > elementWidth && n > 0) {
              lines.push(line);
              line = words[n] + " ";
            } else {
              line = testLine;
            }
          }

          // Move the center up depending on line height and number of lines
          centerY -= (lines.length / 2) * lineHeight;

          for (let n = 0; n < lines.length; n++) {
            ctx.fillText(lines[n], centerX, centerY);
            centerY += lineHeight;
          }
          //Draw text in center
          ctx.fillText(line, centerX, centerY);


          ctx.save();
        }
      },
    },
  ];

  return (
    <>
      {console.log(state)}
      <div className="site-card-border-less-wrapper">
        <Card bordered={false} style={{ width: 300 }} className="card-body">
          <h1 className='card-header'>@Username</h1>
          <div className='chart-container'>
            <Doughnut
              type="doughnut"
              data={data}
              options={options}
              plugins={plugins}
              className="zoom"
            />
          </div>
          <h2 className="card-header">$118.99</h2>
        </Card>
      </div>
      {/* <chart></chart> */}
    </>
  );
};

//added
export default PortfolioCard;