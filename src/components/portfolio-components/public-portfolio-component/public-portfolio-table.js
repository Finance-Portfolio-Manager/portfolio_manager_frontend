import { Table, Button, Card  } from "react-bootstrap";
import { useState } from "react";

export default function PublicPortfolioTable(props){

    const [tableRows, setTableRows] = useState(props.tableRows);

    return (
        <>
        <Card className=' fadeInDown primary-text text-center'>
            <Card.Body>
            {/* <div className="wrapper fadeInDown folioContent" id="folioContent"> */}
                <div className="table-responsive primary-text">
                    <Table id="stocks-view" className="table borderless table-hover primary-text" responsive>
                        <thead>
                            <tr>
                                <th scope="col">Stock</th>
                                <th scope="col">Current Price</th>
                            </tr>
                        </thead>
                        <tbody id="stocks-body">
                            
                            {tableRows.map((tableRow) => {
                                return (<tr>
                                    <td>{tableRow.symbol}</td>
                                    <td>{tableRow.currentPrice}</td>
                                </tr>)
                            })}
                        </tbody>
                    </Table>
                    <Button variant="primary" onClick={props.toggleShowDetails}>Hide Details</Button>
                </div>
                </Card.Body>
                </Card>
        </>
    );
}