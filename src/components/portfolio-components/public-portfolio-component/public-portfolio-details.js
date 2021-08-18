import {Row, Col, Card} from "react-bootstrap";
import PublicPortfolioTable from "./public-portfolio-table";
import PublicDoughnutChart from "../doughnut-chart-component/public-doughnut-chart";

export default function PublicPortfolioDetails(props){
    return (
        <>
        {/* <Row className='flex-row-reverse justify-content-between mb-5'>
            <Col  md={6} md={8} className='mb-5' >
                <PublicPortfolioTable tableRows={props.portfolio.stocks} toggleShowDetails={props.toggleShowDetails}/>
            </Col>
        <Row> 
            <Col   md={6} md={4} className='mb-5'>
            <Card className='global__card text-center primary-text'>
                <Card.Body>
                <PublicDoughnutChart user={props.username} portfolio={props.portfolio}/>
                </Card.Body>
           </Card> 
           </Col>
        </Row> */}
        <Col sm="4">
            <Card className='secondary-color portfolio__public-card mb-5 global__card py-2'>
                <Row>
                    <Col xs={12}>
                        <PublicDoughnutChart user={props.username} portfolio={props.portfolio}/>
                    </Col>
                </Row>
                <Row >
                    {/* <Col md={2}/> */}
                    <Col xs={12}>
                        <PublicPortfolioTable tableRows={props.portfolio.stocks} toggleShowDetails={props.toggleShowDetails}/>
                    </Col>
                    {/* <Col md={2}/> */}
                </Row>
            </Card>
        </Col>
        </>
    )
}