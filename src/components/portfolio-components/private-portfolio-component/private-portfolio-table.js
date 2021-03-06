import { Table } from "react-bootstrap";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import PortfolioChart from "../../portfolio-chart-component/portfolio-chart";

export default function PrivatePortfolioTable(props){

    //const displayRows = tableRows.map((tableRow) => tableRow);
    // console.log(`display Rows: ${displayRows}`);

    console.log(`TableRows: ${JSON.stringify(props.tableRows)}`);

    return <>
    {/* REMOVED className="wrapper fadeInDown folioContent mx-3" id="portfolio" */}
        <Card className='global__card fadeInDown primary-text'>
            <Card.Body>
            <div id="portfolio-values">
                <h4 id = "portfolio-total"></h4>
                <div id = "portfolio-change"></div>
                <div id = "dollar-change"></div>
            </div>
            <div>
                <PortfolioChart portfolioId={props.portfolioId}></PortfolioChart>
            </div>
            <div className="table-responsive primary-text">
                <Table id="stocks-view" className="table borderless table-hover primary-text" responsive>
    
                    <thead>
                        <tr>
                            <th scope="col">Stock</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Average Buy Price</th>
                            <th scope="col">Current Price</th>
                            <th scope="col">Daily Change</th>
                        </tr>
                    </thead>
                    <tbody id="stocks-body">
                        
                        {props.tableRows.map((tableRow) => {
                            console.log(`tableRow: ${JSON.stringify(tableRow)}`);
                            return (
                            <tr onClick={() => {
                                props.onOpenChart();
                                props.setChartSymbol(tableRow.symbol);
                            }}>
                                <td>{tableRow.symbol}</td>
                                <td>{tableRow.quantity}</td>
                                <td>{tableRow.avgBuyPrice}</td>
                                <td>{tableRow.currentPrice}</td>
                                <td>{`${tableRow.changePercentage}%`}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
                <Button variant="primary" className='global__button-effect' onClick={props.unassignDisplayPortfolio}>Hide Details</Button>
            </div>
            </Card.Body>
        </Card>
    </>
}