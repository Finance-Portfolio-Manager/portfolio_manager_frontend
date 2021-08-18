import { Doughnut } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import {
  themeSelection,
  themeVersions,
} from "../../styled-components/styles/Themes";

export default function DoughnutChart(props) {

    //This code block updates the font color for chart js
//   const [fillColor, setFillColor] = useState("#fff");
  const [theme, setTheme] = useState(themeSelection[0]);
  const updateColor = () => {
    let name = localStorage.getItem("theme") || "light";
    let themePack =
      themeSelection.find((element) => element.version === name) ||
      themeSelection[0];
    // console.log("theme>>>" + themePack);
    setTheme(themePack);
  };
  useEffect(() => {
    updateColor();
  }, [ updateColor]);

  
  const data = {
    labels: props.portfolio.stocks.map((stock) => stock.symbol),
    datasets: [
      {
        label: "Portfolio values",
        data: props.portfolio.stocks.map(
          (stock) => stock.quantity * stock.currentPrice
        ),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          color: theme.themePack.primaryText,
        },
      },
    },
  };
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
}
