import {Row, Col} from "react-bootstrap";
import PublicPortfolioTable from "./public-portfolio-table";
import DoughnutChart from "../doughnut-chart-component/doughnut-chart";

export default function PublicPortfolioDetails(props){
    return (
        <>
        <Row>
            <Col md={2}/>
            <Col>
                <PublicPortfolioTable tableRows={props.portfolio.stockList} toggleShowDetails={props.toggleShowDetails}/>
            </Col>
            <Col md={2}/>
        </Row>
        <Row>
            <Col/>
            <Col>
                <DoughnutChart user={props.user} portfolio={props.portfolio}/>
            </Col>
            <Col/>
        </Row>
        </>
    )
}