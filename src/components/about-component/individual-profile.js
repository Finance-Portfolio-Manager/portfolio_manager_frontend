import { Card } from "react-bootstrap";
import { BsPersonFill } from "react-icons/bs";
import team from "./teams.json";


export default function IndividualComponent(props){

    const createCard = (team)=>{
        return(
        <div id="individual" className="card my-2 border-0 mx-auto">
                <a href={team.profileLink} target="_blank" className="text-white d-flex flex-fill justify-content-center">{team.profileImage
                    ? <div><img src={team.profileImage} className="images"></img></div>
                    : <div><BsPersonFill size={100}/></div>
                }</a>
                <hr></hr>
                <Card.Body>
                <p className='primary-text'>{team.name}</p>
                </Card.Body>
        </div>
        )
    }
    switch(props.buttonNameValue){
        case 'team1':
            return (
                <div className="profile d-flex flex-wrap flex-fill justify-content-center">
                    {team.team1.map((team) => (
                        createCard(team)
                    ))}
               </div>
            );
 
        case 'team2':
            return (
                <div className="profile d-flex flex-wrap flex-fill justify-content-center">
                    {team.team2.map((team) => (
                        createCard(team)
                    ))}
               </div>
            );
        case 'team3':
            return (
                <div className="profile d-flex flex-wrap flex-fill justify-content-center">
                    {team.team3.map((team) => (
                        createCard(team)
                    ))}
               </div>
            );
        default:
            return null;
    }   
}