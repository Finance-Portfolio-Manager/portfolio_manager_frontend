//TODO: Render a list of PublicPortfolioView components based on the list of public portfolios passed in as props
import React from "react";
import { CardGroup } from "react-bootstrap";
import PublicPortfolioView from "../public-portfolio-component/public-portfolio-view";
import { useState } from "react";

export default function PublicPortfoliosView(props){

    return (
  
        <div style={{backgroundColor:"#B9B9BA"}}>
            
            <div className="container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="row">
                    {props.isFavorites ? <h2>Favorite Portfolios</h2> : <h2>Public Portfolios</h2>}

                    <div className="row py-3" style={{width: "70rem", borderStyle: "solid"}}>
                        
                            {props.portfolioList ?
                            props.portfolioList.map((portfolio) => {
                                    return(                 
                                        <PublicPortfolioView 
                                        portfolio={portfolio} 
                                        username={portfolio.username}/>
                                    )
                            }):<></>}

                    </div>
                </div>
            </div>
        </div>
    )

}