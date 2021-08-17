import axios from "axios";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import Account from "../../account-component/account-component";

import CreatePortfolio from "./create-portfolio-form";

function NewPortfolio(props){
    const [portfolio,setPortfolio] = useState("");

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setPortfolio({...portfolio, [name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const requestBody = {
            user: portfolio.user,
            portfolioName: portfolio.name,
            isPublic: portfolio.isPublic,
            transactions: portfolio.transactions
        };
        console.log(requestBody);
        console.log(props.user);

        let jwtToken = sessionStorage.getItem("Authorization");
        axios.post(process.env.REACT_APP_API_URL + "/portfolios/", portfolio, {headers: {'Authorization': jwtToken, 'Content-Type': 'application/json'}})
            .then(response=>{
                console.log(response);
            })
            .catch(err=>console.error(err));
    }

    return <CreatePortfolio onChange={handleChange} onSubmit={handleSubmit}></CreatePortfolio>;
}

export default withRouter(NewPortfolio);