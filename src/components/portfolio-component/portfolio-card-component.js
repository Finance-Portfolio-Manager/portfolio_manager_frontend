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
                <Image src={exampleImg} rounded className="mx-5"/>
            </Col>
            <Col>
                <Card className="center border border-3 secondary-text m-3" style={{ width: '50rem'}}>
                <Card.Img variant="top" />
                <Card.Body className="secondary-color">
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
                <Image src={exampleImg} rounded  className="mx-5" />
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
