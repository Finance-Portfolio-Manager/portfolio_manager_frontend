import { Row, Col, Card, Container } from "react-bootstrap";
import PrivatePortfolioTable from "./private-portfolio-table";
import DoughnutChart from "../doughnut-chart-component/doughnut-chart";

export default function PrivatePortfolioDetails(props) {
  return (
    <Container className='mb-5'>
      {/* <Row >
        <h3 className='account__header'>{props.portfolio.name}</h3>
      </Row> */}
      <Row className='portfolio__container'>
        <Col md='6'  className='global__pie-card '>
            {/* Removed className="folioContent" */}
          <Card className="global__card text-center primary-text">
            <Card.Body>
              <Card.Title>{props.portfolio.name}</Card.Title>
              <DoughnutChart user={props.user} portfolio={props.portfolio} />
            </Card.Body>
          </Card>
        </Col>
        <Col className='portfolio__table'>
          <PrivatePortfolioTable
            tableRows={props.portfolio.stocks}
            unassignDisplayPortfolio={props.unassignDisplayPortfolio}
          />
        </Col>
      </Row>
    </Container>
  );
}
