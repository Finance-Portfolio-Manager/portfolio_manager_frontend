import { Table, Button } from "react-bootstrap";

export default function PublicPortfolioTable(props){
    return (
        <>
            <div className="wrapper fadeInDown folioContent" id="folioContent">
                <div className="table-responsive">
                    <Table id="stocks-view" className="table borderless table-hover" responsive>
                        <thead>
                            <tr>
                                <th scope="col">Stock</th>
                                <th scope="col">Current Price</th>
                            </tr>
                        </thead>
                        <tbody id="stocks-body">
                            
                            {tableRows.map((tableRow) => {
                                return (<tr>
                                    <td>{tableRow.stockName}</td>
                                    <td>{tableRow.stockCurrentPrice}</td>
                                </tr>)
                            })}
                        </tbody>
                    </Table>
                    <Button variant="primary" onClick={props.toggleShowDetails}>Go to card</Button>
                </div>
            </div>   
        </>
    );
}