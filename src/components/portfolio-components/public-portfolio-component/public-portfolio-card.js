import {Col, Card, Button} from "react-bootstrap";
import PublicDoughnutChart from "../doughnut-chart-component/public-doughnut-chart";


export default function PublicPortfolioCard(props){
    
    //TODO: Have Doughnut chart show percentages instead of total values?
    return(
        <Col sm={6} lg={4} >
            <Card className='global__card text-center primary-text mb-3'>
                <Card.Body>
                    <Card.Title tag="h4" className='primary-text'>{props.portfolio.name}</Card.Title>
                    <Card.Text>
                        <div>
                            <p>Owned by {props.user}</p>
                            <PublicDoughnutChart user={props.user} portfolio={props.portfolio}/>
                        </div>
                    </Card.Text>
                    <Button variant="primary" className='global__button-effect' onClick={props.toggleShowDetails}>Details</Button>
                    <Button variant="primary" style={{margin:"5px"}} onClick={props.addToFavorites}>Add to Favorites</Button>
                </Card.Body>
            </Card>
        </Col>
        );
}