import {Col, Card, Button} from 'react-bootstrap';
import DoughnutChart from '../doughnut-chart-component/doughnut-chart';


export default function PrivatePortfolioCard(props){

    return(
    <Col sm="4">
        
        <Card className='global__card  primary-text '>
            <Card.Body>
                <Card.Title tag="h4" className='primary-text'>{props.portfolio.name}</Card.Title>
                <Card.Text>
                    <div>
                        <p>{`$${props.portfolio.value}`}</p>
                        <DoughnutChart user={props.user} portfolio={props.portfolio}/>
                    </div>
                </Card.Text>
                <Button variant="primary" className='global__button-effect' onClick={props.setDisplayPortfolio}>Details</Button>
            </Card.Body>
        </Card>
    </Col>
    );
}