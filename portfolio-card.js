export default function PortfolioCard(props) {

    {/* Props should contain an object of portfolio, containing a name and id field*/}

    const revatureOrange = {
        backgroundColor : "#F26925"
    }

    let cardHtml = <><div className="container my-3">
        <div className="card">
            <div className="card-header py-3" style={revatureOrange}></div>
                <div className="card-body">
                    <div className="col-2">
                        <a href="TODO Link to portfolio" id="cardLink"><h5 className="card-title">${props.portfolio.name}</h5></a>
                    </div>
                    <div className="container">
                        <p className="card-text">TODO Add portfolio information get code (maybe top value items?)</p>
                        <p>Value: ${props.portfolio.value}</p>
                    </div>
                </div>
            <div className="card-footer py-3" style={revatureOrange}></div>
        </div>
    </div></>

    {/* TODO Add manipulation code to get info onto cards */}

    return cardHtml;
}