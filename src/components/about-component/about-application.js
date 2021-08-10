import Card from "react-bootstrap/Card";

export default function AboutCard(){
    return (
        <Card id="about-card" className="title border-0">
            <Card.Body>
                <Card.Title>About</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Sed mattis a nulla sit amet euismod. Sed congue ut ligula eu faucibus. 
                    Nulla at mi ut nulla placerat ornare ac sit amet dolor. Morbi laoreet commodo luctus. 
                    Morbi placerat efficitur velit, nec convallis mi vestibulum ut. Morbi nisl nulla, vulputate quis rutrum ut, euismod eu risus. 
                    Vivamus accumsan scelerisque pharetra..</Card.Text>
            </Card.Body>
        </Card>
    );
}