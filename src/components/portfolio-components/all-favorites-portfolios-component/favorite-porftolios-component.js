import axios from "axios";
import { useState, useEffect } from "react";
import FavoritePortfoliosView from "./favorite-porftolios-component";
import PublicPortfoliosView from "../all-public-portfolios-component/public-portfolios-view-component";
import { PingApiFavoritesUserId, PingApiLoginFavorites } from "../../ServerRequest";

export default function FavoritePortfolios(props) {
    console.log(`favorites list before useEffect, props: ${props}`);
    const [favoriteList, setFavoriteList] = useState(null);
    useEffect(()=> {
        console.log(`In the favorites useEffect`)
        
        // axios.get(process.env.REACT_APP_API_URL+"/login?token="+sessionStorage.getItem("Authorization"), 
        // {headers: {"Authorization": sessionStorage.getItem("Authorization")}})
        PingApiLoginFavorites().then(userResponse => {
            // axios.get( `${process.env.REACT_APP_API_URL}/portfolios/${userResponse.userId}/favorites`, {headers: {"Authorization": sessionStorage.getItem("Authorization")}})
            PingApiFavoritesUserId(userResponse.userId).then(portfoliosResponse=>{
                setFavoriteList(portfoliosResponse);
                console.log("favorites list: "+JSON.stringify(portfoliosResponse));
            })
        }
        )
    },[]);

    return <PublicPortfoliosView isFavorites={true} portfolioList={favoriteList}/>
}