import { Row, Col } from "react-bootstrap";
import PrivatePortfolioTable from "./private-portfolio-table";
import DoughnutChart from "../doughnut-chart-component/doughnut-chart";

export default function PrivatePortfolioDetails(props){

    return (
        <>
        <Row>
            <h3>{props.portfolio.name}</h3>
        </Row>
        <Row >
            <Col md={3} className="folioContent"><DoughnutChart user={props.user} portfolio={props.portfolio}/></Col>
            <Col className="folioContent">
                <PrivatePortfolioTable portfolioId={props.portfolio.portfolioId} tableRows={props.portfolio.stocks} unassignDisplayPortfolio={props.unassignDisplayPortfolio}/>
            </Col>
        </Row>
        </>
    )
}