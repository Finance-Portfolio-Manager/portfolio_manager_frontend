import React from "react";
import { Card } from "react-bootstrap";
import { Button, Image, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Portfolio from "./portfolio-component";

//TODO: This image replaces where the chart will eventually be
import exampleImg from "./exampleimg.svg";

export default function PortfolioCard(props){


    const [showDetails, setShowDetails] = useState(true);

    function toggleShowDetails(){
        setShowDetails(!showDetails)
    }


    //Dynamically renders either a portfolio card or a portfolio table component based on whether or not
    //the user clicked the button
    return (
        <>
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
        </Row>
        : 
        <Row>        
            <Col xs={6} md={2}>
                <Image src={exampleImg} rounded />
            </Col>
            <Col>
                <Portfolio portfolioId={props.portfolio.id} toggleShowDetails={toggleShowDetails}/>
            </Col>
            <Col md={2}/>
        </Row>
        }
        </>
    )
}