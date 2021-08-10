import Card from "react-bootstrap/Card";


export default function LogoCard(props){
    return (
        <Card id="logo-card" className="border border-4 logoApp m-3">
            <Card.Body>
                <Card.Img alt="logo"></Card.Img>
                <Card.Text>Application Name</Card.Text>
            </Card.Body>
        </Card>
    );
}