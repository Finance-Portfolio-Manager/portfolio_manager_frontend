import axios from "axios";
import { useState, useEffect } from "react";
import FavoritePortfoliosView from "./favorite-porftolios-component";
import PublicPortfoliosView from "../all-public-portfolios-component/public-portfolios-view-component";

export default function FavoritePortfolios(props) {
    const [loading, setLoading] = useState(true);

    console.log(`favorites list before useEffect, props: ${props}`);
    const [favoriteList, setFavoriteList] = useState(null);
    useEffect(()=> {
        console.log(`In the favorites useEffect`)
        
        axios.get(process.env.REACT_APP_API_URL+"/login?token="+sessionStorage.getItem("Authorization"), 
        {headers: {"Authorization": sessionStorage.getItem("Authorization")}})
        .then(userResponse => {
            axios.get( `${process.env.REACT_APP_API_URL}/portfolios/${userResponse.data.userId}/favorites`, {headers: {"Authorization": sessionStorage.getItem("Authorization")}})
            .then(portfoliosResponse=>{
                setFavoriteList(portfoliosResponse.data);
                console.log("favorites list: "+JSON.stringify(portfoliosResponse.data));
                setLoading(false);
            })
        }
        )
    },[]);

    return <PublicPortfoliosView isFavorites={true} portfolioList={favoriteList} loading={loading}/>
}