import PublicPortfoliosView from "./public-portfolios-view-component";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PingApiPortfoliosPublic } from "../../ServerRequest";

export default function PublicPortfolios(props){

    let [portfolioList, setPortfolioList] = useState(null);

    useEffect(()=>{
        // axios.get("http://apexstocks.xyz/services/portfolios/public", {headers: {"Authorization": sessionStorage.getItem("Authorization")}})
        PingApiPortfoliosPublic().then(portfoliosResponse=>{setPortfolioList(portfoliosResponse)
            console.log("promise: "+JSON.stringify(portfoliosResponse))})
        }, []);

    return <PublicPortfoliosView isFavorites={false} portfolioList={portfolioList}/>
}