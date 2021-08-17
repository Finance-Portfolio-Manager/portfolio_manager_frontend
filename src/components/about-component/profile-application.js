import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import IndividualComponent from "./individual-profile";
import { useState } from "react";
import captain from "./teams.json";

export default function ProfileComponent(){
    const [buttonName, setButtonName] = useState("");
    const [id, setId] = useState("");


let idValue="";
const onButtonClick = (e)=>{
    idValue = e.target.id;
    setButtonName(e.target.id);
    setId(e.target.id);
}

    return (
        <Container>
            <p className="d-flex flex-column w-50 meetTeam justify-content-center mx-auto lead fw-bolder text-white" id="meet">Meet Our Team</p>
            <hr className="text-white"></hr>
            <section id="profiles">
                        <div id="individual" className="card border-0 d-flex flex-column captainProfile justify-content-center mx-auto my-4">
                            <div><a href={captain.head.profileLink} target="_blank" className="text-decoration-none text-white"><img src={captain.head.profileImage} className="headImage"></img></a></div>
                                    <hr></hr>
                                <Card.Body>
                                    <p>Carolyn Rehm</p>
                                </Card.Body>
                        </div>
                <br></br>
                <Row>
                    <Col className="teams m-3">
                    <Button className="team-button border-0" id="team1" onClick={onButtonClick}>Team1</Button>
                    </Col>
                    <Col className="teams m-3">
                    <Button className="team-button border-0" id="team2" onClick={onButtonClick}>Team2</Button>
                    </Col>
                    <Col className="teams m-3">
                    <Button className="team-button border-0" id="team3" onClick={onButtonClick}>Team3</Button>
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