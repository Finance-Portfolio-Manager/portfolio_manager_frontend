import Card from "react-bootstrap/Card";

export default function AboutCard(){
    return (
        <Card id="about-card" className="title border-0">
            <Card.Body>
                <Card.Title>About</Card.Title>
                <Card.Text>Portfolio Manager was designed to be a central location for users to track their stock positions. 
                    Allows users to enter their stock purchases and sales, which will be reflected in our portfolio, showing stock 
                    specific and overall gains and losses. Leverages Yahoo Finance API to produce real-time stock details. 
                    Ensured application security by leveraging JSON Web Tokens and partial integration of Spring Security.</Card.Text>
            </Card.Body>
        </Card>
    );
}