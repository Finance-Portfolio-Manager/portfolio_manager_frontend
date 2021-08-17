import {Col, Card, Button} from "react-bootstrap";
import PublicDoughnutChart from "../doughnut-chart-component/public-doughnut-chart";


export default function PublicPortfolioCard(props){
    
    //TODO: Have Doughnut chart show percentages instead of total values?
    return(
        <Col sm="4">
            <Card>
                <Card.Body>
                    <Card.Title tag="h4">{props.portfolio.name}</Card.Title>
                    <Card.Text>
                        <div>
                            <p>Owned by {props.user}</p>
                            <PublicDoughnutChart user={props.user} portfolio={props.portfolio}/>
                        </div>
                    </Card.Text>
                    <Button variant="primary" onClick={props.toggleShowDetails}>Details</Button>
                </Card.Body>
            </Card>
        </Col>
        );
}