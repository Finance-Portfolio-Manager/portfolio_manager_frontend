import { Row, Col, Modal, Button } from "react-bootstrap";
import PrivatePortfolioTable from "./private-portfolio-table";
import ChartComponent from "../../chart-component/chart-component";
import DoughnutChart from "../doughnut-chart-component/doughnut-chart";
import { useState } from "react";

export default function PrivatePortfolioDetails(props){

    let [chartSymbol, setChartSymbol] = useState("");
    let [showStockChart, setShowStockChart] = useState(false);

    let handleCloseChart = () => setShowStockChart(false);
    let handleOpenChart = () => setShowStockChart(true)

    return (
        <>
        <Row>
            <h3>{props.portfolio.name}</h3>
        </Row>
        <Row >
            <Modal 
                show={showStockChart} 
                onHide={handleCloseChart}
                size="lg"
            >
                
                <Modal.Header closeButton>
                <Modal.Title>{chartSymbol}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ChartComponent
                        symbol={chartSymbol}
                        type="candlestick" 
                        width="700"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseChart}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Col md={3} className="folioContent"><DoughnutChart user={props.user} portfolio={props.portfolio}/></Col>
            <Col className="folioContent">


                <PrivatePortfolioTable 
                    tableRows={props.portfolio.stocks} 
                    unassignDisplayPortfolio={props.unassignDisplayPortfolio}
                    onOpenChart={handleOpenChart}
                    setChartSymbol={setChartSymbol}/>
            </Col>
        </Row>
        </>
    )
}