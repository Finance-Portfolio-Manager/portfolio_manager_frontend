import {Row, Col, Card} from "react-bootstrap";
import PublicPortfolioTable from "./public-portfolio-table";
import DoughnutChart from "../doughnut-chart-component/doughnut-chart";

export default function PublicPortfolioDetails(props){
    return (
        <>
        <Col sm="4">
            <Card>
                <Card.Body>
                    <Row>
                        <Col md={2}/>
                        <Col>
                            <PublicPortfolioTable tableRows={props.portfolio.stocks} toggleShowDetails={props.toggleShowDetails}/>
                        </Col>
                        <Col md={2}/>
                    </Row>
                    <Row>
                        <Col/>
                        <Col>
                            <DoughnutChart user={props.username} portfolio={props.portfolio}/>
                        </Col>
                        <Col/>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
        </>
    )
}