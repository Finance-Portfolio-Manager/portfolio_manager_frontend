import axios from "axios";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import NewTransactionForm from "./new_transaction_form";


export default function NewTransaction(props){

    // const testPortfolio = {
    //     portfolioId: 1,
    //     portfolioName: "Test Portfolio 1",
    //     isPublic: true,
    //     user_id: 1
    // }

    const [transaction, setTransaction] = useState({"portfolio": props.portfolio});

    const handleChange = (e)=>{
        let {name, value} = e.target;
        if (name=="dateTime"){
            value = value+"T00:00:00"
        }
        let newTransaction = {...transaction, [name]:value};
        console.log(newTransaction);
        setTransaction(newTransaction);
    }


    const createNewTransaction = (e)=>{
        let jwtToken = sessionStorage.getItem("Authorization");
        e.preventDefault();
        axios.post(process.env.REACT_APP_API_URL + "/transactions", transaction, {headers: {'Authorization': jwtToken, 'Content-Type': 'application/json'}})
            .then(response=>{
                console.log(response);
            })
            .catch(err=>console.error(err));
    }


    return <NewTransactionForm handleChange={handleChange} submitConfirm={createNewTransaction}></NewTransactionForm>;
}
