import React from "react";

export default function PortfolioCard(props){

    return (
        <>
        <div className="container my-3"><div className="card">
            <div className="card-header py-3"></div>
            <div className="card-body">
                <div className="col-2">
                    <a href="TODO link to details" id="cardLink"><h5 className="card-title">{props.portfolio.name}</h5></a>
                </div>
                <div className="container">
                    <p>TODO: add details about portfolio</p>
                    <p>Value: ${props.portfolio.value}</p>
                </div>
            </div>
            <div className="card-footer py-3"></div>
        </div></div>
        </>
    )
}