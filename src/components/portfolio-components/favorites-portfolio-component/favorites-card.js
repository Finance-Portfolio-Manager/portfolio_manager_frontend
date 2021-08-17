import { Card } from 'reactstrap';

export default function FavoritesCard(props) {
    return(
        <Col sm="4">
            
            <Card>
                <Card.Body>
                    <Card.Title tag="h4">{props.portfolio.name}</Card.Title>
                    <Card.Text>
                        <div>
                            <p>{`$${props.portfolio.value}`}</p>
                            <DoughnutChart user={props.user} portfolio={props.portfolio}/>
                        </div>
                    </Card.Text>
                    <Button variant="primary" onClick={props.setDisplayPortfolio}>Details</Button>
                </Card.Body>
            </Card>
        </Col>
        );

}