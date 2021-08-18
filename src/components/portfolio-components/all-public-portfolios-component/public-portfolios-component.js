import PublicPortfoliosView from "./public-portfolios-view-component";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function PublicPortfolios(props){

    let [portfolioList, setPortfolioList] = useState(null);

    useEffect(()=>{
        axios.get("http://apexstocks.xyz/services/portfolios/public", {headers: {"Authorization": sessionStorage.getItem("Authorization")}})
        .then(portfoliosResponse=>{setPortfolioList(portfoliosResponse.data)
                                    console.log("promise: "+JSON.stringify(portfoliosResponse.data))})
        }, []);

    return <PublicPortfoliosView isFavorites={false} portfolioList={portfolioList}/>
}