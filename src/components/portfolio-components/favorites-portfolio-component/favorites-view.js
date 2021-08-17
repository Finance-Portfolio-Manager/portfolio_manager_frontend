import { useState } from "react";
import FavoritesDetails from "./favorites-details";
import FavoritesCard from "./favorites-card";

export default function FavoritesView(props) {
    
    const [showDetails, setShowDetails] = useState();

    function toggleShowDetails(){
        setShowDetails(!showDetails)
    }

    return (
        <>
        {showDetails ?
            <FavoritesDetails user={props.username} portfolio={props.portfolio} toggleShowDetails={toggleShowDetails} />

        :
            <FavoritesCard user={props.username} portfolio={props.portfolio} toggleShowDetails={toggleShowDetails} />
        }
        </>
    )
}