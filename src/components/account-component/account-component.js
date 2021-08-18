import React from "react";
import PortfolioCard from "../portfolio-components/private-portfolio-component/private-portfolio-view";
import AccountView from "./account-view-component"
import { useEffect, useState } from "react";
import axios from "axios";

//TODO: will be importing functions not yet defined
//TODO: This component will get a list of portfolios based on the account ID given
//TODO: This component will send that list of portfolios to AccountView as props

export default function Account(props){

    let [portfolioArray, setPortfolioArray] = useState([]);
    let [user, setUser] = useState({})
    
    
    useEffect(()=>{
        axios.get(process.env.REACT_APP_API_URL+"/login?token="+sessionStorage.getItem("Authorization"), 
            {headers: {"Authorization": sessionStorage.getItem("Authorization")}})
        .then(userResponse => {
            setUser(userResponse.data);
            
            axios.get(process.env.REACT_APP_API_URL+"/portfolios/"+userResponse.data.userId, 
            {headers: {"Authorization": sessionStorage.getItem("Authorization"),
                        "Access-Control-Allow-Origin": sessionStorage.getItem("Authorization")}})
            .then(portfoliosResponse => {
                setPortfolioArray(portfoliosResponse.data);
            })
        })
        
        }, []);
    
    return <AccountView 
        portfolioArray={portfolioArray} 
        user={user} 
        setPortfolioArray={setPortfolioArray}/>

}
