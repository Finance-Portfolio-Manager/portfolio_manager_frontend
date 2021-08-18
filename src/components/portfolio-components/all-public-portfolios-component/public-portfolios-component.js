import PublicPortfoliosView from "./public-portfolios-view-component";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PingApiPortfoliosPublic } from "../../ServerRequest";

export default function PublicPortfolios(props){

    let [portfolioList, setPortfolioList] = useState(null);

    useEffect(()=>{
        PingApiPortfoliosPublic().then(portfoliosResponse=>{setPortfolioList(portfoliosResponse)
            console.log("promise: "+JSON.stringify(portfoliosResponse))})
        }, []);

    return <PublicPortfoliosView isFavorites={false} portfolioList={portfolioList}/>
}