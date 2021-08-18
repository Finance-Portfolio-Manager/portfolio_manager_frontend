import Card from "react-bootstrap/Card";
import { Logo } from "../styled-components/logo/Logo";
import LogoImage from "./images/logo-white.svg";


export default function LogoCard(){
    return (
        <Card id="logo-card" className="border border-0 logoApp m-3 accent-text">
            <Card.Body id="logo">
                <Logo />
                <Card.Text className="d-flex justify-content-center" id="appName">APEX STOCKS</Card.Text>
            </Card.Body>
        </Card>
    );
}