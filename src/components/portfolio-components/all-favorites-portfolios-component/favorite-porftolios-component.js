import axios from "axios";
import { useState, useEffect } from "react";
import FavoritePortfoliosView from "./favorite-porftolios-component";

export default function FavoritePortfolios(props) {

    const [favoriteList, setFavoriteList] = useState();
    useEffect(()=> {
        axios.get(process.env.REACT_APP_API_URL+'/portfolios/2/favorites', {headers: {"Authorization": sessionStorage.getItem("Authorization")}})
        .then(portfoliosResponse=>{setFavoriteList(portfoliosResponse.data)
                                    console.log("promise: "+JSON.stringify(portfoliosResponse.data))})
    },[]);

    return <FavoritePortfoliosView favoriteList={favoriteList}/>
}