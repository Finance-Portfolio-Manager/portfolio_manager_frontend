import React from "react";
import { Card } from "react-bootstrap";
import { Button, Image, Row, Col } from "react-bootstrap";
import { useState } from "react";
import PortfolioView from "./portfolio-view-component";

//TODO: This image replaces where the chart will eventually be
import exampleImg from "./exampleimg.svg";

export default function PortfolioCard(props){


    const [showDetails, setShowDetails] = useState(true);

    function toggleShowDetails(){
        setShowDetails(!showDetails)
    }

    //TODO: This is a dummy object that will be retrieved from props when that functionality exists
    let stock1 = {stockName:"Amazon", stockQuantity:10, stockAveragePrice:3300, stockCurrentPrice:3400, stockChange:8};
    let stock2 = {stockName:"Tesla", stockQuantity:15, stockAveragePrice:700, stockCurrentPrice:715, stockChange:2};
    let stock3 = {stockName:"AMC", stockQuantity:20, stockAveragePrice:10, stockCurrentPrice:33, stockChange:230};
    let stockList = [stock1, stock2, stock3];

    return (
        <>
        {/* <div className="container my-3"><div className="card">
            <div className="card-header py-3"></div>
            <div className="card-body">
                <div className="col-2">
                    <a href="TODO link to details" id="cardLink"><h5 className="card-title">{props.portfolio.name}</h5></a>
                </div>
                <div className="container">
                    <p>TODO: add details about portfolio</p>
                    <p>Value: ${props.portfolio.value}</p>
                </div>
            </div>
            <div className="card-footer py-3"></div>
        </div></div>
        </> */}
        
        {showDetails ? 
        <Row>
            <Col xs={6} md={2}>
                <Image src={exampleImg} rounded />
            </Col>
            <Col>
                <Card className="center" style={{ width: '50rem', border: '2px solid #F26925'}}>
                <Card.Img variant="top" />
                <Card.Body>
                    <Card.Title>{props.portfolio.name}</Card.Title>
                    <Card.Text>
                    Current value: {props.portfolio.value} %change placeholder
                    </Card.Text>
                    <Button variant="primary" onClick={toggleShowDetails}>Details</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col md={2}/>
        </Row>:
        <> 
        <Row>        
            <Col xs={6} md={2}>
                <Image src={exampleImg} rounded />
            </Col>
            <Col>
            <PortfolioView tableRows={stockList} toggleShowDetails={toggleShowDetails}/>
            </Col>
            <Col md={2}/>
        </Row>
      </>}

        {/* <Card style={{ width: '20rem' }}>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card> */}

        {/* <Button variant="secondary">This is outside the card</Button> */}
        </>
    )
}