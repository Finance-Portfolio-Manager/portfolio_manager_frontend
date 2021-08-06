import React from 'react';
import { Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';
import {Doughnut} from 'react-chartjs-2';

function DoughnutData(props){
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

function RenderCard(props){
    return(
            <Col sm="4">
                <Card>
                    <CardBody>
                        <CardTitle tag="h4">{props.user.username}</CardTitle>
                        <CardText>
                            <div>
                                <p>{props.user.percentage}</p>
                                <p>{props.user.profile}</p>
                                <DoughnutData user={props.user} labels={props.user}/>
                            </div>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
    );
}

function Home(props){
    const cards = props.users.map(user => {
        return(
            // <div className="col-3">
            <RenderCard user = {user}/>
            // {/* </div> */}
        );
    });

    return (
        <div className="container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className="row">
                <h2>Your Favorite Portfolios</h2>
                <div className="row py-3" style={{borderStyle: "solid"}}>
                    {cards}
                </div>
            </div>
        </div>
    )
    
}

export default Home;
