import { Doughnut } from "react-chartjs-2";

export default function PublicDoughnutChart(props){
    const data = {
        labels: props.portfolio.stocks.map((stock) => stock.symbol),
        datasets: [
            {
                label: 'Portfolio values',
                data: props.portfolio.stocks.map((stock) => (stock.quantity * stock.currentPrice)/props.portfolio.value*100),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                  ],
                  borderWidth: 1,
            },
        ],
    };
    

    return (
        <div>
            <Doughnut data={data} />
        </div>
    );
}