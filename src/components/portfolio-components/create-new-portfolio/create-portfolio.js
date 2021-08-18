import axios from "axios";
import { useState } from "react";
import { PingApiCreatePortfolio } from "../../ServerRequest";

import CreatePortfolioForm from "./create-portfolio-form";

export default function CreatePortfolio(props){
    const [portfolio,setPortfolio] = useState({
        user:props.user,
        name:""});

  
    const handleChange = (e)=>{
        let {name, value} = e.target;
        value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        let newPortfolio = {...portfolio, [name]:value};
        console.log(newPortfolio);
        setPortfolio(newPortfolio);
    }

    const handleSubmit = (e)=>{
        e.preventDefault(); 
        console.log(JSON.stringify(portfolio));   
        let jwtToken = sessionStorage.getItem("Authorization");
            PingApiCreatePortfolio(JSON.stringify(portfolio), jwtToken).then(response=>{
                console.log(response);
                props.refreshAccountPage();
                props.onClosePortfolioForm();
            })
            .catch(err=>console.error(err));
    }

    return <CreatePortfolioForm onChange={handleChange} onSubmit={handleSubmit} portfolio={props}/>;
}