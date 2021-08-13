import React from 'react';
import { Card, CardBody, CardText, CardTitle} from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';

function DoughnutData(props) {
    const data = {
        labels: props.user.labels,
        datasets: [
            {
                label: '# of votes',
                data: props.user.percentage,
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

function RenderCard(props) {
    return (
        <Card className="primary-color m-3">
            <CardBody>
                <CardTitle tag="h4">{props.user.username}</CardTitle>
                <CardText>
                    <span>{props.user.percentage}</span>
                    <span>{props.user.profile}</span>
                </CardText>
                <DoughnutData user={props.user} labels={props.user} />
            </CardBody>
        </Card>
    );
}

function Home(props) {
    const cards = props.users.map((user,index) => {
        return (
            <RenderCard key={"userportfolio"+index} user={user} />
        );
    });

    return (
        <div className="d-flex flex-column align-items-center w-75 mx-auto my-3">
            <div className="h2">Your Favorite Portfolios</div>
            <div className="d-flex border border-3">
                {cards}
            </div>
        </div>
    )

}

export default Home;