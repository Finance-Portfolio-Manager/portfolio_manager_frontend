import {Col, Card, Button} from 'react-bootstrap';
import DoughnutChart from '../doughnut-chart-component/doughnut-chart';
import NewTransaction from '../../new-transaction-component/new_transaction';

export default function PrivatePortfolioCard(props){

    // function addTransaction(){
    //     return(
    //         <div class="container">
    //             <NewTransaction portfolio={props.portoflio}/>
    //         </div>
    //     )
    // }

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
                {/* <Button variant="primary" style={{margin:"5px"}} onClick={props.setDisplayPortfolio}>Details</Button> */}
                <Button variant="primary" style={{margin:"5px"}} onClick={props.onOpenTransactionForm} >Add Transaction</Button>
            </Card.Body>
        </Card>
    </Col>
    );
}