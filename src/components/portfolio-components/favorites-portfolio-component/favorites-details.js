import {Row, Col} from "react-bootstrap";
import FavoritesTable from "./favorites-table";
import DoughnutChart from "../doughnut-chart-component/doughnut-chart";

export default function FavoritesDetails(props){
    return (
        <>
        <Row>
            <Col md={2}/>
            <Col>
                <FavoritesTable tableRows={props.portfolio.stocks} toggleShowDetails={props.toggleShowDetails}/>
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
        </>
    )
}