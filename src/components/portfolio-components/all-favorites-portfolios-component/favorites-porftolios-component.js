import axios from "axios";
import { useState } from "react";
import FavoritesComponentsView from "./favorites-portfolios-view-component"


export default function FavoritesPortfolios(props) {

    const [favoritesList, setFavoritesList] = useState();

    useEffect(()=> {
        axios.get(`http://apexstocks.xyz/services/portfolios/${props.user.id}/favorites`, {headers: {"Authorization": sessionStorage.getItem("Authorization")}})
        .then(portfoliosResponse=>{setFavoritesList(portfoliosResponse.data)
                                    console.log("promise: "+JSON.stringify(portfoliosResponse.data))})
    },[]);

    return <FavoritesComponentsView favoritesList={favoritesList}/>
}