import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Icon from "./images/icon-images/icon1.jpg"


export default function IndividualComponent(props){
    console.log(props);
    const team1 = [
        {"name": "t1name1", "profileLink":"t1link1"},
        {"name": "t1name2", "profileLink":"link2"},
        {"name": "t1name3", "profileLink":"link3"},
        {"name": "t1name4", "profileLink":"link4"},
        {"name": "t1name5", "profileLink":"link5"},
        {"name": "t1name6", "profileLink":"link6"}
    ];
    const team2 = [
        {"name": "t2name1", "profileLink":"t2link1"},
        {"name": "t2name2", "profileLink":"link2"},
        {"name": "t2name3", "profileLink":"link3"},
        {"name": "t2name4", "profileLink":"link4"},
        {"name": "t2name5", "profileLink":"link5"},
        {"name": "t2name6", "profileLink":"link6"}
    ];
    const team3 = [
        {"name": "t3name1", "profileLink":"t3link1"},
        {"name": "t3name2", "profileLink":"link2"},
        {"name": "t3name3", "profileLink":"link3"},
        {"name": "t3name4", "profileLink":"link4"},
        {"name": "t3name5", "profileLink":"link5"},
        {"name": "t3name6", "profileLink":"link6"}
    ];
    console.log(props.buttonNameValue);
    switch(props.buttonNameValue){
        case 'team1':
            console.log("team1");
            return (
                <Container>
                    {team1.map((team) => (
                        <Card id="individual" className="">
                                <Card.Img variant="top" src={Icon} className="bi bi-person-fill" alt={team.name}></Card.Img>
                                {/* <i className="bi bi-person-fill" style={{fontSize:'10rem'}}></i> */}
                                    <hr></hr>
                                <Card.Body>{team.profileLink}</Card.Body>
                        </Card>
                    ))}
               </Container>
            );
        case 'team2':
            return (
                <Container>
                    {team2.map((team) => (
                        <Card id="individual">
                                <Card.Img variant="top" alt={team.name}></Card.Img>
                                    <hr></hr>
                                <Card.Body>{team.profileLink}</Card.Body>
                        </Card>
                    ))}
               </Container>
            );
        case 'team3':
            return (
                <Container>
                    {team3.map((team) => (
                        <Card id="individual">
                                <Card.Img variant="top" alt={team.name}></Card.Img>
                                    <hr></hr>
                                <Card.Body>{team.profileLink}</Card.Body>
                        </Card>
                    ))}
               </Container>
            );
        default:
            return null;
    }   
}