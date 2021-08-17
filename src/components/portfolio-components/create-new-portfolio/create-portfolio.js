import axios from "axios";
import { useState } from "react";

import CreatePortfolio from "./create-portfolio-form";

export default function NewPortfolio(props){
    const [portfolio,setPortfolio] = useState({
        "user":props.user,
        "name":""});

    // const handleChange = (e)=>{
    //     const target = e.target;
    //     let {name, value} = e.target;
    //     let requestBody = {
    //         user : props,
    //         name : target.name === 'name' ? target.value : 'empty',
    //         isPublic : target.type === 'checkbox' ? target.checked : target.value
    //     };
        
    //     console.log(requestBody);
    //     setPortfolio(requestBody);
    // }
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
        axios.post(process.env.REACT_APP_API_URL + "/portfolios", JSON.stringify(portfolio), {headers: {'Authorization': jwtToken, 'Content-Type': 'application/json'}})
            .then(response=>{
                console.log(response);
            })
            .catch(err=>console.error(err));
    }

    return <CreatePortfolio onChange={handleChange} onSubmit={handleSubmit} portfolio={props}></CreatePortfolio>;
}