import Card from "react-bootstrap/Card";

export default function AboutCard(){
    return (
        <Card id="about-card" className="title border-0" data-testid="todo-1" className='primary-text'>
            <Card.Body>
                <Card.Title id="aboutTitle">About</Card.Title>
                <Card.Text id="aboutPart">With Apex Stocks, users can track their investments over time in one central location. 
                Users may create one or more portfolios to visualize their profit and loss across all their investments. 
                With our favorite's feature, users can measure gains and losses against other investors to get a feel for how 
                others are navigating the markets. Sign up and give it a try today!</Card.Text>
            </Card.Body>
        </Card>
    );
}