// import { Button } from "bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import IndividualComponent from "./individual-profile";
import { useState } from "react";
import Icon from "../images/icon-images/icon.png";
import Women from "../images/women1.jpg";

export default function ProfileComponent(){
    const [buttonName, setButtonName] = useState("");
    const [id, setId] = useState("");


let idValue="";
const onButtonClick = (e)=>{
    idValue = e.target.id;
    setButtonName(e.target.id);
    console.log(e);
    setId(1);
}

    return (
        <Container>
            <h2 id="meet">Meet Our Team</h2>
            <hr id="line"></hr>
            <section id="profiles">
                <Row>
                <Card id="profile-1-card">
                    <Card.Img src={Women} alt="Captain Image"></Card.Img>
                    <hr></hr>
                    <Card.Body>Team Captain</Card.Body>
                </Card>
                </Row>
                <br></br>
                <Row>
                    <Col className="teams">
                    <Button  variant="dark" className="team-button" id="team1" onClick={onButtonClick}>Team1</Button>
                    </Col>
                    <Col className="teams">
                    <Button  variant="dark" className="team-button" id="team2" onClick={onButtonClick}>Team2</Button>
                    </Col>
                    <Col className="teams">
                    <Button  variant="dark" className="team-button" id="team3" onClick={onButtonClick}>Team3</Button>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <IndividualComponent key={id} buttonNameValue ={buttonName}></IndividualComponent>
                </Row>
            </section>
        </Container>
    );
}