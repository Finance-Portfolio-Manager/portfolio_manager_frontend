import Card from "react-bootstrap/Card";
import LogoImage from "./images/logo-white.svg";


export default function LogoCard(){
    return (
        <Card id="logo-card" className="border border-0 logoApp m-3">
            <Card.Body id="logo">
                <Card.Img src={LogoImage} alt="logo"></Card.Img>
                <Card.Text className="d-flex justify-content-center" id="appName">APEX STOCKS</Card.Text>
            </Card.Body>
        </Card>
    );
}