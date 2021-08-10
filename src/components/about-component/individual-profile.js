import { Card } from "react-bootstrap";
import { BsPersonFill } from "react-icons/bs";
import team from "./teams.json";


export default function IndividualComponent(props){
    switch(props.buttonNameValue){
        case 'team1':
            return (
                <div className="profile d-flex flex-wrap flex-fill justify-content-center">
                    {team.team1.map((team) => (
                        <div id="individual" className="card m-4 border-0">
                            <a href={team.profileLink} target="_blank" className="text-decoration-none text-white">{team.profileImage
                                ? <div><img src={team.profileImage} className="images"></img></div>
                                : <div><BsPersonFill size={100}/></div>
                            }</a>
                                    <hr></hr>
                                <Card.Body>
                                    <p>{team.name}</p>
                                </Card.Body>
                        </div>
                    ))}
               </div>
            );
 
        case 'team2':
            return (
                <div className="profile d-flex flex-wrap flex-fill justify-content-center">
                    {team.team2.map((team) => (
                        <div id="individual" className="card m-4 border-0">
                           <a href={team.profileLink} target="_blank" className="text-decoration-none text-white">{team.profileImage
                                ? <div><img src={team.profileImage} className="images"></img></div>
                                : <div><BsPersonFill size={100}/></div>
                            }</a>
                                    <hr></hr>
                                    <Card.Body>
                                        <p>{team.name}</p>
                                    </Card.Body>
                        </div>
                    ))}
               </div>
            );
        case 'team3':
            return (
                <div className="profile d-flex flex-wrap flex-fill justify-content-center">
                    {team.team3.map((team) => (
                        <div id="individual" className="card m-4 border-0">
                             <a href={team.profileLink} target="_blank" className="text-decoration-none text-white">{team.profileImage
                                ? <div><img src={team.profileImage} className="images"></img></div>
                                : <div><BsPersonFill size={100}/></div>
                            }</a>
                                    <hr></hr>
                                    <Card.Body>
                                        <p>{team.name}</p>
                                    </Card.Body>
                        </div>
                    ))}
               </div>
            );
        default:
            return null;
    }   
}